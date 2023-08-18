/*
// задание 2

function isPositive(num) {
    return num > 0;
  }
  
  function isMale(person) {
    return person.gender === 'male';
  }
  
  function filter(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i])) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  
  console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]
  
  const people = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
  ];
  
  console.log(filter(people, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'}, {name: 'Олег', gender: 'male'}]

  // задание 3


var timerId = setInterval(() => console.log(new Date), 3000);

setTimeout(() => { clearInterval(timerId); alert('30 секунд прошло'); }, 30000);

// задание 4

function delayForSecond(callback) {
    setTimeout(callback, 1000)
}
delayForSecond (function() {
    console.log('Privet, Gleb');
})

// задание 5

function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
				if(cb) { 	cb(); }

    }, 1000)
}
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}
setTimeout(() => {
    return sayHi('Gleb');
}, 2000); delayForSecond();

// задание 1


const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];




 

*/


