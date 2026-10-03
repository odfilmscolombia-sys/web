(() => {
  const promoKey = "kabanna-cheese-burger-promo-seen";
  const promoProduct = {
    id: 1,
    name: "Hamburguesa Sencilla con Queso",
    image: "pictures/hamburguesa_sencilla.png",
    imageDescription: "Hamburguesa con queso fundido"
  };

  if (sessionStorage.getItem(promoKey) || !window.bootstrap?.Modal) return;

  const modalElement = document.createElement("div");
  modalElement.className = "modal fade";
  modalElement.id = "cheeseBurgerPromo";
  modalElement.dataset.productId = String(promoProduct.id);
  modalElement.tabIndex = -1;
  modalElement.setAttribute("aria-labelledby", "cheeseBurgerPromoTitle");
  modalElement.setAttribute("aria-hidden", "true");
  modalElement.innerHTML = `
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content border-0 shadow-lg overflow-hidden">
        <div class="modal-header border-0 pb-0">
          <div>
            <span class="badge badge-orange">NUEVA</span>
            <h2 class="modal-title h4 fw-bold mt-2 mb-0" id="cheeseBurgerPromoTitle">${promoProduct.name}</h2>
          </div>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
        </div>
        <div class="modal-body pt-3">
          <img src="${promoProduct.image}" class="w-100 rounded-3" alt="${promoProduct.imageDescription}" style="height: 190px; object-fit: cover;" />
          <p class="text-muted mt-3 mb-0">Carne a la parrilla, queso fundido y todo el sabor de Kabanna. ¡Ven a probarla!</p>
        </div>
        <div class="modal-footer border-0 pt-0">
          <button type="button" class="btn btn-orange w-100" data-bs-dismiss="modal">Cerrar</button>
        </div>
      </div>
    </div>`;

  document.body.append(modalElement);
  sessionStorage.setItem(promoKey, "shown");
  window.bootstrap.Modal.getOrCreateInstance(modalElement).show();
})();
