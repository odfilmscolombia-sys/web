(function () {
  const bannerId = 'conexion-status-banner';
  const closeButtonId = 'conexion-status-close';
  const warningMessage = 'Para una mejor experiencia, debes tener conexión a internet. Algunos elementos pueden no cargarse correctamente sin red.';
  const recoveryMessage = 'Conexión a internet restaurada. Recargando la página para actualizar los elementos.';
  const checkIntervalMs = 30000;
  const recoveryDurationMs = 4000;

  let dismissedByUser = false;
  let lastConnectionState = 'unknown';
  let banner = null;
  let reloadTimer = null;

  function createBanner() {
    if (banner) return banner;

    banner = document.getElementById(bannerId);

    if (!banner) {
      banner = document.createElement('div');
      banner.id = bannerId;
      banner.setAttribute('role', 'status');
      banner.setAttribute('aria-live', 'polite');
      banner.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap;">
          <div>
            <strong id="conexion-status-title" style="font-size:14px; display:block;">Sin conexión a internet</strong>
            <span id="conexion-status-text" style="font-size:13px; opacity:0.95;">${warningMessage}</span>
          </div>
          <button id="${closeButtonId}" type="button" aria-label="Cerrar alerta" style="border:none; background:rgba(255,255,255,0.2); color:#fff; border-radius:999px; width:32px; height:32px; cursor:pointer; font-size:18px; line-height:1;">×</button>
        </div>
      `;

      Object.assign(banner.style, {
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        zIndex: '99999',
        padding: '12px 16px',
        background: '#b91c1c',
        color: '#fff',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.25)',
        fontFamily: 'Arial, sans-serif',
        display: 'none'
      });

      document.body.appendChild(banner);

      const closeButton = document.getElementById(closeButtonId);
      if (closeButton) {
        closeButton.addEventListener('click', () => {
          dismissedByUser = true;
          hideBanner();
        });
      }
    }

    return banner;
  }

  function showBanner(type) {
    const currentBanner = createBanner();
    const title = document.getElementById('conexion-status-title');
    const text = document.getElementById('conexion-status-text');

    if (type === 'recovery') {
      currentBanner.style.background = '#15803d';
      if (title) title.textContent = 'Conexión restaurada';
      if (text) text.textContent = recoveryMessage;
    } else {
      currentBanner.style.background = '#b91c1c';
      if (title) title.textContent = 'Sin conexión a internet';
      if (text) text.textContent = warningMessage;
    }

    currentBanner.style.display = 'block';
    document.body.classList.add('offline-mode');
  }

  function hideBanner() {
    if (banner) {
      banner.style.display = 'none';
    }
    document.body.classList.remove('offline-mode');
  }

  function clearReloadTimer() {
    if (reloadTimer) {
      clearTimeout(reloadTimer);
      reloadTimer = null;
    }
  }

  function scheduleRecoveryReload() {
    clearReloadTimer();
    reloadTimer = setTimeout(() => {
      window.location.reload();
    }, recoveryDurationMs);
  }

  function checkInternetAccess() {
    const urlsToTry = [
      'https://www.google.com/generate_204',
      'https://www.microsoft.com/favicon.ico',
      'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
    ];

    return new Promise((resolve) => {
      let completed = false;

      const finish = (result) => {
        if (!completed) {
          completed = true;
          resolve(result);
        }
      };

      const tryUrl = (index) => {
        if (index >= urlsToTry.length) {
          finish(false);
          return;
        }

        const url = urlsToTry[index];
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000);

        fetch(url, {
          method: 'HEAD',
          mode: 'no-cors',
          cache: 'no-store',
          signal: controller.signal
        })
          .then(() => {
            clearTimeout(timeoutId);
            finish(true);
          })
          .catch(() => {
            clearTimeout(timeoutId);
            tryUrl(index + 1);
          });
      };

      tryUrl(0);
    });
  }

  async function updateStatus() {
    createBanner();

    if (!navigator.onLine) {
      clearReloadTimer();
      if (lastConnectionState !== 'offline') {
        lastConnectionState = 'offline';
        dismissedByUser = false;
        showBanner('warning');
      }
      return;
    }

    const hasInternet = await checkInternetAccess();

    if (!hasInternet) {
      clearReloadTimer();
      if (lastConnectionState !== 'no-internet') {
        lastConnectionState = 'no-internet';
        dismissedByUser = false;
        showBanner('warning');
      }
      return;
    }

    if (lastConnectionState === 'offline' || lastConnectionState === 'no-internet') {
      lastConnectionState = 'online';
      dismissedByUser = false;
      showBanner('recovery');
      scheduleRecoveryReload();
      return;
    }

    lastConnectionState = 'online';
    clearReloadTimer();
    hideBanner();
  }

  function startMonitoring() {
    window.addEventListener('online', () => updateStatus());
    window.addEventListener('offline', () => updateStatus());

    setInterval(() => {
      updateStatus();
    }, checkIntervalMs);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      startMonitoring();
      updateStatus();
    });
  } else {
    startMonitoring();
    updateStatus();
  }
})();
