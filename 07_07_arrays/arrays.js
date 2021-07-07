/*
const cars = ["audi", "opel", "bmw"]
console.log(cars);
console.log(typeof cars);
console.log(cars.length);
*/
/*
const numbers = new Array(2, 10)
console.log(numbers);
*/

/*
const numbers2 = new Array(20)
console.log(numbers2);
*/

/*
const cars = ["audi", "opel", "bmw"]
const cars2 = ["fiat", "ferrari"]

const cars3 = cars.concat(cars2, "mercedes", 2022);
console.log(cars);
console.log(cars2);
console.log(cars3);

console.log(cars + cars2); //bu şekilde string hale gelir
console.log(typeof(cars + cars2));
*/

/*
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b) { return a - b }); //sort fonksiyonu

console.log(points.sort(function(a, b) { return a - b }));

*/
/*
const cars = ["audi", "opel", "bmw"]

cars.push("renault")
console.log(cars);
cars.pop(); //() parametre almaz her zaman sonuncuyu siler
console.log(cars);
*/

//Shift--unshift

/*
const cars = ["audi", "opel", "bmw"]

// const deleted = cars.shift()

// console.log(deleted);

const added = cars.unshift("vw");

console.log(cars);
*/

/*
const cars = ["audi", "opel", "bmw"]
console.log(cars);
cars.push("vw")
console.log(cars);
console.log(cars);
*/

//Splice metodu 
/*
var cars = ["audi", "opel", "bmw"];
var deleted = cars.splice(1, 2, "ford", "bugatti")

console.log("deleted", deleted);
console.log("cars", cars);
*/

/*
var cars = ["audi", "opel", "bmw"];
var deleted = cars.splice(1, 0, "ford", "bugatti")//0 yaparsak silme yapmaz

console.log("deleted", deleted);
console.log("cars", cars);
*/


//Slice metodu
/*
const months = ["jan", "march", "april", "june", "july"];

console.log(months.slice(1, 3));
console.log(months.slice(1, -2));
console.log(months.slice(-4, -2));
console.log(months.slice(-2, -4)); //sola dığru işlem yapmaz [] verir
console.log(months);

console.log(months.reverse());//diziyi tersten yazdırır ve ilk halini değiştirir kalıcı olarak
console.log(months);
*/


//index-lastindex metodu
/*
const colors = ["red", "yellow", "green", "blue", "pink", "green"];
//const x = colors.indexOf("green", 3)
const x = colors.indexOf("gray")//returns  -1


console.log(x);
*/
/* 
const colors = ["Red", "Yellow", "Green", "Blue", "Green", "Red", "Yellow", "Blue"];
const last = colors.lastIndexOf("Blue", -2) // 6 ile de aynı sonucu verir
const last1 = colors.lastIndexOf("Gray") //returns -1
console.log(last1) */

/* 
//Arraylerde durum
function test2(testData) {
    console.log(`inside function before operation ${testData}`);
    //testData = [2, 4, 6, 8];
    //testData.push(8)
    testData.pop()
    console.log(`inside function after operation ${testData}`);
}
const arr = [1, 2, 3, 4];
test2(arr);
console.log(`outside function after operation ${arr}`); */

/* const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(x, typeof x); */

/* const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const [t, u, v, ...others] = arr;
console.log(t, u, v);
console.log(others, Array.isArray(others)); //Array array midir ? cevabını verir
console.log(arr);

console.log(arr instanceof Array);//Array array midir ? cevabını verir */

/* const arr = [1, 2];
const [x = 1, y = 1, z = 1] = arr
console.log(x, y, z); */

//destructuring assignment
/* let x = 5;
let y = 10;

[x, y] = [y, x];
console.log("x=", x, "y=", y); */

/* const colors = ["red", "yellow", "green", "blue", "pink", "green"];

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
} */

/* 
//foreach for in boş elemanları atlar ,,for of ve for atlamaz
const colors = ["red", , "yellow", "green", "blue", "pink", "green"];
console.log(colors);

//for (i of colors) console.log(i);

//for (let i in colors) console.log(colors[i]);
colors.forEach(i => console.log(i)); //içerisine call back function alır */