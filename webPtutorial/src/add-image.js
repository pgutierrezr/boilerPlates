import Argento from './argento.jpg';

function addImage(){

    const img = document.createElement('img');
    img.alt = 'argento';
    img.width = 300;
    img.src = Argento;

    const body = document.querySelector('body');
    body.appendChild(img);
}


export default addImage;