"use strict";

console.log('Hello!');
console.log('');

// const example1 = function() {
//     console.log('Example1');
//     console.log('');

//     // Вариант решения д/з ANKETA hw03

//     // функция длы выводы строк
//    function enterString (question) {
//     let answer = null;

//     do {
//         answer= prompt(question);
//     } while (!answer || answer.length < 2);

//     return answer;
//    }

//    // функция проверки возраста
//    function enterNumber (question, min = -Infinity, max = +Infinity) {
//     let answer = null;

//     do {
//         answer= parseInt(prompt(question));

//     } while (!answer || isNaN(answer) || answer < min || answer > max);

//     return answer;
//    }

//    // функция проверки 'на пенсии' (тернарный орператор)
//    const isOld = age > 100 ? 'да' : 'нет';

//     //аналог проверки выше  
//     //    let isOld;
//     //    if (age > 100) {
//     //     isOld = 'да';
//     //    } else {
//     //     isOld = 'нет';
//     //    }

//    // на пенсии ли нет?
//     let retried = screen
//         ? age > 63
//             ? 'да'
//             : 'нет'
//         ? age > 58
//             ? 'да'
//             : 'нет'

//     //агалог проверки выше
//     // let retried = (sex && age > 63) || (sex && age > 58) ? 'да' : 'нет';


//     // вывод результата
//     const result = [
//         `Ваше ФИО: ${promptSurname} ${promptName} ${promptPatronymic}`,
//         `Ваш возраст в годах: ${promptAgeNumber}`,
//         `Ваш возраст в днях: ${promptAgeNumber * 365}`,
//         `Через 5 лет Вам будет: ${promptAgeNumber + 5}`,
//         `Ваш пол: ${gender}`,
//         `Вы на пенсии: ${pension}`
//     ].join('\n');

//     alert(result);


//    // ANKETA
//    const surName = enterString('Введите Вашу фамилию?!\n(Минимум 2 символа)');
//    const Name = enterString('Введите Ваше имя?!\n(Минимум 2 символа)');
//    const PatronymicName = enterString('Введите Ваше отчество?!\n(Минимум 2 символа)');
//    // ...

//     console.log('');
//     console.log('End of Example1');
//     console.log('');
// }



function example2() {
    console.log('Example2');
    console.log('');
    
    // ООП - объектно-ориентированное программирование (книга стр. 45)

    // Принципы:
    // - инкапсуляция,
    // - полиморфизм,
    // - наследование,
    // - абстракция.

    // debugger; 

    // Функции-конструкторы
    function Car(carNumber) {
        const self = this; // замена this на self (или that) для безопасности работы кода

        // "поле"
        self.number = carNumber;

        // "метод"
        self.signal = function () {
            console.log('self - ', self);
            console.log('this - ', this);
            console.log(`Машина <${self ? self.number : 'unknown'}> издаёт сигнал`); 
            console.log(`Машина <${this ? this.number : 'unknown'}> издаёт сигнал`);  
        }

        self.toString = function () {
            return `Car <${self.number}>`
        }
    }

    const myCar = new Car('AAA-BBB-111');
    console.log('myCar - ', myCar);
    console.log('myCar.number - ', myCar.number);
    myCar.signal();
    console.log('---');

    const myCar2 = new Car('HGN-FBJ-674');
    console.log('myCar - ', myCar);
    console.log('myCar2.number - ', myCar2.number);
    myCar2.signal();
    myCar.signal();
    console.log('---');

    console.log('arr: ' + new Array(1, 2, 3));
    console.log('car: ' + myCar);
    console.log('car: ' + myCar.toString());
    console.log('car: ', myCar.toString());
    console.log('car: ', myCar);

    console.log('');

    const carFunction = new Car;
    console.log('carFunction - ', carFunction);
    const signal =  carFunction.signal;
    console.log('signal', signal);
    console.log('signal', signal()); // без use strict - вместо this будет объект Window / GlobalThis

    console.log('');
    console.log('--- call ---');
    signal.call({ number: "my-custom-number" });

    console.log('');
    console.log('--- apply ---');
    'signal', signal.apply({ number: "my-custom-number" });

    console.log('');
    console.log('--- bind ---');
    const myCustomThis = { number: "my-custom-number" };
    const myCustomSignal = signal.bind(myCustomThis);
    myCustomSignal();
    myCustomThis.number = 'my-another-number'
    myCustomSignal();


    console.log('');
    console.log('End of Example2');
    console.log('');
}



function example3() {
    console.log('Example3');
    console.log('');
    
     // Функции-конструкторы
     function CustomSet() {
        const self = this; // замена this на self (или that) для безопасности работы кода

        // "приватное поле"
        let storage = [];

        // "приватный метод" - недоступный из вне
        function sort() {
            storage = storage.sort();
        }

        // "публичный метод" - доступный из вне
        self.has = function (value) {
            return storage.includes(value);
        }

        self.add = function (value) {
            if (!self.has(value)) {
                storage.push(value);
                sort();
            }
        }

        self.delete = function (value) {
            storage = storage.filter(item => item !== value);
        }

        self.toString = function () {
            return `CustomSet {${storage}}`
        }
    }

    const set1 = new CustomSet();
    set1.add('first');
    set1.add('second');
    set1.add('3d');

    console.log('set1' + set1);

    // Примеры, как можно "сломать" работу класса, изменив публичное поле
    // set1.storage = null;
    // console.log('set1' + set1);
    // set1.add(1);

    // set1.storage = [1, 1, 1, 1]
    // console.log('set1' + set1);
    // set1.add(1);

    console.log('set1.storage', set1.storage); // undefined
    console.log('set1.sort', set1.sort); // undefined, хотя в конструкторе есть эта функция
    set1.add('2d');
    set1.add('5d');
    set1.add('4d');
    console.log('set1: ' + set1);
    console.log('-----');

    const set2 = new CustomSet();
    set2.add('1decimal');
    set2.add('9decimal');
    set2.add('3decimal');
    set2.add('2decimal');
    set2.add('4decimal');
    set2.add('7decimal');
    set2.add('5decimal');
    set2.add('6decimal');
    set2.add('8decimal');

    set2.delete('4decimical');
    console.log('set2: ' + set2);
    console.log('set1: ' + set1); // не изменился, так как не связан с set2

    console.log('');
    console.log('End of Example3');
}



function example4() {
    console.log('Example4');
    console.log('');

    // как example3, только в классовом стиле

    class CustomSet {
        // constructor - спец. функция, которая вызывается при использовании через new
        constructor () {
            this.storage = [];
        }

        sort() {
            this.storage = this.storage.sort();
        }
    
        has(value) {
            return this.storage.includes(value);
        }
    
        add (value) {
            if (!this.has(value)) {
                this.storage.push(value);
                this.sort()
            }
        }

        delete (value) {
            this.storage = this.storage.filter(item => item !== value);
        }

        toString() {
            return `CustomSet {${this.storage}}`
        }

    }

    const set1 = new CustomSet();
    set1.add('first');
    set1.add('second');
    set1.add('3d');

    console.log('set1' + set1);

    // Примеры, как можно "сломать" работу класса, изменив публичное поле
    // set1.storage = null;
    // console.log('set1' + set1);
    // set1.add(1);

    // set1.storage = [1, 1, 1, 1]
    // console.log('set1' + set1);
    // set1.add(1);

    console.log('set1.storage', set1.storage); // undefined
    console.log('set1.sort', set1.sort); // undefined, хотя в конструкторе есть эта функция
    set1.add('2d');
    set1.add('5d');
    set1.add('4d');
    console.log('set1: ' + set1);
    console.log('-----');

    const set2 = new CustomSet();
    set2.add('1decimal');
    set2.add('9decimal');
    set2.add('3decimal');
    set2.add('2decimal');
    set2.add('4decimal');
    set2.add('7decimal');
    set2.add('5decimal');
    set2.add('6decimal');
    set2.add('8decimal');

    set2.delete('4decimical');
    console.log('set2: ' + set2);
    console.log('set1: ' + set1); // не изменился, так как не связан с set2


    console.log('');
    console.log('End of Example4');
}


function example5() {
    console.log('Example5');
    console.log('');


    
    console.log('');
    console.log('End of Example5');
}





// самовызывающаяся функция
(function () {
    // example1();
    // example2();
    // example3();
    example4();
    // example5();
}) ()

// console.log('');
// console.log('Bye!');