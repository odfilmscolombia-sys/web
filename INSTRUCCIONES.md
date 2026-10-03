# Instrucciones para editar textos del sitio

## 1. Cambiar los botones del menú principal
Los enlaces de navegación se definen en el archivo [script.js](script.js) dentro del array `navigationItems`.

Ejemplo:

```js
const navigationItems = [
  { label: 'Inicio', href: 'index.html', icon: 'fa-home' },
  { label: 'Menú', href: 'menu.html', icon: 'fa-list' },
  { label: 'Contacto', href: 'contacto.html', icon: 'fa-headset' }
];
```

Para cambiar el texto de un botón, modifica el valor de `label`.
Para cambiar la ruta, modifica `href`.
Para cambiar el icono, cambia `icon` por otro nombre de Font Awesome.

## 2. Cambiar los textos del hero o del contenido principal
Los textos del encabezado y del hero se encuentran directamente en [index.html](index.html).

Puedes editar:
- el título principal
- el texto descriptivo
- el texto de los botones
- el placeholder del buscador

## 3. Cambiar los filtros del menú
Los filtros se generan desde el objeto `categoryLabels` en [script.js](script.js).

Ejemplo:

```js
const categoryLabels = {
  all: 'Todo',
  hamburguesas: 'Hamburguesas',
  picadas: 'Picadas',
  bebidas: 'Bebidas',
  comidas: 'Comidas',
  combos: 'Combos'
};
```

Modifica los valores para cambiar el texto mostrado en los filtros.

## 4. Cambiar colores y animaciones
Los estilos visuales están en [styles.css](styles.css).

Puedes editar:
- colores principales en `:root`
- sombras y transiciones
- animaciones al final del archivo

## 5. Gestionar productos en promoción
Los productos con banner promocional se controlan en [promociones.js](promociones.js).

En el array `promoProducts` puedes agregar o quitar los IDs que deben mostrar el banner naranja.

Ejemplo:

```js
const promoProducts = [1, 2, 3, 4];
```

Cada ID corresponde a un producto con `data-product-id` en [script.js](script.js).

## 6. Añadir más páginas en el futuro
Si agregas nuevas páginas, puedes incluirlas en `navigationItems` con su respectivo `href` y `icon`.

## 7. Guardar y compartir facturas desde el APK Android
La web detecta el puente JavaScript `window.Android`. Para guardar automáticamente las facturas, el APK debe exponer el método `saveInvoiceToFolder(carpeta, nombre, base64, tipo)`. Este debe crear la carpeta `Pictures/fact_kabanna` si no existe y guardar allí el JPG recibido. En Android 10 o posterior se recomienda `MediaStore` con `Pictures/fact_kabanna` como `RELATIVE_PATH`; para versiones anteriores se deben gestionar los permisos de almacenamiento correspondientes. El guardado debe devolver `false` si falla. Para compartir, se debe usar el URI de `MediaStore` o un `content://` seguro generado por `FileProvider`, nunca exponer una ruta `file://`.

Para enviar el archivo directamente al WhatsApp configurado, el APK también debe exponer `shareInvoiceToWhatsApp(telefono, mensaje, carpeta, nombre)`. Debe compartir el JPG ya guardado y dirigirlo al teléfono recibido (`573014412498`). Ambos métodos deben estar disponibles en el objeto `Android` del WebView. Sin ese puente, la web descarga el archivo con un nombre único y abre WhatsApp con el mensaje; por las restricciones del navegador no puede crear carpetas del teléfono ni adjuntar el JPG automáticamente.

## 8. Activar notificaciones push en Android
La página incluye el módulo [notify.js](notify.js) y el service worker [service-worker.js](service-worker.js). Para recibir notificaciones push, el sitio debe publicarse con HTTPS y conectarse a un backend que guarde las suscripciones y envíe los mensajes mediante Web Push. La clave VAPID privada debe permanecer únicamente en ese backend.

Antes de cargar `notify.js`, configura la clave VAPID pública y la URL de tu endpoint para guardar suscripciones:

```html
<script>
  window.KABANNA_PUSH_CONFIG = {
    vapidPublicKey: "CLAVE_VAPID_PUBLICA",
    subscriptionUrl: "https://tu-servidor.example/api/push/subscribe"
  };
</script>
<script src="notify.js"></script>
```

El endpoint recibe la suscripción como JSON por `POST` y debe responder con un estado HTTP exitoso. El backend puede enviar un payload JSON como `{"title":"KABANNA FAST-FOOD","body":"Texto de la notificación","url":"./index.html"}`. Al tocarla, se enfocará la página abierta o se abrirá la aplicación. En `index.html`, carga esta configuración antes de `notify.js`; si el sitio se ejecuta dentro de un WebView Android, también se necesita soporte de notificaciones push en el APK, ya que este módulo usa la API Web Push del navegador.
