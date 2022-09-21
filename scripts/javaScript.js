"use strict";

const button = document.getElementById('button');

button.addEventListener('click', onClick);

function onClick() {
    console.log(5);
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    console.log(randomColor);
     document.body.style.backgroundColor = "#"+randomColor;
};