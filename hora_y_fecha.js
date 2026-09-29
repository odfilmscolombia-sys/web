(function () {
  const companyInfo = {
    name: 'KABANNA FAST-FOOD',
    phone: '+57 301 441 2498',
    address: 'Cra 50 # 25-45, Cacaotal/Chinú, Córdoba, Colombia',
    nit: '900.123.456-7',
    logo: 'pictures/logo-kabanna.png'
  };

  function formatDateTime(date = new Date()) {
    return {
      date: date.toLocaleDateString('es-CO', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      }),
      time: date.toLocaleTimeString('es-CO', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      })
    };
  }

  function renderInvoiceMeta() {
    const logoElement = document.getElementById('invoice-logo');
    const nameElement = document.getElementById('invoice-company-name');
    const phoneElement = document.getElementById('invoice-company-phone');
    const addressElement = document.getElementById('invoice-company-address');
    const nitElement = document.getElementById('invoice-company-nit');
    const dateElement = document.getElementById('invoice-created-at');
    const timeElement = document.getElementById('invoice-created-time');

    if (!logoElement || !nameElement || !phoneElement || !addressElement || !nitElement || !dateElement || !timeElement) return;

    logoElement.src = companyInfo.logo;
    logoElement.alt = companyInfo.name;
    nameElement.textContent = companyInfo.name;
    phoneElement.textContent = companyInfo.phone;
    addressElement.textContent = companyInfo.address;
    nitElement.textContent = `NIT: ${companyInfo.nit}`;

    const { date, time } = formatDateTime();
    dateElement.textContent = date;
    timeElement.textContent = time;
  }

  window.kabannaDateTime = { formatDateTime, renderInvoiceMeta };
})();
