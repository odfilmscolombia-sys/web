const products = [
  { id: 1, name: 'Hamburguesa Sencilla', description: 'Carne Deli, queso, lechuga y salsa especial.', price: 10000, category: 'hamburguesas', image: 'pictures/hamburguesa_sencilla.png' },
  { id: 2, name: 'Hamburguesa Doble Carne Sencilla', description: 'Dos carnes tipo Deli, Vegetales, adheresos  y Mozarela.', price: 15000, category: 'hamburguesas', image: 'pictures/hamburguesa_doblecarne_sencilla.png' },
  { id: 3, name: 'Hamburguesa Artesanal', description: 'Una Carne Artesanal de Cerdo o res, Tocineta crujiente, Vegetales, Mozarela y Super salsa deep especial.', price: 15000, category: 'hamburguesas', image: 'pictures/hamburguesa_artesanal.png' },
  { id: 4, name: 'Hamburguesa Artesanal Doble Carne', description: 'Dos carnes artesanales de Res o Cerdo, Tocineta crujiente, Vegetales, Mozarela y Super salsa deep especial.', price: 19000, category: 'hamburguesas', image: 'pictures/hamburguesa_artesanal_doblecarne.png' },
  //picada personal de 15k
  { id: 5, name: 'Picada Personal de $15.000', description: 'Picada para una persona sencilla mixta con carne, vegetales, queso y salsas.', price: 15000, category: 'picadas', image: 'pictures/picada_personal_de_15k.png' },
  //picada personal de 18k
  { id: 6, name: 'Picada Personal Con Desmechada $19.000', description: 'Picada con adicional de carne desmechada de cerdo o res, salsas , virutas de papa, queso costeño y vegetales.', price: 18000, category: 'picadas', image: 'pictures/nuevas/picada_personal_de18k.png' },
  //Picada Mixta de Pechuga de $35k
  { id: 7, name: 'Picada Mixta de Pechuga de $35k (Para 2 o 3 Personas)', description: 'Picada con tiras de pechuga, chorizo artesanal al carbón, maíz tierno, salsas especiales, queso costeño y vegetales. ', price: 30000, category: 'picadas', image: 'pictures/nuevas/picada_mixta_pechuga_30K.png' },
  //Picada Carbón de $20k 
  { id: 8, name: 'Picada Carbón de $20k (Para 1 persona)', description: 'Picada para una persona Con desgranado, chorizo al carbón, carnes y vegetales.', price: 22000, category: 'picadas', image: 'pictures/nuevas/picada_mixta_carbon_de_20k.png' },
  //Picada Desgranada de $27.000
  { id: 9, name: 'Picada Desgranada de $27.000 (Para dos personas)', description: 'Salchipapas, arepa, aguacate y vegetales.', price: 22000, category: 'picadas', image: 'pictures/nuevas/picada_mixta_27k.png' },
  //Picada Familiar de $40k
  { id: 10, name: 'Picada Familiar de $40k', description: 'Picada mixta con todo, maíz tierno, queso costeño, vegetales, pépinillos, salsas y papita triturada.', price: 40000, category: 'picadas', image: 'pictures/nuevas/picada_mixta_familiar_de_40k.png' },
  //Picada Desgranada Familiar de $45K
  { id: 11, name: 'Picada Desgranada Familiar de $45K (Para 3 o 4 personas)', description: 'Picada mixta con desgranado, carnes y chorizos artesanal al carbón y mucho queso mozzarella.', price: 45000, category: 'picadas', image: 'pictures/nuevas/desgranado_mixto_45k.png' },
  //Picada Familiar de $50k
  { id: 12, name: 'Picada Familiar de 50k (Para 4 o 5 personas)', description: 'Picada mixta con todo, maíz tierno, queso costeño, vegetales, pépinillos, salsas y papita triturada.', price: 50000, category: 'picadas', image: 'pictures/nuevas/picada_familiar_de_50k.png' },
  //Picada Familiar de $60k
  { id: 13, name: 'Picada Familiar de 60k (Para 5 o 6 personas)', description: 'Salchipapas, arepa, aguacate y vegetales.', price: 60000, category: 'picadas', image: 'pictures/nuevas/picada_familiar_de_60k.png' },
  //Picada Veggie
  { id: 14, name: 'Picada Veggie', description: 'Papas Fritas o al vapor, Vegetales, Salchicha al vapor, Cebolla Blanca y Queso.', price: 20000, category: 'picadas', image: 'pictures/nuevas/picada_veggie_de_20k.png' },

  { id: 15, name: 'Coca Cola', description: 'Bebida gaseosa clásica de PET 400 ml.', price: 4000, category: 'bebidas', image: 'pictures/cocacola_pet_400.png' },
  //Gaseosa coca-cola 1.5 litros
  { id: 16, name: 'Coca-Cola Litro y Medio', description: 'Coca-Cola de 1.5 litros.', price: 8000, category: 'bebidas', image: 'pictures/coca_1.5.png' },
  //Gaseosa coca-Cola 2 Litros y Medio
  { id: 17, name: 'Coca-Cola 2 Litros y Medio', description: 'Bebida gaseosa de naranja.', price: 11000, category: 'bebidas', image: 'pictures/coca_3l.png' },

  { id: 18, name: 'Pepsi', description: 'Pepsi 1.5 litros', price: 6000, category: 'bebidas', image: 'pictures/pepsi.jpg' },

  { id: 19, name: 'Postobon 1.5', description: 'Gaseosa postobon de 1.5 litros, sabores: Manzana, Naranja, Uva o Colombiana.', price: 6000, category: 'bebidas', image: 'pictures/gaseosas_postobon.jpg' },

  { id: 20, name: 'Pollo Crispy', description: 'Pechuga crocante con papas y ensalada.', price: 24000, category: 'comidas', image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=800&q=80' },

  { id: 21, name: 'Burrito de Pollo', description: 'Relleno de pollo, arroz y queso.', price: 22000, category: 'comidas', image: 'https://images.unsplash.com/photo-1610440042652-5f8b4c6d7d0b?auto=format&fit=crop&w=800&q=80' },

  { id: 22, name: 'Arepa Reina Pepiada', description: 'Arepa con pollo desmechado y aguacate.', price: 18000, category: 'comidas', image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ce3?auto=format&fit=crop&w=800&q=80' },

  { id: 23, name: 'Pasta Bolognesa', description: 'Pasta con salsa de carne.', price: 21000, category: 'comidas', image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=800&q=80' },

  { id: 24, name: 'Wrap de Carne', description: 'Wrap con carne, tomate y aderezo.', price: 23000, category: 'comidas', image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=800&q=80' },
  { id: 25, name: 'Combo Clásico', description: 'Picada + bebida + Hamburguesa. (Ahorras $2.000)', price: 27000, category: 'combos', image: 'pictures/nuevas/combo_clasico.png' },
  { id: 26, name: 'Combo Duo Dínamico', description: '2 hamburguesas Res Carbón, 2 bebidas y 2 papas. (Ahorras $4.000)', price: 34000, category: 'combos', image: 'pictures/nuevas/combo_duo_dinamico.png' },
  { id: 27, name: 'Combo Picada', description: 'Picada grande + 2 gaseosas.', price: 42000, category: 'combos', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80' },
  { id: 28, name: 'Combo Pollo', description: 'Pollo crispy + bebida + papas.', price: 31000, category: 'combos', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80' },
  { id: 29, name: 'Combo Veggie', description: 'Wrap veggie + bebida + papas.', price: 29000, category: 'combos', image: 'https://images.unsplash.com/photo-1526318896980-cf78c088247c?auto=format&fit=crop&w=800&q=80' },
  { id: 30, name: 'Choripan Sencillo', description: 'Wrap veggie + bebida + papas.', price: 7000, category: 'hotdogs', image: 'https://images.unsplash.com/photo-1526318896980-cf78c088247c?auto=format&fit=crop&w=800&q=80' },
  { id: 31, name: 'Choripan Super', description: 'Wrap veggie + bebida + papas.', price: 10000, category: 'hotdogs', image: 'https://images.unsplash.com/photo-1526318896980-cf78c088247c?auto=format&fit=crop&w=800&q=80' },
  { id: 32, name: 'Choripan Especial', description: 'Wrap veggie + bebida + papas.', price: 13000, category: 'hotdogs', image: 'https://images.unsplash.com/photo-1526318896980-cf78c088247c?auto=format&fit=crop&w=800&q=80' }
];

const extraOptions = [
  { id: 'queso', name: 'Queso Mozarela', price: 3000 },
  { id: 'papitas', name: 'Papitas fritas', price: 3000 },
  { id: 'aguacate', name: 'Aguacate', price: 2000 },
  { id: 'huevo', name: 'Huevo', price: 1500 }
];

const categories = ['all', 'hamburguesas', 'picadas', 'bebidas', 'comidas', 'combos', 'hotdogs','postres'];
const categoryLabels = {
  all: 'Todo',
  hamburguesas: 'Hamburguesas',
  hotdogs: 'Hotdogs',
  picadas: 'Picadas',
  bebidas: 'Bebidas',
  comidas: 'Comidas',
  combos: 'Combos',
  postres: 'Postres'
};

let currentFilter = 'all';
let searchTerm = '';
let cartItems = [];
let selectedProduct = null;

const cartStorage = window.kabannaCartStorage;
const invoiceHelper = window.kabannaInvoice;
const dateTimeHelper = window.kabannaDateTime;

// Aqui se editan las paginas de cada boton del menu, se puede cambiar el href de cada item en el array navigationItems
const navigationItems = [
  { label: 'Inicio', href: 'index.html', icon: 'fa-home' },
  { label: 'Menú', href: 'menu.html', icon: 'fa-list' },
  { label: 'Contacto', href: 'contacto.html', icon: 'fa-headset' },
  { label: 'Información', href: 'informacion_interes.html', icon: 'fa-circle-info' }
];

const productList = document.getElementById('product-list');
const categoryButtons = document.getElementById('category-buttons');
const searchInput = document.getElementById('search-input');
const cartQty = document.getElementById('cart-qty');
const cartItemsList = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const checkoutBtn = document.getElementById('checkout-btn');
const invoiceItems = document.getElementById('invoice-items');
const invoiceTotal = document.getElementById('invoice-total');
const invoiceDate = document.getElementById('invoice-date');
const productModal = new bootstrap.Modal(document.getElementById('productModal'));
const checkoutModal = new bootstrap.Modal(document.getElementById('checkoutModal'));
const cartOffcanvas = new bootstrap.Offcanvas(document.getElementById('cartOffcanvas'));

function currency(value) {
  return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(value);
}

function renderNavigation() {
  const navLinks = document.getElementById('nav-links');
  if (!navLinks) return;

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  navLinks.innerHTML = navigationItems.map((item) => {
    const isActive = currentPage === item.href || (item.href === 'index.html' && currentPage === '');
    return `
      <li class="nav-item">
        <a class="nav-link${isActive ? ' active' : ''}" href="${item.href}" data-future-page="${item.href}">
          <i class="fas ${item.icon} me-2"></i>${item.label}
        </a>
      </li>
    `;
  }).join('');
}

function renderCategoryButtons() {
  categoryButtons.innerHTML = '';
  categories.forEach((category) => {
    const button = document.createElement('button');
    button.className = `btn btn-sm category-chip ${currentFilter === category ? 'active' : ''}`;
    //Aqui se edita el icono de cada categoria
    button.innerHTML = `<i class="fas ${category === 'all' ? 'fa-list' : category === 'hamburguesas' ? 'fa-burger' : category === 'picadas' ? 'fa-fire' : category === 'bebidas' ? 'fa-glass-whiskey' : category === 'comidas' ? 'fa-utensils' : category === 'hotdogs' ? 'fa-drumstick-bite' : category === 'postres' ?  'fa-box': 'fa-box'} me-2"></i>${categoryLabels[category]}`;
    button.addEventListener('click', () => {
      currentFilter = category;
      renderCategoryButtons();
      renderProducts();
    });
    categoryButtons.appendChild(button);
  });
}

function renderProducts() {
  const filtered = products.filter((product) => {
    const matchesCategory = currentFilter === 'all' || product.category === currentFilter;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (!filtered.length) {
    productList.innerHTML = '<div class="col-12"><div class="alert alert-warning">No encontramos productos con esa búsqueda.</div></div>';
    return;
  }

  productList.innerHTML = filtered.map((product) => `
    <div class="col-md-6 col-lg-4">
      <div class="card card-product h-100">
        <img src="${product.image}" class="card-img-top" alt="${product.name}">
        <div class="card-body d-flex flex-column">
          <div class="d-flex justify-content-between align-items-start gap-2">
            <h5 class="card-title">${product.name}</h5>
            <span class="badge badge-orange">${categoryLabels[product.category]}</span>
          </div>
          <p class="card-text text-muted">${product.description}</p>
          <div class="mt-auto d-flex justify-content-between align-items-center">
            <span class="price-chip">${currency(product.price)}</span>
            <button class="btn btn-orange" data-product-id="${product.id}">
              <i class="bi bi-plus-circle me-1"></i>Agregar
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  document.querySelectorAll('[data-product-id]').forEach((button) => {
    button.addEventListener('click', (event) => {
      const productId = Number(event.currentTarget.getAttribute('data-product-id'));
      selectedProduct = products.find((item) => item.id === productId);
      renderExtrasModal();
      productModal.show();
    });
  });
}

function renderExtrasModal() {
  const extrasContainer = document.getElementById('extras-options');
  extrasContainer.innerHTML = extraOptions.map((extra) => `
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="${extra.id}" id="extra-${extra.id}">
      <label class="form-check-label" for="extra-${extra.id}">
        ${extra.name} <span class="text-muted">(+ ${currency(extra.price)})</span>
      </label>
    </div>
  `).join('');

  document.getElementById('modal-product-name').textContent = selectedProduct?.name || '';
  document.getElementById('modal-product-price').textContent = currency(selectedProduct?.price || 0);

  extrasContainer.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
      const selectedExtras = Array.from(extrasContainer.querySelectorAll('input:checked')).map((input) => input.value);
      const extraCost = selectedExtras.reduce((total, value) => total + (extraOptions.find((extra) => extra.id === value)?.price || 0), 0);
      const total = (selectedProduct?.price || 0) + extraCost;
      document.getElementById('modal-product-price').textContent = currency(total);
    });
  });
}

function addToCart() {
  const selectedExtras = Array.from(document.querySelectorAll('#extras-options input:checked')).map((input) => input.value);
  const extraCost = selectedExtras.reduce((total, value) => total + (extraOptions.find((extra) => extra.id === value)?.price || 0), 0);
  const total = (selectedProduct?.price || 0) + extraCost;

  const existingItem = cartItems.find((item) => item.id === selectedProduct.id && item.extras.join(',') === selectedExtras.join(','));
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cartItems.push({
      id: selectedProduct.id,
      name: selectedProduct.name,
      price: selectedProduct.price,
      extras: selectedExtras,
      total,
      quantity: 1
    });
  }

  saveCartState();
  updateCartUI();
  productModal.hide();
}

function saveCartState() {
  if (cartStorage) {
    cartStorage.saveCart(cartItems);
  }
}

function loadCartState() {
  if (cartStorage) {
    cartItems = cartStorage.loadCart();
  }
}

function updateCartUI() {
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  cartQty.textContent = totalItems;

  if (!cartItems.length) {
    cartItemsList.innerHTML = '<p class="text-muted">Tu carrito está vacío.</p>';
    cartTotal.textContent = currency(0);
    checkoutBtn.disabled = true;
    return;
  }

  checkoutBtn.disabled = false;
  cartItemsList.innerHTML = cartItems.map((item) => {
    const extraNames = item.extras.map((extraId) => extraOptions.find((extra) => extra.id === extraId)?.name).filter(Boolean);
    const lineTotal = item.total * item.quantity;
    return `
      <div class="border rounded p-3 mb-3">
        <div class="d-flex justify-content-between align-items-start">
          <div>
            <strong>${item.name}</strong>
            <div class="small text-muted">${extraNames.length ? extraNames.join(', ') : 'Sin extras'}</div>
          </div>
          <button class="btn btn-sm btn-outline-danger" data-remove-id="${item.id}" data-extra-key="${item.extras.join(',')}">
            <i class="bi bi-trash"></i>
          </button>
        </div>
        <div class="d-flex justify-content-between align-items-center mt-2">
          <div class="btn-group btn-group-sm">
            <button class="btn btn-outline-secondary" data-decrease-id="${item.id}" data-extra-key="${item.extras.join(',')}">-</button>
            <button class="btn btn-outline-secondary" disabled>${item.quantity}</button>
            <button class="btn btn-outline-secondary" data-increase-id="${item.id}" data-extra-key="${item.extras.join(',')}">+</button>
          </div>
          <strong>${currency(lineTotal)}</strong>
        </div>
      </div>
    `;
  }).join('');

  const subtotal = cartItems.reduce((sum, item) => sum + (item.total * item.quantity), 0);
  cartTotal.textContent = currency(subtotal);

  document.querySelectorAll('[data-remove-id]').forEach((button) => {
    button.addEventListener('click', () => {
      const id = Number(button.getAttribute('data-remove-id'));
      const extraKey = button.getAttribute('data-extra-key');
      cartItems = cartItems.filter((item) => !(item.id === id && item.extras.join(',') === extraKey));
      saveCartState();
      updateCartUI();
    });
  });

  document.querySelectorAll('[data-decrease-id]').forEach((button) => {
    button.addEventListener('click', () => {
      const id = Number(button.getAttribute('data-decrease-id'));
      const extraKey = button.getAttribute('data-extra-key');
      const item = cartItems.find((entry) => entry.id === id && entry.extras.join(',') === extraKey);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        cartItems = cartItems.filter((entry) => !(entry.id === id && entry.extras.join(',') === extraKey));
      }
      saveCartState();
      updateCartUI();
    });
  });

  document.querySelectorAll('[data-increase-id]').forEach((button) => {
    button.addEventListener('click', () => {
      const id = Number(button.getAttribute('data-increase-id'));
      const extraKey = button.getAttribute('data-extra-key');
      const item = cartItems.find((entry) => entry.id === id && entry.extras.join(',') === extraKey);
      if (item) {
        item.quantity += 1;
      }
      saveCartState();
      updateCartUI();
    });
  });
}

function openCheckout() {
  const subtotal = cartItems.reduce((sum, item) => sum + (item.total * item.quantity), 0);
  if (dateTimeHelper) {
    dateTimeHelper.renderInvoiceMeta();
  }
  invoiceDate.textContent = new Date().toLocaleDateString('es-CO');
  invoiceItems.innerHTML = cartItems.map((item) => {
    const extraNames = item.extras.map((extraId) => extraOptions.find((extra) => extra.id === extraId)?.name).filter(Boolean);
    return `<li class="list-group-item d-flex justify-content-between align-items-start"><div><strong>${item.name}</strong><div class="small text-muted">${extraNames.length ? extraNames.join(', ') : 'Sin extras'} × ${item.quantity}</div></div><span>${currency(item.total * item.quantity)}</span></li>`;
  }).join('');
  invoiceTotal.textContent = currency(subtotal);
  checkoutModal.show();
}

async function downloadInvoice() {
  const invoiceElement = document.getElementById('invoice-preview');
  if (invoiceHelper) {
    await invoiceHelper.downloadInvoice(invoiceElement);
    return;
  }

  html2canvas(invoiceElement, { backgroundColor: '#ffffff' }).then((canvas) => {
    const link = document.createElement('a');
    link.download = 'factura-kabanna.jpg';
    link.href = canvas.toDataURL('image/jpeg', 0.95);
    link.click();
  });
}

function shareInvoice() {
  const invoiceElement = document.getElementById('invoice-preview');
  if (invoiceHelper) {
    invoiceHelper.shareInvoice(invoiceElement, invoiceTotal.textContent);
    return;
  }

  const message = encodeURIComponent(`Hola KABANNA FAST-FOOD, adjunto mi factura de pedido. Total: ${invoiceTotal.textContent}`);
  window.open(`https://wa.me/573014412498?text=${message}`, '_blank');
}

searchInput.addEventListener('input', (event) => {
  searchTerm = event.target.value;
  renderProducts();
});

document.getElementById('add-to-cart-btn').addEventListener('click', addToCart);
document.getElementById('cart-toggle').addEventListener('click', () => cartOffcanvas.show());
checkoutBtn.addEventListener('click', openCheckout);
document.getElementById('download-invoice').addEventListener('click', downloadInvoice);
document.getElementById('share-whatsapp').addEventListener('click', shareInvoice);

loadCartState();
renderNavigation();
renderCategoryButtons();
renderProducts();
updateCartUI();
