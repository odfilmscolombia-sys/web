document.addEventListener('DOMContentLoaded', () => {
  const pageContent = {
    heroBadge: 'Experiencia KABANNA',
    heroTitle: 'Descubre el sabor, la energía y la calidez de nuestro restaurante',
    heroSubtitle: 'Somos un espacio pensado para disfrutar de comida deliciosa, servicio rápido y momentos especiales con amigos y familia.',
    heroCardTitle: 'Por qué elegirnos',
    heroCardText: 'Ofrecemos platos preparados con ingredientes frescos, una atención cercana y una propuesta vibrante para todos los públicos.',
    galleryTitle: 'Nuestra esencia en imágenes',
    galleryDescription: 'Explora momentos, sabores y ambientes que hacen de KABANNA un lugar único.',
    clientsTitle: 'Lo que dicen nuestros clientes',
    clientsDescription: 'Estas son algunas experiencias reales vividas en nuestro negocio.',
    videoTitle: 'Mira cómo se vive en KABANNA',
    videoDescription: 'Disfruta de un vistazo a la energía del restaurante, el servicio y el ambiente que nos caracteriza.'
  };

  const carouselItems = [
    {
      title: 'Ambiente acogedor',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
      text: 'Un lugar pensado para compartir y disfrutar.'
    },
    {
      title: 'Platos irresistibles',
      image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=80',
      text: 'Cada presentación mezcla sabor, color y emoción.'
    },
    {
      title: 'Servicio rápido',
      image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=80',
      text: 'Llegamos a tus expectativas con agilidad y dedicación.'
    }
  ];

  const clientCards = [
    {
      name: 'María P.',
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
      quote: 'La comida llegó rápida y estaba espectacular. El lugar tiene una energía increíble.'
    },
    {
      name: 'Andrés R.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
      quote: 'Siempre vuelvo por el sabor y por la amabilidad del equipo. Muy recomendado.'
    },
    {
      name: 'Sofía T.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80',
      quote: 'El ambiente es perfecto para pasar un rato agradable con amigos.'
    }
  ];

  document.getElementById('hero-badge').textContent = pageContent.heroBadge;
  document.getElementById('hero-title').textContent = pageContent.heroTitle;
  document.getElementById('hero-subtitle').textContent = pageContent.heroSubtitle;
  document.getElementById('hero-card-title').textContent = pageContent.heroCardTitle;
  document.getElementById('hero-card-text').textContent = pageContent.heroCardText;
  document.getElementById('gallery-title').textContent = pageContent.galleryTitle;
  document.getElementById('gallery-description').textContent = pageContent.galleryDescription;
  document.getElementById('clients-title').textContent = pageContent.clientsTitle;
  document.getElementById('clients-description').textContent = pageContent.clientsDescription;
  document.getElementById('video-title').textContent = pageContent.videoTitle;
  document.getElementById('video-description').textContent = pageContent.videoDescription;

  const indicators = document.getElementById('carousel-indicators');
  const inner = document.getElementById('carousel-inner');

  indicators.innerHTML = carouselItems.map((_, index) => `
    <button type="button" data-bs-target="#restaurantCarousel" data-bs-slide-to="${index}" class="${index === 0 ? 'active' : ''}" aria-current="${index === 0 ? 'true' : 'false'}"></button>
  `).join('');

  inner.innerHTML = carouselItems.map((item, index) => `
    <div class="carousel-item ${index === 0 ? 'active' : ''}">
      <img src="${item.image}" class="d-block w-100" alt="${item.title}" />
      <div class="carousel-caption d-none d-md-block">
        <h5>${item.title}</h5>
        <p>${item.text}</p>
      </div>
    </div>
  `).join('');

  const clientsGrid = document.getElementById('clients-grid');
  clientsGrid.innerHTML = clientCards.map((client) => `
    <div class="col-md-6 col-lg-4">
      <div class="card client-card h-100">
        <img src="${client.image}" class="card-img-top" alt="${client.name}">
        <div class="card-body">
          <h5 class="fw-bold">${client.name}</h5>
          <p class="mb-0 text-muted">“${client.quote}”</p>
        </div>
      </div>
    </div>
  `).join('');

  const video = document.getElementById('restaurantVideo');
  const repeatButton = document.getElementById('repeat-button');

  repeatButton.addEventListener('click', () => {
    video.currentTime = 0;
    video.play();
  });
});
