
//2.4.1 

let i = 0;

while (i < 2) {
	console.log("привет");
	i++;
}


//2.4.2 

let a = 1;

while (a <=5) {
	console.log(a);
	a++;
}

//2.4.3 

let i = 1;
while (i <= 100) {
  console.log(i);
  i++
};


//2.4.4 

let obj = {'Nikola': 200, 'Vasya':300, 'Petya': 400};

for(key in obj){
    document.write([key]+ ' - Зарплата'+ obj[key]+'долларов'+'<br>');
}


//2.4.5 

let n = 1000, a = 0;
let num = a;
while (n>=50) {
    n = n/2;
    num++;
}
console.log("Итераций: " + num +", получилось число "+ n);

//2.4.6

let friday =5;
let day = friday;
while (day <=31) {console.log("Cегодня пятница, " + day + "-е число. Необходимо подготовить отчет.");
day +=7;
}
