
console.log('Проверка на "присутсвие":');
var capitalObject = {"Belarus": "Minsk", "Great Britain": "London"};

console.log('пытаемся получить значение по ключу:');
capitalObject["Japan"] // undefined

// но мы хотим видеть true или false
console.log('Используем оператор in:');
console.log('"Belarus" in capitalObject:' + ("Belarus" in capitalObject)); // true
console.log('"Great Britain" in capitalObject: ' + ("Great Britain" in capitalObject)); // true
console.log('"Japan" in capitalObject: ' + ("Japan" in capitalObject)); // false