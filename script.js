'use strict';

const btn1 = document.querySelector('.button--1');
const btn2 = document.querySelector('.button--2');
const btn3 = document.querySelector('.button--3');
const clicksfx = new Audio('click.mp3');
const clicksfx2 = new Audio('click2.mp3');
const clicksfx3 = new Audio('click3.mp3');
const clicksfx4 = new Audio('click4.mp3');
const clicksfx5 = new Audio('click5.mp3');
const next_page = new Audio('next-page.mp3');
const button2_display1 = document.querySelector('.counter-display');
const button2_display2 = document.querySelector('.reset-btn');
const button2_display3 = document.querySelector('.close-btn');
const clickcount = document.querySelector('.score');
const quote = document.querySelector('.quote-text');
const quotebtn = document.querySelector('.quote-btn');
const author = document.querySelector('.author-text');
const button3_close = document.querySelector('.quote-close-btn');
const quotegen = new Map([
    ['Yogi Bear', 'You can observe a lot just by watching'],
    ['Ralph Waldo', 'Life is a journey, not a destination'],
    ['Serena Williams', 'You have to believe in yourself when no one else does']
]);

let counter = 0;


//

function displayQuote(quoteentry) {

    //for (const [x, y] of quoteentry) console.log(x, y);
    const quotearr = Array.from(quoteentry.entries());
    //console.log(quotearr);
    const randomQuote = quotearr[Math.floor(Math.random() * quotearr.length)];
    console.log(`"${randomQuote[0]}" — ${randomQuote[1]}`);

    author.textContent = randomQuote[0];
    quote.textContent = randomQuote[1];

}



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

function resetquote() {
    quote.textContent = 'Quote';
    author.textContent = 'Author';
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

btn3.addEventListener('click', function () {
    author.classList.remove('hidden');
    quotebtn.classList.remove('hidden');
    quote.classList.remove('hidden');
    button3_close.classList.remove('hidden');
    clicksfx5.play();


});

button3_close.addEventListener('click', function () {

    author.classList.add('hidden');
    quotebtn.classList.add('hidden');
    quote.classList.add('hidden');
    button3_close.classList.add('hidden');
    clicksfx4.play();
    resetquote();


})

quotebtn.addEventListener('click', function () {
    displayQuote(quotegen);
    next_page.play();
})