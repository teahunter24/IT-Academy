// строка - это массив букв
var str1 = "какая-то строка";

console.log('Буква 0 это - "' + str1[0] + '"');
console.log('Буква 1 это - "' + str1[1] + '"');
console.log('Буква 2 это - "' + str1[2] + '"');
console.log('Буква 3 это - "' + str1[3] + '"');

console.log("\n");

console.log("строка и for in");
for (var index in str1) {
    console.log('Буква ' + (parseInt(index) + 1) + ' это - "' + str1[index] + '"');
};
console.log('\n');
console.log('\n');
console.log('\n');


// Методы строк, массиов, объектов - встроенные готовые функции, доступные "через точку"
console.log("Методы строк: ");

// .toLowerCase - к нижнему регистру
console.log(str1.toLowerCase());

//.toUpperCase - к верхнему регистру
console.log(".toLowerCase: " + str1.toUpperCase());

// .split - разбиение строки по делителю (сам делитель пропадает)
console.log(".split: " + str1.split('а'));

// .slice - 'срез' достать часть строки (индекс-начала, индекс-окончания-среза)
// вырезаем часть строки с 3 буквы по 10
console.log(".slice: " + str1.slice('3, 10'));

// .replace - заменить часть строки на другую
console.log(".replace: " + str1.replace('а', '3'));

// .charAt - character at - буква на позиции
console.log(".charAt: " + str1.charAt(5));

console.log('\n');
console.log('\n');



// Пример с использованием строк и массивов
console.log("Пример с использованием строк и массивов");
// expression - математическое выражение
var expressionStr = prompt('Введите выражение (вида "a+b"):'); // 5 + 6
var expressionArr = expressionStr.split ('+'); // "5" + "6"
var aStr =  expressionArr[0]; // "5"
var bStr =  expressionArr[1]; // "6"
var a = parseInt(aStr); // 5
var b = parseInt(bStr); // 6
var result = a + b; // 5 + 6 = 11
var min = Math.min(a, b);
var max = Math.max(a, b);
alert('Результат сложения = ' + result + 
'\n' + 'min: ' + min +
'\n' + 'max: ' + max);

console.log('\n');
console.log('\n');


console.log("Метод массивов - примеры: ");
var capitalArray = ["Minsk", "Paris", "Budapest", "London", "Tokyo"];

capitalArray.includes("Paris"); // true включает ли эту строку/число?
console.log(capitalArray.includes("Paris"));
capitalArray.includes("New York"); // false -включает ли эту строку/число?
console.log(capitalArray.includes("New York"));

capitalArray.indexOf("London"); //3 - какой индекс у этого эл-та? вернет либо номер (если есть), либо -1 (если его нет)
console.log(capitalArray.indexOf("London"));
capitalArray.indexOf("New York"); // -1
console.log(capitalArray.indexOf("New York"));

// .join - обратный к .split - объединяет строки через заданный символ/элемент
capitalArray.join("+");


console.log('\n');
console.log('\n');

// Встроенные объекты
console.log('Встроенные объекты');

console.log('Math.PI: ', Math.PI); // 3.14

console.log('Math.sqrt', Math.sqrt(1681)); // 41

console.log('Math.abs', Math.abs(-81)); // bsolute - берет число по модулю

console.log('Math.round', Math.round(14.35)); // round - округлить до целого

console.log('Math.random', Math.random()); // random - случайное число
console.log('Math.random', Math.random());
console.log('Math.random', Math.random());
console.log('Math.random', Math.random());
console.log('Math.random', Math.random());


//функци вывода случайного числа 

//от 0 до end (end - правая строка)
// function getRandomNumber(end) {
//     // (0, 1) * end -> (0, end)
//     return Math.round(Math.random() * end);
// }

//от start до end (start - начало, end - правая граница)
function getRandomNumber(start, end) {
    // неправильно - правая граница, больше чем нужно
    // (0, 1) * end -> (0, end)
    // (0, end) + +start -> (start, end+start)

    // 11 ... 51
    // разница = 51 - 11 = 40
    // генерируем случайное сило до 40
    // Прибавляем к этому сгенерированному числу 11

    // 5 ... 13
    // разница = 13 - 5 = 8
    // генерируем случайное сило до 8: 0,1,2,3,4,5,6,7,8
    // Прибавляем к этому сгенерированному числу 5: 5,6,7,8,9,10,11,12,13
    return Math.round(Math.random() * end) + start;
}


console.log("getRandomNumber(-100,100): " + getRandomNumber(-100,100));
console.log("getRandomNumber(-100,100): " + getRandomNumber(-100,100));
console.log("getRandomNumber(-100,100): " + getRandomNumber(-100,100));
console.log("getRandomNumber(-100,100): " + getRandomNumber(-100,100));
console.log("getRandomNumber(-100,100): " + getRandomNumber(-100,100));
console.log("getRandomNumber(-100,100): " + getRandomNumber(-100,100));

console.log('\n');
console.log('\n');


// Встроенные объекты (String - математика)
// console.log('Встроенные объекты (String - математика):');

// console.log(String([123, 45]);
// console.log(Array([1, 2, 3]);
// console.log(Object([12, 45]);



// Встроенные объекты (Date - дата и время)
console.log('Встроенные объекты (Date - дата и время):');

var now = Date(); // получить сегодня
var yesterday = new Date ("2022-07-01");

console.log("now: ", now);
console.log("yesterday: ", yesterday);
console.log("в этот момент год: ", now.getFullYear());
