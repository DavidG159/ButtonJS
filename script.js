'use strict';

const btn1 = document.querySelector('.button--1');
const btn2 = document.querySelector('.button--2');
const btn3 = document.querySelector('.button--3');


function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setRandomColor() {
    document.body.style.backgroundColor = getRandomColor();
}


btn1.addEventListener('click', function () {
    setRandomColor();

});