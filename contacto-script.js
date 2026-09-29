/* ================== INICIALIZACIÓN DE EMAILJS ================== */
(function() {
    emailjs.init("SERVICE_ID_PLACEHOLDER"); // Reemplazar con tu ID de servicio
})();

/* ================== VARIABLES GLOBALES ================== */
let calificacionSeleccionada = 0;
const EMAIL_DESTINO = 'kabannaresttobar@gmail.com';

/* ================== INICIALIZACIÓN AL CARGAR ================== */
document.addEventListener('DOMContentLoaded', () => {
    inicializarEventos();
    mostrarPopupServicio();
});

/* ================== FUNCIONES DE INICIALIZACIÓN ================== */

/**
 * Inicializa todos los eventos de la página
 */
function inicializarEventos() {
    // Eventos para las estrellas de calificación
    document.querySelectorAll('.star').forEach(star => {
        star.addEventListener('click', () => {
            calificacionSeleccionada = star.getAttribute('data-value');
            actualizarEstrellas(calificacionSeleccionada);
            actualizarTextoCalificacion(calificacionSeleccionada);
        });
        
        star.addEventListener('mouseover', () => {
            const valor = star.getAttribute('data-value');
            actualizarEstrellas(valor);
        });
    });
    
    document.querySelectorAll('.star-rating').forEach(container => {
        container.addEventListener('mouseleave', () => {
            if (calificacionSeleccionada > 0) {
                actualizarEstrellas(calificacionSeleccionada);
            } else {
                actualizarEstrellas(0);
            }
        });
    });
}

/**
 * Actualiza el estado visual de las estrellas
 * @param {number} valor - Número de estrellas a iluminar
 */
function actualizarEstrellas(valor) {
    document.querySelectorAll('.star').forEach(star => {
        const starValue = parseInt(star.getAttribute('data-value'));
        if (starValue <= valor) {
            star.classList.add('active');
            star.classList.remove('far');
            star.classList.add('fas');
        } else {
            star.classList.remove('active');
            star.classList.remove('fas');
            star.classList.add('far');
        }
    });
}

/**
 * Actualiza el texto de la calificación
 * @param {number} valor - Número de estrellas
 */
function actualizarTextoCalificacion(valor) {
    const textos = {
        1: '😞 Muy Malo - Necesitamos mejorar',
        2: '😕 Malo - Hay problemas',
        3: '😐 Regular - Podemos mejorar',
        4: '😊 Bueno - Muy satisfecho',
        5: '😍 Excelente - ¡Perfecto!'
    };
    
    const elementoTexto = document.getElementById('ratingText');
    if (elementoTexto) {
        elementoTexto.textContent = textos[valor] || 'Selecciona una calificación';
    }
}

/* ================== FUNCIONES DE MODAL ================== */

/**
 * Muestra el modal de calificación
 */
function mostrarModalCalificacion() {
    const ratingModal = new bootstrap.Modal(document.getElementById('ratingModal'));
    calificacionSeleccionada = 0;
    actualizarEstrellas(0);
    document.getElementById('ratingComment').value = '';
    document.getElementById('ratingEmail').value = '';
    ratingModal.show();
}

/**
 * Muestra el popup de servicio al cargar la página
 */
function mostrarPopupServicio() {
    // Mostrar el popup después de 2 segundos
    setTimeout(() => {
        const servicePopup = new bootstrap.Modal(document.getElementById('servicePopup'));
        servicePopup.show();
    }, 1500);
}

/**
 * Abre Google Maps en una nueva ventana
 */
function abrirGoogleMaps() {
    window.open('https://maps.google.com/maps?q=Cra+50+%23+25-45,+Medellín,+Antioquia', '_blank');
}

/* ================== FUNCIONES DE ENVÍO DE CORREO ================== */

/**
 * Envía la calificación por correo
 */
async function enviarCalificacion() {
    // Validar calificación
    if (calificacionSeleccionada === 0) {
        mostrarAlerta('Por favor selecciona una calificación', 'warning');
        return;
    }
    
    // Validar email
    const email = document.getElementById('ratingEmail').value.trim();
    if (!email || !validarEmail(email)) {
        mostrarAlerta('Por favor ingresa un correo válido', 'warning');
        return;
    }
    
    const comentario = document.getElementById('ratingComment').value.trim();
    
    // Mostrar estado de carga
    const botonEnviar = event.target;
    botonEnviar.disabled = true;
    botonEnviar.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    
    try {
        // Opción 1: Usando EmailJS (requiere configuración)
        await enviarConEmailJS(email, comentario);
        
        // Opción 2: Si EmailJS no está disponible, usar alternativa
    } catch (error) {
        console.error('Error con EmailJS:', error);
        // Fallback: usar alternative method
        await enviarAlternativo(email, comentario);
    }
}

/**
 * Envía el correo usando EmailJS
 * @param {string} email - Correo del usuario
 * @param {string} comentario - Comentario del usuario
 */
async function enviarConEmailJS(email, comentario) {
    const templateParams = {
        to_email: EMAIL_DESTINO,
        from_email: email,
        calificacion: `${calificacionSeleccionada} / 5 estrellas`,
        comentario: comentario || 'Sin comentario',
        fecha: new Date().toLocaleString('es-CO'),
    };
    
    try {
        // Intenta enviar con EmailJS
        const response = await emailjs.send(
            "SERVICE_ID_PLACEHOLDER",      // Tu Service ID
            "TEMPLATE_ID_PLACEHOLDER",     // Tu Template ID
            templateParams
        );
        
        console.log('Correo enviado:', response);
        
        // Mostrar confirmación y cerrar modal
        mostrarAlerta('¡Gracias! Tu calificación ha sido enviada correctamente', 'success');
        
        setTimeout(() => {
            bootstrap.Modal.getInstance(document.getElementById('ratingModal')).hide();
            mostrarModal('confirmacion');
        }, 1500);
        
    } catch (error) {
        console.error('Error al enviar:', error);
        throw error;
    }
}

/**
 * Método alternativo para enviar correos (usando un servicio gratuito)
 * @param {string} email - Correo del usuario
 * @param {string} comentario - Comentario del usuario
 */
async function enviarAlternativo(email, comentario) {
    const mensajeHTML = `
        <h2>Nueva Calificación Recibida</h2>
        <p><strong>Correo del cliente:</strong> ${email}</p>
        <p><strong>Calificación:</strong> ${calificacionSeleccionada} / 5 estrellas</p>
        <p><strong>Comentario:</strong> ${comentario || 'Sin comentario'}</p>
        <p><strong>Fecha:</strong> ${new Date().toLocaleString('es-CO')}</p>
        <hr>
        <p>Este mensaje fue generado automáticamente desde FoodCart.</p>
    `;
    
    // Crear un formulario oculto para enviar el correo
    const formData = new FormData();
    formData.append('access_key', 'b49ad3a0-8d3b-46ef-9fae-f1f3e3c3e3e3'); // API key alternativa
    formData.append('subject', `Nueva Calificación: ${calificacionSeleccionada} ⭐`);
    formData.append('message', mensajeHTML);
    formData.append('email_address', EMAIL_DESTINO);
    formData.append('from_name', 'FoodCart - Sistema de Calificación');
    
    try {
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        });
        
        if (response.ok) {
            mostrarAlerta('¡Gracias! Tu calificación ha sido enviada correctamente', 'success');
            setTimeout(() => {
                bootstrap.Modal.getInstance(document.getElementById('ratingModal')).hide();
            }, 1500);
        } else {
            throw new Error('Error en la respuesta del servidor');
        }
    } catch (error) {
        console.error('Error:', error);
        // Fallback: guardar en localStorage
        guardarCalificacionLocal(email, comentario);
        mostrarAlerta('Calificación guardada localmente (conexión no disponible)', 'info');
        setTimeout(() => {
            bootstrap.Modal.getInstance(document.getElementById('ratingModal')).hide();
        }, 1500);
    }
}

/* ================== FUNCIONES DE VALIDACIÓN ================== */

/**
 * Valida un correo electrónico
 * @param {string} email - Correo a validar
 * @returns {boolean} - True si es válido
 */
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

/* ================== ALMACENAMIENTO LOCAL ================== */

/**
 * Guarda la calificación en localStorage como fallback
 * @param {string} email - Correo del usuario
 * @param {string} comentario - Comentario del usuario
 */
function guardarCalificacionLocal(email, comentario) {
    let calificaciones = JSON.parse(localStorage.getItem('foodcart_calificaciones') || '[]');
    
    calificaciones.push({
        id: Date.now(),
        calificacion: calificacionSeleccionada,
        email: email,
        comentario: comentario,
        fecha: new Date().toLocaleString('es-CO')
    });
    
    localStorage.setItem('foodcart_calificaciones', JSON.stringify(calificaciones));
    console.log('Calificación guardada en localStorage');
}

/* ================== FUNCIONES DE UTILIDAD ================== */

/**
 * Muestra una alerta personalizada
 * @param {string} mensaje - Mensaje a mostrar
 * @param {string} tipo - Tipo de alerta (success, warning, error, info)
 */
function mostrarAlerta(mensaje, tipo = 'info') {
    // Crear elemento de alerta
    const alerta = document.createElement('div');
    alerta.className = `alert alert-${tipo} alert-dismissible fade show`;
    alerta.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 9999;
        min-width: 300px;
        animation: slideInDown 0.5s ease-out;
    `;
    
    const iconos = {
        success: 'fas fa-check-circle',
        warning: 'fas fa-exclamation-circle',
        error: 'fas fa-times-circle',
        info: 'fas fa-info-circle'
    };
    
    alerta.innerHTML = `
        <i class="${iconos[tipo]}" style="margin-right: 0.5rem;"></i>
        <strong>${mensaje}</strong>
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(alerta);
    
    // Eliminar alerta después de 5 segundos
    setTimeout(() => {
        alerta.remove();
    }, 5000);
}

/**
 * Muestra un modal específico
 * @param {string} modalId - ID del modal a mostrar
 */
function mostrarModal(modalId) {
    const modal = bootstrap.Modal.getInstance(document.getElementById(modalId));
    if (modal) {
        modal.show();
    }
}

/* ================== EFECTOS VISUALES ================== */

/**
 * Agregar clase de carga a la página
 */
document.body.classList.add('loaded');

/**
 * Agregar animación a elementos al hacer scroll
 */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.contact-card, .social-card, .accordion-item').forEach(el => {
    observer.observe(el);
});

/**
 * Efectos de scroll en el navbar
 */
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 8px 20px rgba(0,0,0,0.3)';
    } else {
        navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
    }
});

/* ================== LOG DE CONFIRMACIÓN ================== */
console.log('✅ Contacto Script Cargado');
console.log('📧 Correo destino:', EMAIL_DESTINO);
console.log('💡 Nota: Para usar EmailJS, reemplaza los placeholders en el init()');
