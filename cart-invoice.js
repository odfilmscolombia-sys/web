(function () {
  const CART_STORAGE_KEY = 'kabanna-cart-items';
  const WHATSAPP_NUMBER = '573014412498';
  const INVOICE_FOLDER = 'fact_kabanna';

  function loadCart() {
    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY);
      if (!stored) return [];
      const parsed = JSON.parse(stored);
      return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
      console.warn('No se pudo cargar el carrito:', error);
      return [];
    }
  }

  function saveCart(cartItems) {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
  }

  function clearCart() {
    localStorage.removeItem(CART_STORAGE_KEY);
  }

  function createInvoiceFileName() {
    const now = new Date();
    const date = [now.getFullYear(), String(now.getMonth() + 1).padStart(2, '0'), String(now.getDate()).padStart(2, '0')].join('');
    const time = [now.getHours(), now.getMinutes(), now.getSeconds()].map((part) => String(part).padStart(2, '0')).join('');
    return `factura-kabanna-${date}-${time}.jpg`;
  }

  async function exportInvoiceAsImage(invoiceElement, fileName = createInvoiceFileName()) {
    const canvas = await html2canvas(invoiceElement, {
      backgroundColor: '#ffffff',
      scale: 2
    });

    const dataUrl = canvas.toDataURL('image/jpeg', 0.95);
    const blob = await (await fetch(dataUrl)).blob();
    const file = new File([blob], fileName, { type: 'image/jpeg' });

    return { dataUrl, file, base64: dataUrl.split(',')[1] };
  }

  function downloadImage(dataUrl, fileName) {
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = fileName;
    link.click();
  }

  function saveInvoiceInAndroid(fileName, base64) {
    const android = window.Android;
    if (!android || typeof android.saveInvoiceToFolder !== 'function') return false;

    const saved = android.saveInvoiceToFolder(INVOICE_FOLDER, fileName, base64, 'image/jpeg');
    if (saved === false) throw new Error('Android no pudo guardar la factura.');
    return true;
  }

  async function downloadInvoice(invoiceElement) {
    const { dataUrl, file, base64 } = await exportInvoiceAsImage(invoiceElement);
    const savedOnDevice = saveInvoiceInAndroid(file.name, base64);
    if (!savedOnDevice) downloadImage(dataUrl, file.name);
    return { saved: true, native: savedOnDevice, fileName: file.name };
  }

  async function shareInvoice(invoiceElement, totalText, phone = WHATSAPP_NUMBER) {
    const { dataUrl, file, base64 } = await exportInvoiceAsImage(invoiceElement);
    const message = `Hola KABANNA FAST-FOOD, adjunto mi factura de pedido. Total: ${totalText}`;
    const android = window.Android;
    const savedOnDevice = saveInvoiceInAndroid(file.name, base64);

    if (savedOnDevice && typeof android.shareInvoiceToWhatsApp === 'function') {
      android.shareInvoiceToWhatsApp(phone, message, INVOICE_FOLDER, file.name);
      return { saved: true, shared: true, native: true, fileName: file.name };
    }

    if (!savedOnDevice) downloadImage(dataUrl, file.name);

    if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
      try {
        await navigator.share({
          files: [file],
          title: 'Factura KABANNA FAST-FOOD',
          text: message
        });
        return { saved: true, shared: true, native: savedOnDevice, fileName: file.name };
      } catch (error) {
        console.warn('No se pudo compartir la factura:', error);
      }
    }

    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    return { saved: true, shared: false, native: savedOnDevice, fileName: file.name };
  }

  window.kabannaCartStorage = { loadCart, saveCart, clearCart };
  window.kabannaInvoice = { exportInvoiceAsImage, downloadInvoice, shareInvoice };
})();
