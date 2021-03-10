import { saludar } from './js/componentes';
import { crearImagen } from './js/componentes';


import img from './assets/webpack.PNG';
import img2 from './assets/cr7.jpg';

const nombre = 'KEVIN';

saludar(nombre);

const $hola = document.querySelector('#hola');

const imagen = document.createElement('img');
imagen.src = img;

$hola.appendChild(imagen);