/* ================== BASE DE DATOS DE PRODUCTOS ================== */

const productos = [
    // HAMBURGUESAS
    {
        id: 1,
        nombre: 'Hamburguesa Clásica',
        categoria: 'hamburguesas',
        precio: 10000,
        descripcion: 'Hamburguesa con carne, lechuga y tomate',
        icono: 'https://res.cloudinary.com/isgp8bkp/image/upload/v1791057625/hamburguesa_sencilla.png'
    },
    {
        id: 2,
        nombre: 'Hamburguesa Doble',
        categoria: 'hamburguesas',
        precio: 15000,
        descripcion: 'Dos carnes, queso y salsas especiales',
        icono: 'https://res.cloudinary.com/isgp8bkp/image/upload/v1791059910/hamburguesa_doblecarne_sencilla.png'
    },
    {
        id: 3,
        nombre: 'Hamburguesa Res Carbón',
        categoria: 'hamburguesas',
        precio: 12000,
        descripcion: 'Con bacon crujiente y queso derretido',
        icono: 'https://res.cloudinary.com/isgp8bkp/image/upload/v1791089864/hamburguesa_artesanal.png'
    },
    {
        id: 4,
        nombre: 'Hamburguesa Artesanal',
        categoria: 'hamburguesas',
        precio: 15000,
        descripcion: 'Hamburguesa con una carne jugosa, lechuga, tomate y salsas artesanales',
        icono: 'pictures/hamburguesa_artesanal.png'
    },
    {
        id: 5,
        nombre: 'Hamburguesa Artesanal Doble Carne',
        categoria: 'hamburguesas',
        precio: 25000,
        descripcion: 'Hamburguesa con dos carnes jugosas, lechuga, tomate y salsas artesanales',
        icono: 'pictures/hamburguesa_artesanal_doblecarne.png'
    },
    
    // PERROS CALIENTES
    {
        id: 6,
        nombre: 'Perro Choripan a la plancha',
        categoria: 'perros',
        precio: 12000,
        descripcion: 'Chorizo, vegetales y salsas',
        icono: '🌭'
    },
    {
        id: 7,
        nombre: 'Perro Champiñones',
        categoria: 'perros',
        precio: 15000,
        descripcion: 'Con champiñones frescos salteados',
        icono: '🌭'
    },
    {
        id: 8,
        nombre: 'Perro Cebollitas',
        categoria: 'perros',
        precio: 14000,
        descripcion: 'Con cebollitas caramelizadas y salsa BBQ',
        icono: '🌭'
    },
    {
        id: 9,
        nombre: 'Perro Bacon y Queso',
        categoria: 'perros',
        precio: 16000,
        descripcion: 'Bacon crujiente y queso derretido',
        icono: '🌭'
    },
    {
        id: 10,
        nombre: 'Perro Picante',
        categoria: 'perros',
        precio: 15000,
        descripcion: 'Con jalapeños y salsa picante',
        icono: '🌭'
    },
    {
        id: 11,
        nombre: 'Perro Especial',
        categoria: 'perros',
        precio: 18000,
        descripcion: 'Bacon, queso, huevo y cebolla caramelizada',
        icono: '🌭'
    },
    
    // SALCHIPAPAS
    {
        id: 12,
        nombre: 'Salchipapas Clásicas',
        categoria: 'salchipapas',
        precio: 14000,
        descripcion: 'Papas crujientes con salchicha y salsas',
        icono: '🍟'
    },
    {
        id: 13,
        nombre: 'Salchipapas Queso',
        categoria: 'salchipapas',
        precio: 16000,
        descripcion: 'Papas con salchicha y salsa de queso derretido',
        icono: '🍟'
    },
    {
        id: 14,
        nombre: 'Salchipapas Bacon',
        categoria: 'salchipapas',
        precio: 17000,
        descripcion: 'Con bacon crujiente y queso',
        icono: '🍟'
    },
    {
        id: 15,
        nombre: 'Salchipapas Picantes',
        categoria: 'salchipapas',
        precio: 16000,
        descripcion: 'Papas con jalapeños y salsa picante',
        icono: '🍟'
    },
    {
        id: 16,
        nombre: 'Salchipapas Completa',
        categoria: 'salchipapas',
        precio: 19000,
        descripcion: 'Bacon, queso, huevo y salsas especiales',
        icono: '🍟'
    },
    
    // COMBOS
    {
        id: 17,
        nombre: 'Combo Individual',
        categoria: 'combos',
        precio: 28000,
        descripcion: 'Hamburguesa + Papas + Bebida',
        icono: '📦'
    },
    {
        id: 18,
        nombre: 'Combo Doble',
        categoria: 'combos',
        precio: 45000,
        descripcion: '2 Hamburguesas + Papas + 2 Bebidas',
        icono: '📦'
    },
    {
        id: 19,
        nombre: 'Combo Mixto',
        categoria: 'combos',
        precio: 42000,
        descripcion: 'Hamburguesa + Perro + Papas + Bebida',
        icono: '📦'
    },
    {
        id: 20,
        nombre: 'Combo Familia',
        categoria: 'combos',
        precio: 85000,
        descripcion: '4 Hamburguesas + Salchipapas + 4 Bebidas',
        icono: '📦'
    },
    {
        id: 21,
        nombre: 'Combo Premium',
        categoria: 'combos',
        precio: 60000,
        descripcion: 'Hamburguesa Premium + Salchipapas + Postre + Bebida',
        icono: '📦'
    },
    
    // BEBIDAS
    {
        id: 22,
        nombre: 'Gaseosa Pequeña',
        categoria: 'bebidas',
        precio: 4000,
        descripcion: 'Lata o vaso 350ml',
        icono: '🥤'
    },
    {
        id: 23,
        nombre: 'Gaseosa Mediana',
        categoria: 'bebidas',
        precio: 6000,
        descripcion: 'Vaso 500ml',
        icono: '🥤'
    },
    {
        id: 24,
        nombre: 'Gaseosa Grande',
        categoria: 'bebidas',
        precio: 8000,
        descripcion: 'Vaso 750ml',
        icono: '🥤'
    },
    {
        id: 25,
        nombre: 'Jugo Natural',
        categoria: 'bebidas',
        precio: 7000,
        descripcion: 'Jugo fresco de frutas naturales',
        icono: '🧃'
    },
    {
        id: 26,
        nombre: 'Cerveza Artesanal',
        categoria: 'bebidas',
        precio: 8000,
        descripcion: 'Cerveza importada premium',
        icono: '🍺'
    },
    {
        id: 27,
        nombre: 'Café Especial',
        categoria: 'bebidas',
        precio: 5000,
        descripcion: 'Café con bebida especial',
        icono: '☕'
    },
    
    // POSTRES
    {
        id: 28,
        nombre: 'Helado Simple',
        categoria: 'postres',
        precio: 6000,
        descripcion: 'Helado de un sabor a elección',
        icono: '🍦'
    },
    {
        id: 29,
        nombre: 'Helado Doble',
        categoria: 'postres',
        precio: 9000,
        descripcion: 'Helado de dos sabores diferentes',
        icono: '🍦'
    },
    {
        id: 30,
        nombre: 'Brownie con Helado',
        categoria: 'postres',
        precio: 12000,
        descripcion: 'Brownie de chocolate con helado',
        icono: '🍫'
    },
    {
        id: 31,
        nombre: 'Postre de Fruta',
        categoria: 'postres',
        precio: 8000,
        descripcion: 'Fruta fresca con crema',
        icono: '🍰'
    },
    {
        id: 32,
        nombre: 'Pie de Manzana',
        categoria: 'postres',
        precio: 10000,
        descripcion: 'Pie casero de manzana con vainilla',
        icono: '🥧'
    },
    {
        id: 33,
        nombre: 'Cheesecake',
        categoria: 'postres',
        precio: 11000,
        descripcion: 'Cheesecake New York clásico',
        icono: '🍰'
    }
];

/* ================== VARIABLE DE CATEGORÍA ACTIVA ================== */
let categoriaActiva = 'todos';

/* ================== FUNCIONES PRINCIPALES ================== */

/**
 * Inicializa la página al cargar
 */
document.addEventListener('DOMContentLoaded', () => {
    inicializarEventos();
    renderizarProductos(productos);
});

/**
 * Inicializa todos los eventos de la página
 */
function inicializarEventos() {
    // Evento para botones de filtro
    document.querySelectorAll('.btn-filter').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const categoria = e.currentTarget.getAttribute('data-category');
            filtrarProductos(categoria);
        });
    });
}

/**
 * Filtra productos por categoría
 * @param {string} categoria - La categoría a filtrar
 */
function filtrarProductos(categoria) {
    categoriaActiva = categoria;
    
    // Actualizar botón activo
    document.querySelectorAll('.btn-filter').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-category') === categoria) {
            btn.classList.add('active');
        }
    });
    
    // Filtrar y renderizar productos
    let productosFiltrados;
    
    if (categoria === 'todos') {
        productosFiltrados = productos;
    } else {
        productosFiltrados = productos.filter(p => p.categoria === categoria);
    }
    
    renderizarProductos(productosFiltrados);
}

/**
 * Renderiza los productos en el grid
 * @param {Array} productosAMostrar - Array de productos a renderizar
 */
function renderizarProductos(productosAMostrar) {
    const contenedor = document.getElementById('productsContainer');
    
    // Limpiar contenedor
    contenedor.innerHTML = '';
    
    // Si no hay productos
    if (productosAMostrar.length === 0) {
        contenedor.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
                <i class="fas fa-search" style="font-size: 3rem; color: #ccc; margin-bottom: 1rem;"></i>
                <p style="color: #999; font-size: 1.1rem;">No hay productos en esta categoría</p>
            </div>
        `;
        return;
    }
    
    // Renderizar cada producto
    productosAMostrar.forEach(producto => {
        const card = crearProductoCard(producto);
        contenedor.appendChild(card);
    });
    
    // Agregar animación al grid
    setTimeout(() => {
        document.querySelectorAll('.product-card').forEach(card => {
            card.style.animation = 'slideInUp 0.5s ease-out forwards';
        });
    }, 0);
}

/**
 * Crea una tarjeta de producto
 * @param {Object} producto - Objeto del producto
 * @returns {HTMLElement} - Elemento de la tarjeta
 */
function crearProductoCard(producto) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    // Obtener nombre de la categoría legible
    const categoriaNombre = obtenerNombreCategoria(producto.categoria);
    
    card.innerHTML = `
        <div class="product-image">
        <img src="${producto.icono}" alt="${producto.nombre}" class="product-img">
            
        </div>
        <div class="product-info">
            <span class="product-category">${categoriaNombre}</span>
            <h3 class="product-name">${producto.nombre}</h3>
            <p class="product-description">${producto.descripcion}</p>
            <div class="product-price">${producto.precio.toLocaleString()}</div>
        </div>
    `;
    
    // Agregar evento hover con efecto
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-8px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
    
    return card;
}

/**
 * Obtiene el nombre legible de una categoría
 * @param {string} categoria - La categoría abreviada
 * @returns {string} - El nombre legible
 */
function obtenerNombreCategoria(categoria) {
    const categoriasMap = {
        'hamburguesas': 'Hamburguesa',
        'perros': 'Perro Caliente',
        'salchipapas': 'Salchipapas',
        'combos': 'Combo',
        'bebidas': 'Bebida',
        'postres': 'Postre'
    };
    
    return categoriasMap[categoria] || categoria;
}

/**
 * Animación smooth scroll al hacer clic en filtros
 */
document.querySelectorAll('.btn-filter').forEach(btn => {
    btn.addEventListener('click', () => {
        setTimeout(() => {
            document.querySelector('.products-grid').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    });
});

/* ================== EFECTOS VISUALES ADICIONALES ================== */

/**
 * Agregar efecto parallax ligero en scroll
 */
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    const heroSection = document.querySelector('.hero-section');
    
    if (heroSection) {
        heroSection.style.backgroundPosition = `0px ${scrollTop * 0.3}px`;
    }
});

/**
 * Agregar clase de carga a la página
 */
document.body.classList.add('loaded');

// Log de confirmación
console.log('✅ Menu Script Cargado - Total Productos:', productos.length);
