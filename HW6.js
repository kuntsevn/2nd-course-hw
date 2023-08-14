
//задание 6.1

const numbs = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbs.length; i++) {
	if (numbs[i] == 10) break;
	console.log(numbs[i]); // 1,5,4
}

//задание 6.2

let numbers = [1, 5, 4, 10, 0, 3];
console.log(numbers.indexOf(4));  //2

//задание 6.3

let numbs = [1, 3, 5, 10, 20];
numbs = numbs.join('  ');
console.log(numbs); // 1 3 5 10 20

//задание 6.4

const arr = [[1, 1, 1], [1, 1, 1], [1, 1, 1]];
const outPutArr = [];
for (const inArr of arr) {
    const newArray = [];
    for (const element of inArr) {
        newArray.push(element);
    }
    outPutArr.push(newArray);
}
console.log(outPutArr);

//задание 6.5

let numbs = [1, 1, 1];
let numbs2 = [2, 2, 2];
let numbs3 =numbs.concat(numbs2);
console.log(numbs3);

//задание 6.6

let arr = [9, 8, 7, 'a', 6, 5];
arr.sort();
arr.pop();
console.log(arr);

//задание 6.7

const arr = [9, 8, 7, 6, 5];
let number = prompt('Введите число от 1 до 10');

if (arr.includes(parseInt(number))) {
alert("угадал");
} else {
alert("не угадал");
}

//задание 6.8

let smth = 'abcdef';
let arrSmth = smth.split('');
arrSmth.reverse ();
arrSmth = arrSmth.join('');
console.log(arrSmth);

//задание 6.9

const arr = [[1, 2, 3,],[4, 5, 6]];
const arr1 = arr.flat();
console.log(arr1);

//задание 6.10

let random = [4, 7, 1, 3];
for (let i = 0; i < (random.length -1); i++) {
    console.log(random[i] + random[i+1])
};
console.log(random[(random.length -1)]);

//задание 6.11

let random = [4, 7, 1, 3];
let result = random.map(item => (item **2));
console.log(result);

//задание 6.12

const str = ['бам','бум','бааах','бух'];
const getLength = source => source.map (str => str.length);
console.log(getLength(['бам','бум','бааах','бух']));


//задание 6.13

function filterPositive(array) {

const filterPositive = (array) => array.filter(value => value < 0);

var positives = filterPositive (array);

console.log(positives);}

filterPositive([-1, 0, 5, -10, 56]); // => [-1, -10]
filterPositive([-25, 25, 0, -1000, -2]); // => [-25, -1000, -2]

//задание 6.14

let evenNumbers = [];
for(i = 0; i < 10; i++) {
    evenNumbers[i] = Math.floor(Math.random() * 10);
}
console.log(evenNumbers);
console.log(evenNumbers.filter(i => i % 2 === 0));