"use strict";

const btn = document.querySelector('.button');
const text = document.querySelector('.colorchange');
const background = document.getElementById('background-button');
const fullBackGround = document.getElementById('change-background');
const fullScreen = document.body.style;

fullBackGround.addEventListener('click', () => {
  let bColors = randomRGBValueGenerator();
  fullScreen.background = `rgb(${bColors[0]}, ${bColors[1]}, ${bColors[2]})`;
})

background.addEventListener('click', () => {
  let colors = randomRGBValueGenerator();
  background.style.background = `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`;
})

btn.addEventListener('click', () => {
  let colors = randomRGBValueGenerator();
  text.style.color = `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`;
})

function randomRGBValueGenerator() {
  const max = 255;
  return [Math.floor(Math.random() * max), Math.floor(Math.random() * max), Math.floor(Math.random() * max)];
}

function correctBoundsRGB() {
  const randomValues = randomRGBValueGenerator();
  for (let value of randomValues) {
    if (value < 0 || value > 255) return -1;
  }
  return 1;
}
