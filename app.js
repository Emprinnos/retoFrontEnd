/*Variable para toggle switch */

const toggle = document.querySelector('#toggle');

/*Variable para el contenedor de los precios */

const priceContainer = document.querySelector('.contenedor-flex');


/*Activa el toggle switch para ocultar los precios mensuales
 y mostrar los precios anuales */

toggle.addEventListener('change', () => {
  
  priceContainer.classList.toggle('mostrar');
});