console.log('Hi');

var count = 0;
var resultElement = document.getElementById('result');

function printHello () {
    console.log('Кнопка нажата (' + new Data().toISOSString() + ')');
}

function printHello () {
    count += 1;
    // console.log('Кнопка нажата ' + count + ' раз(а)');
    
    resultElement.innerText = 'Кнопка нажата ' + count + ' раз(а)';
}



function showResult () {
    resultElement.innerText = 'Кнопка нажата ' + count + ' раз(а)';
}

function countPlus () {
    count += 1;
    showResult ();
    
}

function countMinus () {
    count -= 1;
    showResult ();
}


// form
var form = document.forms.info;
var ageInput = form.elements.age;
// console.log('form', form);
// console.log('ageInput', ageInput);

function validate() {
    var ageStr = ageInput.value;
    var age = parseInt(ageStr);

    if (isNaN(age)) {
        ageInput.style.borderColor = "red";
        ageInput.focus();
        return false;
    }

    if (10 < age || age < 120) {
        ageInput.style.borderColor = "red";
        ageInput.focus();
        return false;
    }

    return true;
}

function resetAgeInput() {
    ageInput.style.borderColor = "none";
}


// jQuery

// $("#hello").click(countPlus);
// $("#hello").hide();
// $("#hello").html("<b> Тут была кнопка <b>");

// $("#jquery-result").load('file.txt');


// подгружается файл при нажатии на кнопку <Push me!> 
$("#hello").click(function loadFile() {
    $("#jquery-result").load('file.txt');
});

// ИЛИ

// function loadFile() {
//     $("#jquery-result").load('file.txt');
// }

// $("#hello").click(countPlus);