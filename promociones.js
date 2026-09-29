(function () {
  const promoProducts = [1, 2, 3, 4, 25,26,27,];

  function addPromoBadge() {
    const cards = document.querySelectorAll('[data-product-id]');

    cards.forEach((cardButton) => {
      const productId = Number(cardButton.getAttribute('data-product-id'));
      if (!promoProducts.includes(productId)) return;

      const card = cardButton.closest('.card-product');
      if (!card) return;

      if (card.querySelector('.promo-banner')) return;

      const banner = document.createElement('div');
      banner.className = 'promo-banner';
      banner.innerHTML = '<i class="fas fa-tags me-2"></i> Promoción';
      card.querySelector('.card-body').insertBefore(banner, card.querySelector('.card-body').firstChild);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addPromoBadge);
  } else {
    addPromoBadge();
  }

  window.kabannaPromociones = { addPromoBadge, promoProducts };
})();
