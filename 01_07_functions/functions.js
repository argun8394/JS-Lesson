/*
function hello() {
    console.log("Hello World");
}

hello()

*/
/*
function sum(a, b) {
    console.log(a + b);
}

sum(12, 3)
*/
/*
function sum(a, b) {
    return (a + b);
}
/*
sum(12, 3) //sonucu göremedik return ü yakala
let toplam = sum(12, 3)
console.log("result : ", toplam);
*/

//console.log(sum(12, 3));

//console.log(sum(12, 3) + 5);

/*
function sum(a, b) {
    return ("selam");
}
console.log(typeof sum());
*/

/*
function sum() {
    console.log("selam");
}
console.log(typeof sum());
*/
/*
function addTwo(number) {
    return +number + 2 //+ ile gelen stringi number yapıyoruz
}

console.log(addTwo("6"));
*/
/*
function selam(name) {
    console.log(`Merhaba ${name}`);
}
selam("Mark")
selam("Edward")
selam("Veli")

//Dry don't repeat Yourself
*/
/*
selam("Mark")
selam("Edward")


function selam(name) {
    console.log(`Merhaba ${name}`);
}
*/
/*
function selam(name = "New User") {
    console.log(`Merhaba ${name}`);
}
selam()
*/
/*
function sayHi(myName) {
    console.log(`Hello ${myName}`);
    myName = "Ed"
    console.log(`Hello ${myName}`);
}

let myName = "Mark";
sayHi(myName)
console.log("outsde funton", myName);
*/
/*
//içerdeki değişiklikler objeleri etkiler
let student = {};
student.name = "Mark"

function sayHi2(student) {
    console.log(`Hello ${student.name} entry point`);
    student.name = "john";
    console.log(`Hello ${student.name} first point`);
    student = { name: "Leon" };
    console.log(`Hello ${student.name} inside function`);
}
sayHi2(student)
console.log(`Hello ${student.name} from outside`);
*/
/*
function div(num1, num2) {
    //console.log(num1 / num2);
    if (num2 === 0) {
        console.log("Zero Division Error");

    } else {
        console.log(num1 / num2);
    }
}

div(10, 2);
*/

/*
function div2(num1, num2) {
    return num2 ? num1 / num2 : "zero division"
}
console.log(div2(18, 0)); 
*/
/*
function sum(a, b, ...args) {
    console.log(arguments);
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i]
    }
    return (total)
}

console.log(sum(1, 2, 3, 4, 5, 20, 30));
*/
/*
function sum2(a, b, ...args) {
    console.log(args);
    console.log(arguments);
    return a + b
}
console.log(sum2(1, 2, 3, 4, 5));
*/
/*
function sayHi1() {
    return "hello from sayi1"
}
console.log(sayHi1());

const sayHi2 = function greet() {
    return "hello from sayi2"
}
console.log(sayHi2());

//console.log(greet()); //sayHi2 ye atandığı için greet ile çağıramayız
*/

/*
//recursive fonk -kendi kenini çağıran fonk
const pascalNumber = function(n) {
    return (n * (n + 1) / 2)
}
console.log(pascalNumber(4));

*/

/*
//kendini çağırma işlemi
const pascalNumber = function total(n) {
    if (n === 1) return 1;
    return n + total(n - 1)
}
console.log(pascalNumber(4));
console.log(typeof pascalNumber);
*/

//immediatly invoked function expression --- anında çlıştırılan fonk---2.kez çağrılamaz
/*
let result = (function triangle(num) {
    if (num === 1) return 1;
    return num + triangle(num - 1);
})(6);
console.log(result);
*/
/*
(function(n) {
    var sum = 0;
    while (n >= 0) {
        sum += n;
        n--;
    }
    console.log("result : ", sum);
}(4))
*/