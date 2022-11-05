const h1 = document.querySelector('#mainTitle');
const input_1 = document.querySelector('#number_1');
const input_2 = document.querySelector('#number_2');
const input_3 = document.querySelector('#number_3');
const input_4 = document.querySelector('#number_4');
const calculateBtn = document.querySelector('#calculateBtn1');
const addBtn = document.querySelector('#calculateBtn2');
const concat = document.querySelector('#resultConcat');
const add = document.querySelector('#resultSum');
const form = document.querySelector('#form');

function sumarInputValues(event){
    console.log({event});
    event.preventDefault();
    const concatNums = input_1.value + input_2.value;
    concat.innerText = "Resultado: " + concatNums;
}

function btn2onClick(){
    const addNums = parseInt(input_1.value) + parseInt(input_2.value);
    add.innerText = "Resultado: " + addNums;
}

form.addEventListener('submit', sumarInputValues);
addBtn.addEventListener('click', btn2onClick);

