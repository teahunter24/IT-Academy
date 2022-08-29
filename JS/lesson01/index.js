"use strict";

// alert('Hello!');

// console.log('Hello, World!');

let a = 'notebook';
console.log(a);

a = 'apple';
console.log(a);

//boolean = true/false
const bTrue = true;
const bFalse = false;

const arr = [1, 2];

const user = {
    name: "Jane",
};

console.log('all variables', a, bTrue, bFalse, arr, user);

let newVar;
// let newVar = undefined;


if (bTrue) {
    newVar = 'test';
    console.log('тут true');
} 

console.log(newVar);


if (a === 'apple') {
    console.log('a === apple is true');
} else {
    console.log('a not apple');
};

console.log('');
console.log('');
console.log('');
// ---


// for-ы / циклы

// (<объявдяем что-то>; <проверка>; <итеративный шаг>)
for (let index = 25;; index += 1 ) {
    console.log('Проверяем index = ' + index);  

    if (index % 17 === 0) {
        console.log('Нашли число, index = ' + index);  
        break;
    }
}


console.log('');
console.log('');


console.log('continue');

for (let index = 10; index < 21; index += 1) {
    if (index % 3 === 0) {
        continue;
    }

    console.log('Проверяем index = ' + index);
}