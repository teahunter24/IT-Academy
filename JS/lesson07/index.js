// "use strict";

console.log('Hello!');
console.log('');

const example1 = function() {
    console.log('Example1');
    console.log('');

    // Set via array

    // множество - набор уникальных значений
    let storage = [];

    // есть ли элемент в множестве?
    function has(value) {
        return storage.includes(value);
    }

    // добавить элемент в множество
    function add(value) {
        if (!has(value)) {
        storage.push(value);
        }
    }

    // удалить элемент из множества
    function remove(value) {
        // [].splice();
        storage = storage.filter(item => item !== value);
    }

    // debugger;

    console.log('add(1)');
    add(1);
    console.log('add(2)');
    add(2);
    console.log('add(3)');
    add(3);
    console.log('add(2)');
    add(2);

    console.log('storage: ', storage.toString()); // 1, 2, 3

    console.log('add(1)');
    add(1);
    console.log('add(2)');
    add(2);
    console.log('add(3)');
    add(3);

    console.log('storage: ', storage.toString()); // 1, 2, 3

    console.log('');
    console.log('add(4)');
    add(4);
    console.log('remove(1)');
    remove(1);

    console.log('storage: ', storage.toString()); // 2, 3, 4

    console.log('');
    console.log('remove(4)');
    remove(4);
    console.log('remove(3)');
    remove(3);

    console.log('storage: ', storage.toString()); // 2

    console.log('adding 3, 5, 7, 9');
    add(3);
    add(5);
    add(7);
    add(9);

    for (let number = 0; number <= 10; number += 1) {
        console.log(`is number "${number}" in storage? (${has(number)})`);
        // console.log(`is number "${0}" in storage? (${has(0)})`);
        // console.log(`is number "${1}" in storage? (${has(1)})`);
        // console.log(`is number "${2}" in storage? (${has(2)})`);
        // ...
        // console.log(`is number "${10}" in storage? (${has(10)})`);
    }

    console.log('');
    console.log('End of Example1');
    console.log('');
}



function example2() {
    console.log('Example2');
    console.log('');
    
    // Set via array

    // множество - набор уникальных значений
    let storage = [];

    // есть ли элемент в множестве?
    function has(value) {
        // return storage[value];
        // return Boolean(storage[value]);

        // <variable> и <object> - проверяет, есть ли среди ключей <object> ключ <variable>
        return value in storage; 
    }

    // напоминание - Object.assign() - для объединения двух объектов
    // напоминание - объекты логируются неактуальными
    // Object.assign({name: "John"}, {age: 50}; // {name: "John", age: 50}

    // добавить элемент в множество
    function add(value) {
        storage[value] = value;
    }

    // удалить элемент из множества
    function remove(value) {
        delete storage[value];
    }

    // проверки из example 1 (copy - past)
    console.log('add(1)');
    add('1');
    console.log('add(2)');
    add('2');
    console.log('add(3)');
    add('3');
    console.log('add(2)');
    add('2');

    console.log('storage: ', Object.assign({}, storage)); // 1, 2, 3

    console.log('add(1)');
    add('1');
    console.log('add(2)');
    add('2');
    console.log('add(3)');
    add('3');

    console.log('storage: ', Object.assign({}, storage)); // 1, 2, 3

    console.log('');
    console.log('add(4)');
    add('4');
    console.log('remove(1)');
    remove('1');

    console.log('storage: ', Object.assign({}, storage)); // 2, 3, 4

    console.log('');
    console.log('remove(4)');
    remove('4');
    console.log('remove(3)');
    remove('3');

    console.log('storage: ', Object.assign({}, storage)); // 2

    console.log('adding 3, 5, 7, 9');
    add('3');
    add('5');
    add('7');
    add('9');

    for (let number = 0; number <= 10; number += 1) {
        const numberStr = number.toString();
        console.log(`is number "${number}" in storage? (${has(numberStr)})`);
        // console.log(`is number "${0}" in storage? (${has(0)})`);
        // console.log(`is number "${1}" in storage? (${has(1)})`);
        // console.log(`is number "${2}" in storage? (${has(2)})`);
        // ...
        // console.log(`is number "${10}" in storage? (${has(10)})`);
    }

    console.log('');
    console.log('End of Example2');
    console.log('');
}



function example3() {
    console.log('Example3');
    console.log('');
    
    // Set via array

    const storage = new Set();
    // storage.has();
    // storage.add();
    // storage.delete();

    console.log('add(1)');
    storage.add(1);
    console.log('add(2)');
    storage.add(2);
    console.log('add(3)');
    storage.add(3);
    console.log('add(2)');
    storage.add(2);

    console.log('storage: ', storage); // 1, 2, 3

    console.log('add(1)');
    storage.add(1);
    console.log('add(2)');
    storage.add(2);
    console.log('add(3)');
    storage.add(3);

    console.log('storage: ', storage); // 1, 2, 3

    console.log('');
    console.log('add(4)');
    storage.add(4);
    console.log('delete(1)');
    storage.delete(1);

    console.log('storage: ', storage); // 2, 3, 4

    console.log('');
    console.log('delete(4)');
    storage.delete(4);
    console.log('delete(3)');
    storage.delete(3);

    console.log('storage: ', storage); // 2

    console.log('adding 3, 5, 7, 9');
    storage.add(3);
    storage.add(5);
    storage.add(7);
    storage.add(9);

    for (let number = 0; number <= 10; number += 1) {
        console.log(`is number "${number}" in storage? (${storage.has(number)})`);
    }

    console.log('');

    // Set - лекго преобразовать в массив
    const array = Array.from(storage);
    console.log('Set to Array result: ', array);

    // Set - лекго преобразовать в объект
    const obj = Object.fromEntries(storage.entries());
    console.log('Set to Object result: ', obj);

    // var storage = new Set();
    // storage.size(); // узнакть кол-во элементов в Set
    // storage.clear(); // очистить весь Set

    console.log('');
    console.log('End of Example3');
}



function example4() {
    console.log('Example4');
    console.log('');

    // исключение = ошибка
    
    // если раскомментировать - код "упадет" (не пойдёт дальше)
    // console.log('a', a);
    try {
        console.log('a', a);
    } catch (err) {
        console.log(err);
        // console.log(err.name);
        // console.log(err.message);
        // console.log(err.stack);
        // console.log(err.toString());
    }


    try {
    // сами создаём "свою ошибку"
        const myError = new Error('my custom message'); // аргумент - сообщение
        throw myError; // throw - "выбросить" ошибку, остановив выполнение кода
    } catch (err) {
        console.log(err);
    }

    // функция с ошибкой
    function doError() {
        console.log('a', a);
    }


    // try-catch - "отловит" ошибку, даже если она произошла внутри какой-то функции
    try {
        doError();
    }catch (err) {
        console.log(err);
    }


    // try-catch - можно вкладывать (делать несколько уроневней)
    try {
        try {
            try {
                doError();
            }catch (err) {
                console.log(err);
            }
        } catch (err) {
            console.log('level 2', err);
        }
    } catch (err) {
        console.log('level 3', err);
    }


    // для throw можно использовать не ттолько экземпляры класса Error
    try {
        // throw 'my string error';
        throw {name: "MyNameError", text: "ErrorMessage"};
    } catch(err) {
        console.log(err);
    }

    // try-cath-finally
    console.log('');
    console.log('try-cath-finally (without error): ');
    try {
        // pass
    } catch(err) {
        // pass
    } finally {
        console.log('finally');
    }

    console.log('try-cath-finally (with error): ');
    try {
        throw 'my string error';
    } catch(err) {
        console.log(err);
        throw 'my string error (level 2)';
    } finally {
        console.log('finally');
    }

    // try-finally
    // не отловит ошибку, но finally все равн осработает
    console.log('try-finally (with error): ');
    try {
        throw 'my string error';
    } finally {
        console.log('finally');
    }

    console.log('');
    console.log('End of Example4');
}


function example5() {
    console.log('Example5');
    console.log('');

    // возвращает случайное число от 0 до N-1
    function randomInt(n) {
        return Math.trunc(n * Math.random())
    }

    const variable = randomInt(3);

    console.log('if-else');
    
    if (variable === 0) {
        console.log(' do when 0');
    } else if (variable === 1) {
        console.log(' do when 1');
    } else if (variable === 2) {
        console.log(' do when 2');
    } else {
        throw new Error ('unexpected variable');
    }

    // switch-case
    console.log('');
    console.log('switch-case');

    switch (variable) {
        case (0):
            console.log(' do when 0');
            break;
        case (1):
            console.log(' do when 1');
            break;
        case (2):
            console.log(' do when 2');
            console.log(' do when 2');
            console.log(' do when 2');
            break;
        default:
            throw new Error ('unexpected variable');
    }

    
    console.log('');
    console.log('End of Example5');
}





// самовызывающаяся функция
(function () {
    // example1();
    // example2();
    // example3();
    // example4();
    example5();
}) ()

console.log('');
console.log('Bye!');