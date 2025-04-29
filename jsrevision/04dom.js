// 1. Selecting an element by ID and changing its text
const title = document.getElementById('main-title');
title.innerText = 'DOM Manipulation in Action!';

// 2. Selecting elements by class and changing their style
const paragraphs = document.getElementsByClassName('description');
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = 'blue';
    paragraphs[i].style.fontWeight = 'bold';
}

// 3. Selecting all <li> tags using getElementsByTagName
const items = document.getElementsByTagName('li');
for (let i = 0; i < items.length; i++) {
    items[i].style.listStyleType = 'square';
}

// 4. Using querySelector to select the first match
const firstButton = document.querySelector('#change-title');
firstButton.addEventListener('click', function () {
    title.innerText = 'Title Changed by Button Click!';
});

// 5. Using querySelectorAll to change all matching elements
const allParagraphs = document.querySelectorAll('.description');
allParagraphs.forEach(p => {
    p.style.backgroundColor = '#f0f0f0';
});

// 6. Accessing input value and displaying it using alert
const inputBox = document.getElementById('input-box');
const showInputBtn = document.getElementById('show-input');

showInputBtn.addEventListener('click', function () {
    const userInput = inputBox.value;
    alert('You typed: ' + userInput);
});

// 7. Another button to change title color randomly
const changeColorBtn = document.getElementById('change-color');
changeColorBtn.addEventListener('click', function () {
    const colors = ['red', 'green', 'purple', 'orange'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    title.style.color = randomColor;
});
