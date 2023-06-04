//2.3.1 
const password = '0000';
let inputPassword = prompt('введите пароль');
inputPassword === password ? console.log('пароль введен верно') : console.log('неверно, введите пароль');
// console.log(inputPassword === password ? 'пароль введен верно' : 'неверно, введите пароль')
//2.3.2
let c = prompt('введите любое число'); // скрипт проверен со значениями переменной c, равной 0, 10, 3, 2.
if (c > 0 && c < 10) {
    console.log('верно');
} else {
    console.log('неверно');
}

//2.3.3
let d = prompt('введите любое число');
let e = prompt('введите любое число');
if (d > 100 || e > 100) {
    console.log('верно');
} else {
    console.log('неверно');
}

//2.3.4
let a = '2';
let b = '3';
alert(a * 1 + b * 1);


//2.3.5
let monthNumber = Number(prompt('введите номер месяца'));
switch (monthNumber) {
    case 12:
    case 1:
    case 2:
        console.log('зима');

        break;
    case 3:
    case 4:
    case 5:
        console.log('весна');

        break;
    case 6:
    case 7:
    case 8:
        console.log('лето');

        break;
    case 9:
    case 10:
    case 11:
        console.log('осень');

        break;
    default:
        console.log('ошибка, номер месяца должен быть от 1 до 12');
        break;
}

//2.3.6 
//адаптивная версия сайта 

//2.3.7
let f = prompt('введите число');
isNaN(f) === false ? (f % 2 === 0 ? alert('четное') : alert('нечетное')) : alert('NAN');

//2.3.8
let clientOS_ = Number(prompt('введите 0 (для iOS) или 1 (для Android)'));
switch (clientOS_) {
    case 0:
        console.log('Установите версию приложения для iOS по ссылке');
        break;
    case 1:
        console.log('Установите версию приложения для Android по ссылке');
        break;
    default:
        console.log('ошибка, введите 0 или 1')
        break;
}

//2.3.9
let clientOS = Number(prompt('введите 0 (для iOS) или 1 (для Android)'));
const DeviceYear = 2015;
let clientDeviceYear = Number(prompt('Введите год выпуска вашей модели устройства в формате гггг'));
switch (clientOS) {
    case 0:
        clientDeviceYear >= DeviceYear ?
            alert('Установите версию приложения для iOS по ссылке') :
            alert('Установите облегченную версию приложения для iOS по ссылке');
        break;
    case 1:
        clientDeviceYear >= DeviceYear ?
            alert('Установите версию приложения для Android по ссылке') :
            alert('Установите облегченную версию приложения для Android по ссылке');
        break;
    default:
        alert('ошибка, введите 0 или 1')
        break
}