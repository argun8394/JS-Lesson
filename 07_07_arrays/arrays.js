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

const colors = ["Red", "Yellow", "Green", "Blue", "Green", "Red", "Yellow", "Blue"];
const last = colors.lastIndexOf("Blue", -2) // 6 ile de aynı sonucu verir
const last1 = colors.lastIndexOf("Gray") //returns -1
console.log(last1)