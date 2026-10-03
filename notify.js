(() => {
  const config = {
    vapidPublicKey: window.KABANNA_PUSH_CONFIG?.vapidPublicKey || "",
    subscriptionUrl: window.KABANNA_PUSH_CONFIG?.subscriptionUrl || ""
  };

  const urlBase64ToUint8Array = (value) => {
    const padding = "=".repeat((4 - (value.length % 4)) % 4);
    const base64 = (value + padding).replace(/-/g, "+").replace(/_/g, "/");
    const raw = window.atob(base64);
    return Uint8Array.from(raw, (character) => character.charCodeAt(0));
  };

  const setStatus = (message, isError = false) => {
    const status = document.getElementById("notification-status");
    if (!status) return;
    status.textContent = message;
    status.classList.toggle("text-danger", isError);
    status.classList.toggle("text-light-emphasis", !isError);
  };

  const enable = async () => {
    if (!window.isSecureContext || !("serviceWorker" in navigator) || !("PushManager" in window)) {
      throw new Error("Las notificaciones requieren un navegador compatible y una conexión HTTPS.");
    }
    if (!config.vapidPublicKey || !config.subscriptionUrl) {
      throw new Error("Falta configurar la clave VAPID pública y la URL del servidor de notificaciones.");
    }

    const permission = await Notification.requestPermission();
    if (permission !== "granted") {
      throw new Error("No se concedió permiso para mostrar notificaciones.");
    }

    const registration = await navigator.serviceWorker.register("./service-worker.js");
    await navigator.serviceWorker.ready;
    let subscription = await registration.pushManager.getSubscription();

    if (!subscription) {
      subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(config.vapidPublicKey)
      });
    }

    const response = await fetch(config.subscriptionUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(subscription)
    });
    if (!response.ok) {
      throw new Error("El servidor no pudo guardar la suscripción de notificaciones.");
    }

    return subscription;
  };

  const button = document.getElementById("enable-notifications");
  if (button) {
    button.addEventListener("click", async () => {
      button.disabled = true;
      setStatus("Activando notificaciones...");
      try {
        await enable();
        setStatus("Notificaciones activadas.");
      } catch (error) {
        setStatus(error.message || "No se pudieron activar las notificaciones.", true);
      } finally {
        button.disabled = false;
      }
    });
  }

  window.kabannaNotify = {
    configure(options = {}) {
      if (typeof options.vapidPublicKey === "string") config.vapidPublicKey = options.vapidPublicKey;
      if (typeof options.subscriptionUrl === "string") config.subscriptionUrl = options.subscriptionUrl;
    },
    enable
  };
})();
