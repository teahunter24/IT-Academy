console.log('Hello from console!');

// window.location.href

// получить элемент из верстки по id (конкретный параграф)
var fisrtP = document.getElementById('first');
console.log('fisrtP', fisrtP);

// получить элементов из верстки по тэгу (все параграфы)
var allP = document.getElementsByTagName('p');
console.log('allP', allP);

// получить элементов из верстки по классу
var allBoxes = document.getElementsByClassName('box');
console.log('allBoxes', allBoxes);

// получить элементов из верстки по query-селектору (первый)
var bold = document.querySelector('.box b');
console.log('bold', bold);

// получить элементов из верстки по query-селектору (все)
var allBold = document.querySelectorAll('.box b');
console.log('allBold', allBold);

// элемент.getElementById()
// элемент.getElementByTagName()
// элемент.getElementByClassName()
// элемент.querySelector()
// элемент.querySelectorAll()

const firstB = document.querySelector('b');
const firstPAndB = fisrtP.querySelector('b');
console.log('firstB', firstB);
console.log('firstPAndB', firstPAndB);

alert('(1) После нажатия - изменится текст второго <b>');
// firstPAndB.innerText = "[УДАЛЕНО]";
var innerText = firstPAndB.innerText;

// var innerTextWithoutSpaces = innerText.replace(' ', '');
var innerTextWithoutSpaces = innerText.split(' ').join('');
var innerTextWithoutSpaces = innerText.toUpperCase(' ').split(' ').join('');

firstPAndB.innerText = innerTextWithoutSpaces;


alert('(2) После нажатия - изменится текст второго <b>');
firstPAndB.innerHTML= firstPAndB.innerHTML + '<i> italic</i>';

alert('(3) После нажатия - изменится стили');
var allBoxesBold = document.querySelectorAll('.box b');

// firstPAndB.style.color = 'red';
for (var bold of allBoxesBold) {
    bold.style.color = 'red';
    bold.setAttribute('data-bold', "my-value foe test JS");
}

// var bold = {
//     style:{
//         color: 'blue';
//         with: 'auto';
//         height: 'auto';
//     }
// }