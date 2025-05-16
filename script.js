'use strict';

const btn1 = document.querySelector('.button--1');
const btn2 = document.querySelector('.button--2');
const btn3 = document.querySelector('.button--3');

console.log(btn1);
btn1.addEventListener('click', function () {
    console.log('button1 has been clicked');
});