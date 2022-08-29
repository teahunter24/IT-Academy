"use strict";

console.log('Hello!');

function inputOutputExample1 () {
    const alertResult = alert('alert!');
    const promptResult1 = prompt('promprt!');
    const promptResult2 = prompt('promprt!', 'default!');
    const confirmResult = confirm('confirm!');

    console.log('alertResult!:', alertResult);
    console.log('promptResult1:', promptResult1);
    console.log('promptResult2:', promptResult2);
    console.log('confirmResult:', confirmResult);
}

function inputOutputExample2 () {
    // const alertResult = alert('alert!');
    // const promptResult1 = prompt('promprt!');
    // const promptResult2 = prompt('promprt!', 'default!');
    // const confirmResult = confirm('confirm!');

    console.log('alertResult!:', alert('alert!'));
    console.log('promptResult1:', prompt('promprt!'));
    console.log('promptResult2:', prompt('promprt!', 'default!'));
    console.log('confirmResult:', confirm('confirm!'));
}

function example1() {
    console.log('example1');

    inputOutputExample1 ();
    
    console.log('');
    console.log('call2');
    console.log('');
    
    inputOutputExample2 ();
    console.log('end of example1');
}

function example2() {
    console.log('example2');

    const a = 32;
    const b = 10;
    console.log('a =', a);
    console.log('b =', b);
    console.log('a + b:', a + b); //42
    console.log('a - b:', a - b); //22
    console.log('a * b:', a * b); //320
    console.log('a / b:', a / b); //3.2
    console.log('a % b:', a % b); //2

    console.log('---'); 

    console.log('b + a:', b + a); //42
    console.log('b - a:', b - a); //-22
    console.log('b * a:', b * a); //320
    console.log('b / a:', b / a); //0.3125
    console.log('b % a:', b % a); //10 (10 =  0*32 + 10)

    console.log('');
    console.log('');

    //parseInt - перевод строк в числа
    //parseInt(stcing, radix), где radix - разрядность исходной системы

    console.log('bin 0b1101 =', 0b1101); //13 = 1*2^3 + 1*2^2 + 0*2^1 + 1*2^0
    console.log('bin 0b1010 =', 0b1010); // 10 (8 + 2)
    console.log('oct 010 =', parseInt('010', 8)); //8
    console.log('oct 071 =', parseInt('071', 8)); //57
    console.log('hex 0x1F =', 0x1F); //31
    console.log('hex 0xFF =', 0xFF); //255


    console.log('end of example2');
}

function example3() {
    console.log('example3');

    //  AND, OR, NOT

    // if (условие 1 И условие2) {} --> AND
    // if (условие 1 ИЛИ условие2) {} --> OR
    // if (НЕ условие 1 ИЛИ условие2) {} --> NOT

    console.log('');
    console.log('AND');
    console.log('Логическое И "true && true)"', true && true); //true
    console.log('Логическое И "true && false"', true && false); //false
    console.log('Логическое И "false && true"', false && true); //false
    console.log('Логическое И "false && false"', false && false);//false

    console.log('');
    console.log('OR');
    console.log('Логическое ИЛИ "true || true)"', true || true); //true
    console.log('Логическое ИЛИ "true || false"', true || false); //true
    console.log('Логическое ИЛИ "false || true"', false || true); //true
    console.log('Логическое ИЛИ "false || false"', false || false);//false

    console.log('');
    console.log('NOT');
    console.log('Логическое НЕ "!true"', !true); //false
    console.log('Логическое НЕ "!false"', !false); //true

    
    console.log('end of example3');
}


function example4() {
    console.log('example4');

    const lastName = prompt('Введите фамилию?!');
    const firstName = prompt('Введите имя?!');
    const midName = prompt('Введите отчество ?');

    const ageStr = prompt('Введите возраст?!'); //будет строка
    const age = parseInt(ageStr); 

    const sex = confirm('Ваш пол мужской?');
    let (sex) {
        sexName = 'мужской'; //63
    } else {
        sexName = 'женский'; //58
    }

    let retried = 'нет';
    if (sex && age > 63) {
        retried = 'да';
    }
    if (!sex && age > 58) {
        retried = 'да';
    }

    // или так:
    // if (sex && age > 63) || (!sex && age > 58) {
    //     retried = 'да';
    // }


    const result = 'Ваше ФИО: ' + lastName + " " + firstName + " " + midName + "\n" +     
    + 'Ваш возраст в годах: ' + ${age} 
    ваш возраст в днях: ${age * 365} 
    через 5 лет вам будет: ${(age + 5) * 365} 
    + 'ваш пол: ' + sexName} + "\n" + 
    + 'вы на пенсии:' + retried;

    console.log('end of example4');
}

function main() {
    // example1();
    // example2();
    // example3();
    example4();
}

main();

console.log('Bye!');