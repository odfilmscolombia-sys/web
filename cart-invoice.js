(function () {
  const CART_STORAGE_KEY = 'kabanna-cart-items';
  const WHATSAPP_NUMBER = '573014412498';

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

  async function exportInvoiceAsImage(invoiceElement, fileName = 'factura-kabanna.jpg') {
    const canvas = await html2canvas(invoiceElement, {
      backgroundColor: '#ffffff',
      scale: 2
    });

    const dataUrl = canvas.toDataURL('image/jpeg', 0.95);
    const blob = await (await fetch(dataUrl)).blob();
    const file = new File([blob], fileName, { type: 'image/jpeg' });

    return { dataUrl, file };
  }

  async function downloadAndShareInvoice(invoiceElement, totalText, phone = WHATSAPP_NUMBER) {
    const { dataUrl, file } = await exportInvoiceAsImage(invoiceElement);

    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = 'factura-kabanna.jpg';
    link.click();

    const message = `Hola KABANNA FAST-FOOD, adjunto mi factura de pedido. Total: ${totalText}`;

    if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
      try {
        await navigator.share({
          files: [file],
          title: 'Factura KABANNA FAST-FOOD',
          text: message
        });
        return { shared: true, dataUrl };
      } catch (error) {
        console.warn('No se pudo compartir la factura:', error);
      }
    }

    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    return { shared: false, dataUrl };
  }

  window.kabannaCartStorage = { loadCart, saveCart, clearCart };
  window.kabannaInvoice = { exportInvoiceAsImage, downloadAndShareInvoice };
})();
