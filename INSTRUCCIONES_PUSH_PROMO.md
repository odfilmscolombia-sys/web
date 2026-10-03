# Instrucciones para editar la promoción

La promoción se configura al inicio de [push_promo.js](push_promo.js), dentro del objeto `promoProduct`:

```js
const promoProduct = {
  id: 1,
  name: "Hamburguesa de queso",
  image: "pictures/hamburguesa_sencilla.png",
  imageDescription: "Hamburguesa con queso fundido"
};
```

## Cambiar el ID del producto

1. Abre [script.js](script.js) y busca el producto en el array `products`.
2. Identifica su número `id`. Por ejemplo, el ID de `Hamburguesa Sencilla` es `1`.
3. Cambia `id` en `promoProduct` para que coincida con el del producto del catálogo.

El ID se guarda como atributo `data-product-id` en la tarjeta promocional. Debe coincidir con el catálogo para identificar correctamente a qué producto corresponde la promoción. Cambiarlo no modifica el catálogo, el precio ni agrega el producto al carrito.

## Cambiar la imagen

Edita el valor de `image` en `promoProduct`. Para una imagen guardada en el proyecto, usa una ruta relativa desde la página, por ejemplo:

```js
image: "pictures/nuevas/hamburguesa_queso.png",
```

También puedes usar la URL HTTPS completa de una imagen alojada en internet. Comprueba que el archivo exista y que la ruta y las mayúsculas coincidan con su nombre real.

Actualiza `imageDescription` para que el texto alternativo describa la nueva imagen y mantenga la tarjeta accesible.

## Cambiar el nombre

Edita el valor de `name`. Ese texto aparece como título de la tarjeta. El archivo `push_promo.js` ya se carga desde [index.html](index.html); no hace falta agregar otro `<script>` para cambiar estos valores.
