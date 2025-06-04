'use strict';

const btn1 = document.querySelector('.button--1');
const btn2 = document.querySelector('.button--2');
const btn3 = document.querySelector('.button--3');
const clicksfx = new Audio('click.mp3');
const button2_display1 = document.querySelector('.counter-display');
const button2_display2 = document.querySelector('.reset-btn');
const button2_display3 = document.querySelector('.close-btn');
const clickcount = document.querySelector('.score');



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


function incrementCounter() {
    let counter = 0;
    counter += 1;
    clickcount.textContent = counter;
}

btn1.addEventListener('click', function () {
    setRandomColor();
    clicksfx.play();

});

btn2.addEventListener('click', function () {
    button2_display1.classList.remove('hidden');
    button2_display2.classList.remove('hidden');
    button2_display3.classList.remove('hidden');
    incrementCounter();

})