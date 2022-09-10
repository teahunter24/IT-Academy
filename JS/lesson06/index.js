// "use strict";

console.log('Hello!');
console.log('');

const example1 = function() {
    console.log('Example1');
    console.log('');

    const dictionary = {
        "истоки": 101,
        "рок-музыки": 2,
        "лежат": 3,
        "в": 400,
        "блюзе": 56,
        "из": 6,
        "котрого": 70,
        "первую": 90,
        "очередь": 84,
    }

    for (const item of ['str1', 'str2', 'str3']) {
        console.log('for-of', item);
    }

    for (const item in ['str1', 'str2', 'str3']) {
        console.log('for-in', item);
    }

    console.log('---');
    for (const key in dictionary) {
        // console.log(key);
        console.log(`слово ${key} встречается в тексте  ${dictionary[key]} раз`);
    }
    console.log('---');
    for (const key in dictionary) {
        let sum = 0;
        // console.log(key);
        sum += dictionary[key];
    }

    let sum1 = 0;
    for (const key in dictionary) {
        sum1 += dictionary[key];
    }
    console.log('Сумма всех слов - ', sum1);

    console.log('---');
    const keys = Object.keys(dictionary);
    const values = Object.values(dictionary);
    const entries = Object.entries(dictionary);
    console.log("keys", keys); // ["истоки", "рок-музыки", "лежат", ...]
    console.log("values", values); // [101, 2, 3, ....]
    console.log("entries", entries); // [["истоки", 101], ["рок-музыки", 2], ["лежат", 3], ...]

    console.log('---');
    let sum2 = 0;
    for (const value in Object.values(dictionary)) {
        sum2 += value;
    }
    console.log('sum2 - ', sum2);

    console.log('---');
    let sum3 =  Object.values(dictionary).reduce((acc, item) => acc + item);
    console.log('sum3 - ', sum3);

    console.log('.reduce:');
    const reduceResult = [1, 2, 3, 4].reduce((acc, item) => {
        console.log(`acc = ${acc}; item = ${item}`);
        return acc + item
    }); // (((1 + 2) + 3) + 4) = 10
    console.log('reduceResult - ', reduceResult);

    const fullString = Object
        .entries(dictionary)
        .reduce((acc, item) => {
            // acc - строка
            // item - "истоки": 101
            return acc + `слово ${item[0]} встречается в тексте ${item[1]} раз`
        }, '');
    console.log(fullString);

    console.log('---');
    const someEntries = [["привет", 123], ["пока", 987], ["как дела", 585]];
    const createObject = Object.fromEntries(someEntries)
    console.log('someEntries', someEntries);
    console.log('createObject', createObject);

    console.log('');
    console.log('End of Example1');
    console.log('');
}



function example2() {
    console.log('Example2');
    console.log('');
    
    // "глобальные классы"
    const object1 = new Object (); // пустой объект
    const object2 = {}; // почти то же самое

    const array1 = new Array (); // пустой массив
    const array2 = []; // почти то же самое

    const number1 = new Number (); // 0
    const number2 = 0; // 0

    const string1 = new String (); // ''
    const string2 = ''; // ''

    console.log('globalClasses: ', {
        object1, 
        object2, 
        array1,
        array2,
        number1, 
        number2, 
        string1, 
        string2, 
    });

    //разные методы классов и их экземпляров (инстансов/instance-ов)
    /*
    Object.create();
    Object.defineProperty(obj, key, value); // то же самое , что и obj[key] = value
    Object.freeze(); // "замораживает" объект
    Object.is(); // сравнивает 2 объекта
    Object.isExtensible(); // является ли это функцией? true/false
    Object.isFrozen(); // является ли объект замороженным? true/false
    Object.toString(); // приводит к строке
    //пример
    ({name: 123}).toString(); // приводит к строке [" onject Object"]
    Object.assign(); // объединить 2 объекта

    Array.isArray(); // true/false - является ли аргумент массивом
    Array.from(); // пытается перевести переданный аргумент в массив
    [1, 2, 3, 4].toString(); // приводит к строке "1,2,3,4"

    Number.NaN; // Not a number
    Number.isInteger(); // целое число
    Number.parseFloat(); 
    Number.parseInt(); 
    Number.NEGATIVE_INFINITY; 
    Number.POSITIVE_INFINITY; 
    Infinity; // бесконечность (> 3 * 10^308) 
    Number.isFinite(); // true, если переданный аргумент == Infinity

    String.fromCharCode(); // возвращает символ по unicode
    // let result = '';
    // for (let code = 0; code < 400; code += 1) {result += String.fromCharCode(code)}
    ''.endsWith('.com');
    ''.startsWith('https');
    ''.trim(); // убирает лишние пробелы с начала или конца строки
    ''.match();
    ''.repeat(); // '+'.repeat(5) -> "+++++"
    ''.replace(',', '.'); // заменяет нужную подстроку на другую
    ''.substring(0, 23); // вернет срез строки между 0 и 23 символом
    ''.slice();
    ''.includes('substr'); // true, если нашло подстроку в строке
    ''.split();
    ''.concat(); // 'str'.contact('123') -> "str123"
    ''.toLowerCase(); // 'Hello'.toLowerCase() -> "hello"
    ''.toUpperCase(); // 'Hello'.toLowerCase() -> "HELLO"
    */

    // задача - итерировать по символам/буквам строки
    // const string = 1312423432532525245; 
    // Array.from(string);

    // string.split("");

    // Object.values(string);

    // for (const letter of string) {
    //     console.log(letter);
    // }

    console.log('');
    console.log('Date');
    const now = new Date();
    console.log('now: ', now); // Sat Sep 10 2022 12:43:40 GMT+0300 (Москва, стандартное время)
    console.log('now: ', +now); // 1662803076547 - это ms, прошедшие с 1 января 1970-го года
    console.log('start date: ', new Date(0)); // Thu Jan 01 1970 03:00:00 GMT+0300 (Москва, стандартное время) - "точка отсчета"
    console.log('now, ISO-format: ', now.toISOString()); // 2022-09-10T09:48:43.348Z
    console.log('');

    // date2 > date1
    function diff(date1, date2) {
        // let ms = Math.abs(Number(date2) - Number(date1));
        let ms = Number(date2) - Number(date1);
        if (ms < 0) {
            ms *= -1;
        }

        const sec = Number((ms / 1000).toFixed(1));
        const min = Number((ms / (1000 * 60)).toFixed(1));
        const hours =  Number((ms / (1000 * 60 * 60)).toFixed(1));
        const days =  Number((ms / (1000 * 60 * 60 * 24)).toFixed(1));
        const years =  Number((ms / (1000 * 60 * 60 * 24 *365)).toFixed(1));

        // return {
        //     // sub,
        //     sec,
        //     min,
        //     hours,
        //     days, 
        //     years,
        // }

        const obj = {
            years,
            days, 
            hours,
            min,
            sec,
            ms
        };

        const measure = Object.entries(obj).find(item => item[1] > 0.5);

        return `${measure[1]} ${measure[0]}`
}

    console.log('diff(new Date(0), now: )', diff(new Date(0), now));
    console.log('diff(0, 100): ', diff(0, 100));
    console.log('diff(0, 1_000_000 * 1000): ', diff(0, 1_000_000 * 1000));
    console.log('diff(0, 10_000_000 * 1000): ', diff(0, 10_000_000 * 1000));
    console.log('diff(0, 100_000_000 * 1000): ', diff(0, 100_000_000 * 1000));
    console.log('diff(0, 1_000_000_000 * 1000): ', diff(0, 1_000_000_000 * 1000));
    console.log('');



    console.log('Math');
    Math.abs(); // абсолютное значение - модуль
    Math.round(); // округление
    Math.max(); // max из ряда чисел 
    Math.min(); // min из ряда чисел 
    Math.pow(2, 3); // 2^3
    Math.random(); // случайное сичло между 0 и 1

    console.log('Math.random():', Math.random());
    console.log('Math.random():', Math.random());
    console.log('Math.random():', Math.random());
    console.log('Math.random():', Math.random());
    console.log('Math.random():', Math.random());

    // возвращает случайное число от 0 до N-1
    function randomInt(n) {
        // (0, 1)
        // n * (0, 1) => (0, n)
        // Math.random() - округлить до целого
        // Math.ceil() - округление вверх
        // Math.floor() - округление вниз
        // Math.trunc() - отбрасывает дробную часть

        return Math.trunc(n * Math.random())
        // return Math.floor(n * Math.random())
    }


    console.log('');
    console.log('End of Example2');
    console.log('');
}



function example3() {
    console.log('Example3');
    console.log('');
    
    // возвращает случайное число от 0 до N-1
    function randomInt(n) {
        return Math.trunc(n * Math.random())
    }
    
    // MOOD - вернуть k цветов радуги
    const colors = [ 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый' ]

    function mood(numberOfColors) {
        const result = [];

        for (let index = 0; index < numberOfColors; index += 1) {
            const colorIndex = randomInt(colors.length);
            const targetColor = colors[colorIndex];
            result.push(targetColor);
        }

        return result;
    };

    console.log('mood(3)', mood(3));
    console.log('mood(3)', mood(3));
    console.log('mood(4)', mood(4));
    console.log('mood(4)', mood(4));

    console.log('');
    console.log('End of Example3');
}


// самовызывающаяся функция
(function () {
    // example1();
    // example2();
    example3();
}) ()

console.log('');
console.log('Bye!');