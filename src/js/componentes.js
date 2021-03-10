import '../css/componentes.css';
import '../styles.css';

export const saludar = (nombre) => {

    const h1 = document.createElement('h1');

    h1.innerText = `Hola , ${nombre} como estas dog`;

    document.body.appendChild(h1);
}

export const crearImagen = (img) => {

    const imagen = document.createElement('img');
    imagen.src = img;

    return imagen;
}