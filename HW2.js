let a = 10; //1
alert(a);
a = 20; // добавлено 27.05.23
alert (a); // добавлено 27.05.23

const iphoneStartYear = 2007; //2
alert(`год выпуска 1го айфона ${iphoneStartYear}`);

const JSCreator = 'Брендан Эйх'; //3
alert(`значение имени создателя языка JavaScript ${JSCreator}`)

let d = 10; //4
let e = 2;
alert (d+e);
alert (d-e);
alert (d*e);
alert (d/e);

let f = 2; //5
result = f**5;
alert(result);

let newa = 9; //6
let b = 2;
alert (newa%b)

let num = 1; //7
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

let age;//8
age=prompt ('сколько вам лет?');
alert (age);

const user = { 
	name: 'Костя',
	age: 10, //9.2 изменила возраст с 8 на 10
	isAdmin: true,
}//9.0

user['city of residence'] = String('NY'); //9.1 добавлено свойство 
delete user["city of residence"]; //9.3 удалено свойство
let info; //9.4
info = prompt ('Какую информацию хотите узнать о пользователе?');
console.log(user.name);
console.log(user.age);
console.log(user.isAdmin);
console.log(user['city of residence']);
alert (user[info]) // добавлено 27.05.23

let infO; //10
infO=prompt('как вас зовут?');
alert(`привет, ${infO}!`);
