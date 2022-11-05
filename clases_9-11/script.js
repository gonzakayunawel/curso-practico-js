const h1 = document.querySelector('h1');
// const p = document.querySelector('p');

const p = document.querySelectorAll('p');

const parrafo = document.querySelector('.parrafo');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(input.value);

console.log({
    h1,
    p,
    parrafo,
    pid,
    input
});

// Basic form to display a new text in the HTML output
h1.innerHTML = 'Buenas gente! by innerHTML';
// Correct form to display a new text in the HTML output
h1.innerText = 'Buenas gente!';
// get attributes form a html label
console.log(h1.getAttribute('pantalla'))
// how to configure an attribute
// h1.setAttribute('class', 'rojo');
// how to configure an class attribute
h1.classList.add('rojo');
h1.classList.remove('verde');

input.value = '456';
const img = document.createElement('img');
img.setAttribute('src','https://drive.google.com/uc?export=view&id=1of_kJIZtKli5-QBIVbQLQdHBbao6ILrF');
console.log(img);

// pid.append(img);

pid.innerHTML = '';
// pid.appendChild(img);
// pid.innerHTML = img; THIS DON'T WORK
