// "use strict";

console.log('Hello!');
console.log('');

function example1() {
    console.log('Example1');
    console.log('');

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

    function fibRecursion(n) {
        // console.log('вызвана функция fib c n', n);
        if (n === 0 || n === 1) {
            return 1;
        }
        return fibRecursion(n - 1) + fibRecursion(n - 2)
    }

    // одинаковый интервейс функций - значит, что у 2 функций ожидаются одинаковые аргументы
    // результат может различаться
    function fibArray(n) {
        // console.log('вызвана функция fib c n', n);
        if (n === 0 || n === 1) {
            return 1;
        }

        debugger; // debugger - позволяет "проходиться" по программе так, если бы следующий шаг проходил  этот шаг компьютер

        // Fn = Fn-1 + Fn-2
        const arr = [1, 1];
        for (let index = 2; index <= n; index +=1) {
            const nextFib = arr[index - 1] + arr[index - 2]; 
            // index = 2 --> rr[1] + arr[0] = 1 + 1 = 2
            // index = 3 --> rr[2] + arr[1]
            // index = 4 --> rr[3] + arr[2]
            // index = 5 --> rr[4] + arr[3]
            // ...
            arr.push(nextFib); // <массив>.push(<новый элемент>) - добавить элемент в конец массива
        }

        // arr = [1] - будет ошибка, т.к. arr - это const
        // arr.push - ошибки не будет, т.к. это взаимодействие с массивом

        return arr[n];
    }

    function fibNumbers(n) {
        let a = 1; // a > b
        let b = 1;

        if (n === 0) {
            return b;
        }

        if (n === 1) {
            return a;
        }

        // const a1 = a0 + b0; // 2
        // const b1 = a0; // 1

        // const a2 = a1 + b1; // 2 + 1 = 3
        // const b2 = a1; // 2

        // const a3 = a2 + b2; // 3 + 2 = 5
        // const b3 = a2; //3


        /* 
        An = An-1 + Bn-1
        Bn = An-1
        */

        for (let index = 2; index <= n; index +=1) {
            // [a, b] = [a + b, a];
            const nextA = a + b;
            const nextB = a;
            a = nextA;
            b = nextB;
        }

        return a;
    }

    // if (fibRecursion(10) !== 89) {
    //     console.log('тест не прошёл');
    // }

    console.log('Check fib:');
    console.log('Fib #3 = ', fibRecursion(3), fibArray(3), fibNumbers(3));
    console.log('Fib #5 = ', fibRecursion(5), fibArray(5), fibNumbers(5));
    console.log('Fib #10 = ', fibRecursion(10), fibArray(10), fibNumbers(10));
    console.log('Fib #20 = ', fibRecursion(20), fibArray(20), fibNumbers(30));
    console.log('Fib #30 = ', fibRecursion(30), fibArray(30), fibNumbers(30));
    console.log('Fib #1000 = ', fibArray(1000), fibNumbers(1000));

    console.log('End of Example1');
}



function example2() {
    console.log('Example2');
    console.log('');
    
    // "не чистые функции"
    // "не чистые функции" - используют "зависимость из вне"
    
    const arr = [];

    // "не чистая функция" - использует "зависимость из вне"
    function someF1() {
        arr.push(1);
    }

    // someF1();
    // if (arr.length !==1) {
    //     // если нет, то не работает
    // }

    // "не чистая функция" - выводит в консоль
    function someF2() {
        add1;
        for (let index = 2; index <= 1000; index +=1) {
            console.log(index); 
        }
    }

    // "не чистая функция" - возвращает разные значения при одинаковых входных данных
    function someF3() {
        return n * Math.random();
    }

    // (0, 100)
    if (someF3(2) < 1)

    // "чистая функция" 
    function someF4(arr) {
        if (Array.isArray(arr)) { // если был перелан массив - вернет его длину
        return arr.length;
    }
    return null;
    }

    add1();
    console.log('arr', arr); // [1]
    add1();
    console.log('arr', arr); // [1, 1]

    console.log('End of Example2');
}



function example3() {
    console.log('Example3 - замыкание');
    console.log('замыкание');

    // замыкание
    
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
    gen1000(1);  // inner 1001
    gen1000(100); // inner 1100

    const gen5 = generation(5);
    gen5(1); // inner 6
    gen5(2); // inner 7
    gen5(1);  // inner 6
    gen5(100); // inner 105



    function generateFib(start) {
        const arr = [];
        const inner = function() {
            if (arr.length < 2) {
            arr.push(1);
            return 1;
            }

            const index = arr.length;
            const nextFib = arr[index - 1] + arr[index - 2];
            arr.push(nextFib);
            return nextFib

            //то же самое, что и выше, но меньше строк (хотя и сложнее код)
            // arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
            // return arr[arr.length - 1];
        }

        return inner;
    }

    // debugger;
    const fib1 = generateFib();
    console.log('fib1() =', fib1()); // 1
    console.log('fib1() =', fib1()); // 1
    console.log('fib1() =', fib1()); // 2
    console.log('fib1() =', fib1()); // 3
    console.log('fib1() =', fib1()); // 5
    console.log('fib1() =', fib1()); // 8

    const fib2 = generateFib();
    console.log('fib2() = ', fib2()); // 1
    console.log('fib2() = ', fib2()); // 1
    console.log('fib2() = ', fib2()); // 2
    console.log('fib1() = ', fib1()); // 13, т.к. внутри fib1 и fib2 - разные "замкнутые" массивы
    console.log('fib2() = ', fib2()); // 3
    console.log('fib2() = ', fib2()); // 5
    console.log('fib2() = ', fib2()); // 8

    console.log('');
    console.log('End of Example3');
}


function main() {
    // example1();
    // example2();
    example3();
}

main();

console.log('');
console.log('Bye!');