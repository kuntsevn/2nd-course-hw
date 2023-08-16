// задание 7.1
/*
let str = 'строка';
str = str.toUpperCase();
console.log(str);

// задание 7.2

function arrAndStr(arr, str) {
    let newArr = [];
    arr.forEach((el) => {
        if (el.toLowerCase().startsWith(str.toLowerCase())) {
            newArr.push(el);
        }
    })
    console.log(newArr);
}

arrAndStr(['Дом', 'Банк', 'Больница', 'Театр'], 'Б');

// задание 7.3

let number = 32.58884
Math.floor (number);
Math.ceil (number);
Math.round (number);
console.log(Math.floor(number), Math.ceil(number), Math.round(number));


// задание 7.4

console.log(Math.min(52, 53, 49, 77, 21, 32), Math.max(52, 53, 49, 77, 21, 32));


// задание 7.5

function getRandomInt(minValue, maxValue) {
    return Math.round(Math.random()*(maxValue-minValue))+minValue
}
console.log(getRandomInt (1, 10));

// задание 7.6

function getRandomArrNumbers(num) {
    return (Array.from({length: num / 2}, () => Math.round(Math.random() * num)));  
}
console.log(getRandomArrNumbers(4));

// задание 7.7

function getRandomInt(minValue, maxValue) {
    return Math.round(Math.random()*(maxValue-minValue))+minValue
}
console.log(getRandomInt (6, 10));


// задание 7.8

var now = new Date();
console.log( now );

// задание 7.9

let date = new Date();
date.setDate(date.getDate() + 73);

alert( date ); // 27/10/23

// задание 7.10

const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

let myDate = new Date(); 
let fullDate = "Сегодняшняя дата: " + myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() + ", " + days[myDate.getDay()] + ", " + myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds();

console.log(fullDate);

// задание 7.11

// макет обновлен и функция к макету
*/
function getJS() {
let gameTwo = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
gameTwo = gameTwo.sort(() => Math.random() - 0.5);
alert(gameTwo);
let firstQuestion = prompt("Чему равнялся первый элемент массива?");
let secondQuestion = prompt("Чему равнялся последний элемент массива?");
if (gameTwo[0].toLowerCase() === firstQuestion.toLowerCase() && gameTwo[6].toLowerCase() === secondQuestion.toLowerCase()) {
    alert('Поздравляем, вы ответили верно');
 } else if(gameTwo[0].toLowerCase() === firstQuestion.toLowerCase() && gameTwo[6].toLowerCase() !== secondQuestion.toLowerCase() || gameTwo[0].toLowerCase() !== firstQuestion.toLowerCase() && gameTwo[6].toLowerCase() === secondQuestion.toLowerCase()) {
   alert('Один правильный ответ из двух - вы были близки к победе');
 } else {
    alert('К сожалению вы ответили не верно');
 }

}
getJS()