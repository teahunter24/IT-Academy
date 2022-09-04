// ПРИМЕР
console.log('');
console.log('ПРИМЕР Счётчика');

function makeCounter() {
    let curCount = 1;

    return function() {
        return curCount++;
    };
}

let counter = makeCounter();

// каждый вызов возвращает результат, увеличивая счётчик
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3


// Increment (счетчик на увеличение)
console.log('');
console.log('Increment - cчетчик на увеличение:');


function generateIncreasingCounter(n) {
    let currentCountI = n;
    return function(num) {
        if(num) {return currentCountI += num} else {return ++currentCountI} 
    }
}

const increase = generateIncreasingCounter(100);
console.log(increase()); // 101
console.log(increase()); // 102
console.log(increase(5)); // 107
console.log(increase(10)); // 117



// Decrement (счетчик на уменьшение)
console.log('');
console.log('Decrement - cчетчик на уменьшение:');


function generateDecreasingCounter(n) {
    let currentCountD = n;
    return function(num) {
        if(num) {return currentCountD -= num} else {return --currentCountD} 
    }
}

const decrease = generateDecreasingCounter(100);
console.log(decrease()); // 99
console.log(decrease()); // 98
console.log(decrease(5)); // 93
console.log(decrease(10)); // 83




// замыкание
console.log('');
console.log('замыкание');

function generation(start) {
    const inner = function(number) {
        console.log('inner', start + number) 
    }

    return inner;
}

//функцию можно сохранять в переменную (function expression)
const gen1000 = generation(1000);
gen1000(1); // inner 1001
gen1000(2); // inner 1002
