// "use strict";

console.log('Hello!');
console.log('');

const example1 = function() {
    console.log('Example1');
    console.log('');

    // const calcCircleSquare = function (R) {
    //     return 3.14 * R * R;
    // }

    // стрелочная функция | arrow-function | lambda-function
    const calcCircleSquare1 = (R) => 3.14 * R * R;

    // стрелочная функция с телом
    const calcCircleSquare2 = (R) => {
        return 3.14 * R * R
    }

    console.log('---');
    // псевдо-пример - использование функций, как аргументов:
    // [1, 2, 3, 4, 5].find(<функция>);
    // [1, 2, 3, 4, 5].findIndex(<функция>);
    // [1, 2, 3, 4, 5].filter(<функция>);
    // [1, 2, 3, 4, 5].map(<функция>);
    // <функция> - можно использовать какое-то имя функции, объявленной ранее,   
    // либо - сразу стрелочную функцию
    // [1, 2, 3, 4, 5].filter((R) => R > 4);
    // [1, 2, 3, 4, 5].map(calcCircleSquare);
    
    console.log('Массивы: ');
    // массив:
    // index   | value
    // 0       |  10
    // 1       |  20
    // 2       |  30
    // 3       |  40

    const arr1 = [1, 2, "str", null, [1, 2, 100], []];
    console.log('arr1', arr1);

    console.log('arr1[2] ', arr1[2]); // "str"
    console.log('arr1[10] ', arr1[2]); // undefined
    console.log('arr1.length ', arr1.length); // 6
    // получить часть массива (новый массив)
    console.log('arr1.slice(1, 3) ', arr1.slice(1, 3)); 
    // вернёт элемент, подхлдящий под условие
    console.log('arr1.find((item) => typeof item === "str") ', arr1.find((item) => typeof item === "str")); 
    // формирует новый массив, используя фильтрующую функцию
    console.log('arr1.filter((item) => Array.isArray(item)) ', arr1.filter((item) => Array.isArray(item))); 
    // преобразование каждого элемента массива по функции-правилу, не изменяет старый массив, возвращает новый
    console.log('arr1.map((item) => item * 2) ', arr1.map((item) => item * 2)); 
    // сложные индексы
    console.log('arr1 [4][2] ', arr1 [4][2]); // 100

    // удаление элемента под индексом 2 из массива (будут "проблемы" с console.log)
    // delete arr1[2];
    // arr1[2]; // undefined

    // const newArr = arr1[4];
    // newArr[1]; // 2
    // newArr[2]; // 100

    // Array.isArray(<переменная>) - если переменная - это массив - возвращает true, иначе - false
    Array.isArray([]); // true
    Array.isArray([1, 2, 4]); // true
    Array.isArray(1); // false
    Array.isArray("str"); // false
    Array.isArray(null); // false

    // typeof <переменная> - возвращает тип переменной ("string", "number", "null", "undefined", "function", "object")
    typeof 1; // number
    typeof "1"; // string
    typeof [1]; // object (!)
    typeof (() => {}); // function

    // debugger;
    const arr2 = [];
    arr2.push('start'); // .push(<что-то>) - добавить что-то в конец массива
    arr2.push('next'); 
    arr2.push('end'); 

    const last1 = arr2.pop(); // достать последний элемент из массива

    arr2.unshift('new-atrt-1'); // .unshift(<что-то>) - добавить что-то в начало массива
    arr2.unshift('new-atrt-2'); 
    const last2 = arr2.shift(); // .shift() - достать первый элемент из массива

    const mergedArray = arr2.concat([1, 2, 3]); // .concat() - возвращает новый массив из 2 других

    // mergedArray.includes();
    // mergedArray.fill();
    // mergedArray.forEach();
    // mergedArray.reduce();



    console.log('Хэши: ');
    // хэш:
    // key     | value
    // ------  | ------
    // "hi"    |  "Привет"
    // "hello" |  "Привет"
    // "Bay"   |  "Пока"

    const emptyHash = {}; // пустой хэш

    // объявлем хэш со значениями
    const populatedHash = {
        hi: "Привет",
        "hello": "Привет",
        "Bay": "Пока",
        number: 123,
        number1: 23,
        a: [], // можно в качестве значения использовать массив
        h: {}, // и хэш
        // ...
    }; 

    const line = {
        start: {
            x: 11,
            y: 12,
        },
        end: {
            x: 21,
            y: 22,
        }
    };

    console.log("populatedHash ", populatedHash);
    console.log('populatedHash["hi"] ', populatedHash["hi"]); // Привет
    console.log('populatedHash["number"] ', populatedHash["number"]); // 123
    console.log('populatedHash.hi ', populatedHash.hi); // Привет
    console.log('populatedHash.number ', populatedHash.number); // 123

    // const sratPoint = line.start;
    // const sratPointX = line.start.x;

    // можно использовать "цепочку обращений"
    console.log('line', line); // неактуальное занчение, смотреть через debugger
    console.log("line.start.x", line.start.x); // 11
    console.log("line.end.x", line.end.x); // 22


    // debugger;

    //изменить существующие данные
    line.start.y = 100000;
    // line.start["y"] = 100000; // то же самое

    //добавление новых данных
    line.start.z = 300000;
    // line.start["z"] = 300000; // то же самое

    //удаление свойства хэша
    delete line.start.z;
    // line.start.z = undefined; // почти то же самое

    line.start.options = {
        system: "dec",
        pol: "+",
        char: [1, 2, 3, 4],
    };


    console.log('');
    console.log('Ссылки: ');

    const a0 = 10;
    const b0 = 10;
    console.log('a0', a0, 'b0', b0);
    console.log('a0 === b0', a0 === b0); // true

    const a1 = [];
    const b1 = [];
    console.log('a1', a1, 'b1', b1);
    console.log('a1 === b1', a1 === b1); // false

    const a2 = {};
    const b2 = {};
    console.log('a2', a2, 'b2', b2);
    console.log('a2 === b2', a2 === b2); // false

    console.log('-----');
    console.log('"делим ссылку" на объект между несколькими переменными: ');
    const a3 = [];
    const b3 = a3;
    console.log('a3', a3, 'b3', b3);
    console.log('a3 === b3', a3 === b3); // true

    const a4 = {};
    const b4 = a4;
    console.log('a4', a4, 'b4', b4);
    console.log('a4 === b4', a4 === b4); // true

    console.log('-----');
    console.log('но эти перемнные теперь связаны между собой: ');
    console.log('a3.push(1) ', a3.push(1));
    console.log('b3 ', b3);
    console.log('a4.name = "name") ', a4.name = "name");
    console.log('b4 ', b4);

    console.log('');
    console.log('End of Example1');
}



function example2() {
    console.log('Example2');
    console.log('');
    
    const text = 'истоки рок-музыки лежат в блюзе из которого и вышли первые рок-жанры рок-н-ролл и рокабилли первые поджанры рок-музыки возникали в тесной связи с народной и эстрадной музыкой того времени в первую очередь это фолк кантри скиффл мюзик-холл за время существования рок-музыки её пытались соединить практически со всеми возможными жанрами музыки с академической музыкой арт-рок появился в конце 60-х и более поздний симфо-метал джазом джаз-рок появился в конце 60-х начале 70-х латинской музыкой латино-рок появился в конце 60-х индийской музыкой рага-рок появился в середине 60-х в 60—70-х появились практически все крупнейшие поджанры рок-музыки более важные из них кроме перечисленных хард-рок панк-рок рок-авангард в конце 70-х начале 80-х появились такие жанры рок-музыки как постпанк новая волна альтернативный рок но в конце 60-х появились ранние представители этого направления хардкор крупный поджанр панк-рока в 70-е сформировалась крупная и самостоятельная ветвь рока метал сперва классический хэви-метал в 80-е более тяжёлые и радикальные жанры трэш дэт блэк а в 90-е смеси метала с другими жанрами симфо фолк готик прог в 90-х получили широкое развитие жанры гранж появился в середине 80-х брит-поп появился в середине 60-х альтернативный метал появился в конце 80-х';

    const words = text.split(' '); // <строка>.split(<разделитель>) - возвращает массив, разбив строку по разделителям

    console.log('words: ', words); // ["истоки", "рок-музыки", "лежат", ..., "80-х"]

    const wordsLength = words.map((word) => word.length);
    console.log('wordsLength: ', wordsLength);
    
    const dictionary = {};
    // for (const word of words) {
    //     dictionary[word] = 0;
    // }

    // for (const word of words) {
    //     dictionary[word] += 1;
    // }
    for (const word of words) {
        if (dictionary[word]) {
            dictionary[word] += 1
        } else {
            dictionary[word] = 1;
        }
    }

    console.log(dictionary);

    // слова, встречаемые в тексте > 1 раза
    // const notUnique = {};
    // for (const word of words) {
    //     if (dictionary[word] > 1) {
    //         notUnique[word] = dictionary[word];
    //     }
    // }
    // console.log('notUnique: ', notUnique);

    console.log('');
    console.log('End of Example2');
}



function example3() {
    console.log('Example3');
    console.log('');
    
    console.log('End of Example3');
}

// самовызывающаяся функция (IIFE - Immediately-invoked Function Expression)
(function () {
    // example1();
    example2();
    // example3();
})()

console.log('');
console.log('Bye!');