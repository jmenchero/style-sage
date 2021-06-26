# Style Sage technical test

# pokedex

[![Netlify Status](https://api.netlify.com/api/v1/badges/85eb6180-0860-4ea1-b5d5-2db8ccde40ac/deploy-status)](https://app.netlify.com/sites/cocky-hugle-c98385/deploys)

You can check the app here: [jmenchero-style-sage.netlify.app](https://jmenchero-style-sage.netlify.app/)

## Running

1. Clone the repo, `cd frontend`
2. Install dependencies with `yarn install`
3. Run in development mode with `yarn dev`

## Description

Proyecto Vue de prueba para StyleSage siguiendo el [enunciado propuesto](resources/Prueba Técnica.pdf).

La mayor parte de los ficheros han sido autogenerados por Nuxt, por lo que los ficheros interesantes a evaluar con la logica de la aplicacion son:

- [cats.vue](frontend/pages/cats.vue): Primer ejercicio.
- [gifs.vue](frontend/pages/gifs.vue): Segundo ejercicio.
- [coupons.vue](frontend/pages/coupons.vue): Tercer ejercicio.
- [default.vue](frontend/layouts/default.vue): Maquetacion del layout de toda la app.
- [Card.vue](frontend/components/Card.vue): Maquetacion de las tarjetas.
- [Detail.vue](frontend/components/Detail.vue): Maquetacion del panel de detalle.
- [HeatTimeMap.vue](frontend/components/HeatTimeMap.vue): Maquetacion del grafico interactivo.
- [cats.js](frontend/store/cats.js): Store de gatos.
- [gifs.js](frontend/store/gifs.js): Store de gifs.
- [coupons.js](frontend/store/coupons.js): Store de cupones.

## Notas
* Se han utilizado proveedores de APIs externos para los dos primeros ejercicios al haber caducado los enlaces a los gifs propuestos, y preferir no hardcodear los datos de los gatos.
## To-Do's
- FEATURE: Include favicon
- FEATURE: Display count in cat detail
- CHORE: Make cats list wider
- CHORE: Review general responsiveness
- FEATURE: Filter coupons by company
