"use strict";

console.log('Hello!');

function example1() {
    console.log('example1');
    console.log('');

    function calcCircleSquare(r) {
        return 3.14 * r * r;
    }
    console.log('calcCircleSquare(1):', calcCircleSquare(1)); //3.14
    console.log('calcCircleSquare(2):', calcCircleSquare(2)); //12.56
    console.log('calcCircleSquare(3):', calcCircleSquare(3)); //28.26
    // ..
    console.log('calcCircleSquare(-10):', calcCircleSquare(-10));
    console.log('calcCircleSquare(1.45):', calcCircleSquare(1.45));
    console.log('');

    
    function calcTringleleSquare(a, h) {
        return a * h / 2;
    }
    console.log('calcTringleleSquare(1, 2):', calcTringleleSquare(1, 2)); //1
    console.log('calcTringleleSquare(2, 1):', calcTringleleSquare(2, 1)); //1
    console.log('calcTringleleSquare(3.14, 2.7):', calcTringleleSquare(3.14, 2.7)); //4.239
    console.log('calcTringleleSquare(0, -10):', calcTringleleSquare(0, -10)); //0
    console.log('');

    console.log('calcTringleleSquare(21):', calcTringleleSquare(21)); // h = undefined
    console.log('calcTringleleSquare(21, undefined):', calcTringleleSquare(21, undefined)); // NaN
    console.log('calcTringleleSquare():', calcTringleleSquare()); // a = undefined, h = undefined
    console.log('calcTringleleSquare():', calcTringleleSquare(undefined, undefined)); // a = undefined, h = undefined
    // NaN - не число (not a number)
    console.log('');


    function calcTrianglePerimeter (a, b, c) {
        return a + b + c;
    }
    console.log('calcTrianglePerimeter(1, 2, 3):', calcTrianglePerimeter(1, 2, 3)); // 6
    console.log('calcTrianglePerimeter(3, 4, 5):', calcTrianglePerimeter(3, 4, 5)); // 12
    console.log('');


    function calc4Perimeter(a, b, c, d) {
        return a + b + c + d;
    }
    console.log('calc4Perimeter(1, 2, 3, 4):', calc4Perimeter(1, 2, 3, 4)); // 10
    console.log('calc4Perimeter(3, 4, 5, 6):', calc4Perimeter(3, 4, 5, 6)); // 18
    console.log('');


    // вызов функции с произвольным числом аргументов
function calcNPerimeter () {
        arguments; // [10, 20, 30, 40]
        // локальная переменная, доступная внутри всех функций
        // содержит массив переданных аргументов
        

    // arguments (как выглядит массив для компьютера):
    // index   | value
    // 0       |  10
    // 1       |  20
    // 2       |  30
    // 3       |  40

    console.log('функция calcNPerimeter вызвана с аргументами: ', arguments);


    let sum = 0;
    // for - (<часть-инициализация>; <часть-условие>; <часть-итерация>)
    for (let index = 0; index < arguments.length; index += 1) {
        console.log('номер = ', index, 'значение = ', arguments[index]);
        sum = sum + arguments[index];
        console.log('sum =', sum);
    }

    // sum = 0
    // номер = 0; значение = 10
    // sum = 10
    // номер = 1; значение = 20
    // sum = 10 + 20 = 30
    // номер = 2; значение = 30
    // sum = 30 + 30 = 60
    // номер = 3; значение = 40
    // sum = 60 + 40 = 100

    return sum;
}

    console.log('calcNPerimeter(10, 20, 30, 40): ', calcNPerimeter(10, 20, 30, 40));
    console.log('');
    console.log('calcNPerimeter(1, 1, 2, 3, 5, 8, 13, 21): ', calcNPerimeter(1, 1, 2, 3, 5, 8, 13, 21));
    console.log('');






// привер функции с произвольным аргументом (современный подход)
function calcNPerimeterAnother (...rest) {
    console.log('функция calcNPerimeterAnother вызвана с аргументами: ', rest);

    let sum = 0;
    for (let index = 0; index < rest.length; index += 1) {
        sum = sum + rest[index];
    }

    return sum;
}
    console.log('calcNPerimeterAnother(10, 20, 30, 40): ', calcNPerimeterAnother(10, 20, 30, 40));
    console.log('');
    console.log('calcNPerimeterAnother(1, 1, 2, 3, 5, 8, 13, 21): ', calcNPerimeterAnother(1, 1, 2, 3, 5, 8, 13, 21));
    console.log('');






    console.log('end of example1');
}

function example2() {
    console.log('example2');

    
    // неточность вычислений
    console.log('0.1 + 0.2 =', 0.1 + 0.2); // 0.30000
    console.log('0.1 + 0.2 == 0.3', 0.1 + 0.2 == 0.3); // false

    // <число>.toFixed() - привести к дробному числу с n знаков после запятой
    const a = 4.023843835;
    console.log('a.toFixed(1)', a.toFixed(1)); 
    console.log('a.toFixed(2)', a.toFixed(2)); 
    console.log('a.toFixed(3)', a.toFixed(2)); 

    console.log('end of example2');
}

function example3() {
    console.log('example3');

    /* Числа Фибоначи:
    1, 1, 2, 3, 5, 8, 13, 21, ...

    F0 = 1
    F1 = 1
    Fn = Fn-1 + Fn-2

    Решение - функция с одним аргументом

    функция fib(n):
    если n = 0 -> вернуть 1
    если n = 1 -> вернуть 1
    если fib(n-1) + fib(n-2);

    */

    // (!) функция, которая вызывает саму себя - "рекурсия"

    // function fib(n) {
    //     console.log('вызвана функция fib c n', n);
    //     if (n === 0) {
    //         return 1
    //     }
    //     if (n === 1) {
    //         return 1
    //     }
    //     return fib(n - 1) + fib(n - 2)
    // }

    function fib(n) {
        // console.log('вызвана функция fib c n', n);
        if (n === 0 || n === 1) {
            return 1
        }
        return fib(n - 1) + fib(n - 2)
    }

    console.log('fib(3)', fib(3)); // 3 (т.к. 1, 1, 2, [3])
    
    //структура вызова:
    // fib(3) -> fib(2) + fib(1)
    //           fib(2) -> fib(1) + fib(0)
    //                     fib(1) -> 1
    //                              fib(0) -> 1
    //                     fib(1) -> 1




    console.log('fib(5)', fib(5)); // 3 (т.к. 1, 1, 2, 3, 5, [8])

    //структура вызова:
    // fib(5) -> fib(4) + fib(3)
    //           fib(4) -> fib(3) + fib(2)
    //                     fib(3) -> fib(2) + fib(1)
    //                               fib(2) -> fib(1) + fib(0)
    //                                         fib(1) -> 1
    //                                                  fib(0) -> 1
    //                                         fib(1) -> 1
    //                     fib(3) -> fib(2) + fib(1)
    //                               fib(2) -> fib(1) + fib(0)
    //                                         fib(1) -> 1
    //                                                   fib(0) -> 1
    //                                         fib(1) -> 1

    // стэк вызовов

    console.log('fib(10)', fib(10));
    console.log('fib(20)', fib(20));
    // console.log('fib(30)', fib(30));

    console.log('end of example3');
}


function main() {
    // example1();
    // example2();
    example3();
}

main();

console.log('Bye!');