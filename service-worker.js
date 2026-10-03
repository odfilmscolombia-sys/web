self.addEventListener("push", (event) => {
  let payload = {};
  if (event.data) {
    try {
      payload = event.data.json();
    } catch {
      payload = { body: event.data.text() };
    }
  }

  const title = payload.title || "KABANNA FAST-FOOD";
  const options = {
    body: payload.body || payload.text || "Tienes una nueva notificación.",
    icon: "./pictures/logo-kabanna.png",
    badge: "./pictures/logo-kabanna.png",
    data: { url: payload.url || "./index.html" }
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();

  event.waitUntil((async () => {
    const requestedUrl = new URL(event.notification.data?.url || "./index.html", self.registration.scope);
    const targetUrl = requestedUrl.origin === self.location.origin
      ? requestedUrl.href
      : new URL("./index.html", self.registration.scope).href;
    const windows = await self.clients.matchAll({ type: "window", includeUncontrolled: true });

    for (const client of windows) {
      if (client.url === targetUrl && "focus" in client) return client.focus();
    }

    for (const client of windows) {
      if ("navigate" in client && "focus" in client) {
        await client.navigate(targetUrl);
        return client.focus();
      }
    }

    return self.clients.openWindow(targetUrl);
  })());
});
