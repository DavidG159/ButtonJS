'use strict';

const btn1 = document.querySelector('.button--1');
const btn2 = document.querySelector('.button--2');
const btn3 = document.querySelector('.button--3');
const clicksfx = new Audio('click.mp3');
const clicksfx2 = new Audio('click2.mp3');
const clicksfx3 = new Audio('click3.mp3');
const clicksfx4 = new Audio('click4.mp3');
const button2_display1 = document.querySelector('.counter-display');
const button2_display2 = document.querySelector('.reset-btn');
const button2_display3 = document.querySelector('.close-btn');
const clickcount = document.querySelector('.score');
let counter = 0;


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

    counter += 1;
    clickcount.textContent = counter;
}

function reset() {
    counter = 0;
    clickcount.textContent = 0;
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
    clicksfx2.play();

});

button2_display2.addEventListener('click', function () {
    reset()
    clicksfx3.play();

});

button2_display3.addEventListener('click', function () {

    reset()
    button2_display1.classList.add('hidden');
    button2_display2.classList.add('hidden');
    button2_display3.classList.add('hidden');
    clicksfx4.play();
});