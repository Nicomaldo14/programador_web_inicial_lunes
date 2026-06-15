const titulo = document.querySelector('h1');

//console.log(titulo);

//stylo

titulo.style.color = 'red';

// se puede usar tambien backgroundColor, fontSize, etc. para cambiar el estilo de un elemento

//classlist

titulo.classList.add('fondo');

const boton = document.getElementById('boton');

const texto = document.getElementById('texto');

//console.log(boton,texto);

boton.addEventListener('click', () => {
    texto.classList.toggle('invisible');
})

// METODOS DE classList:

// .add: agrega clases.
// .remove: Elimina clases.
// .toggle: Alterna la presencia de una clase.
// .replace: Reemplaza una clase por otra.
// .lenght: Devuelve el numero de clases en el elemento.


const aclarion = document.getElementById('aclaracion')

console.log(aclaracion)

aclaracion.innerHTML = "<h1> este es un nuevo texto</h1>"
//aclaracion.innerText = "Este es un nuevo nuevo nuevo nuevo texto"