
//Задание 2.5.1
/
function min(a, b) { return a <= b? a : b; }
var x = 8, y = 4, m;
m = min(x, y);
console.log(m);

function min(a, b) { return a <= b? a : b; }
var x = 6, y = 6, m;
m = min(x, y);
console.log(m);



//Задание 2.5.2



function even_or_odd(number) {
    return number % 2 === 0 ? "even" : "odd"
}

console.log(even_or_odd(3));
console.log(even_or_odd(2));



//Задание 2.5.3

// 3.1

function square(num) {
return num * num;
}
 let num = 5;
 console.log(square(num));

// 3.2


 function square(numb) {
    return numb * numb;
    }

    let numb = 4;

    alert (square(numb))


   //Задание 2.5.4 


let age = prompt("Сколько вам лет?");

if (age < 0){
        function printMessage() {
	    console.log('Вы ввели неправильное значение');
    } 
}else {
	if (age > 0 & age < 13){
        function printMessage() {
    console.log('Привет, друг!');
    } 
}else 
    {
        function printMessage() {
    console.log('Добро пожаловать!');
}
    }
}

printMessage()


   //Задание 2.5.5


   let x  = prompt('введите значение');
   let y  = prompt('введите значение');

   function mult(х,y) {
   return isNaN(x) || isNaN(y)=== true ? console.log('одно или оба значения не являются числом') : console.log(x*y);
    }

mult (x,y)


//Задание 2.5.6

let x  = prompt('введите значение');


function thirdDegree(х) {
return isNaN(x) === true ? console.log('не является числом') : console.log(x*x*x);
 }
 thirdDegree (x);



 //Задание 2.5.7


const circle1 = {
	radius: 12,
    getPerimeter: function () {
        console.log(Math.PI*circle1.radius*2)},
    getArea: function () {
        console.log(Math.PI*circle1.radius*circle1.radius)},
 }
 circle1.getArea ();
 circle1.getPerimeter ();

 const circle2 = {
	radius: 102,
    getPerimeter: function () {
        console.log(Math.PI*circle2.radius*2)},
    getArea: function () {
        console.log(Math.PI*circle2.radius*circle2.radius)},
 }
 circle2.getArea ();
 circle2.getPerimeter ();
