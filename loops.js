// 1- WHİLE LOOPS
/*
let i = 0,
    sum = 0;

while (i < 6) {
    sum = sum + i;
    console.log(i);
    i++;
}

console.log(`total is : ${sum}`);
*/

//2- DO_WHİLE
/*
let i = 3,
    sum = 0;
do {
    sum += i;
    i++;

} while (i < 5);
console.log(sum);
*/

//3-FOR STATEMENT
/*
for (let i = 0; i < 8; i++) {
    console.log("i =", i);

}
*/
/*
let i = 0;
for (; i < 8;) {
    console.log("i =", i);
    i++
}
*/
/*
let counter = 0;

for (let i = 0; i <= 50; i++) {
    //console.log("i",i);
    counter += i;

}
console.log(counter);
*/
/*
let counter = 0;

for (i = 0; i <= 50; i++) {
    //console.log("i",i);

    i % 10 === 0 ? (counter += i) : null;

}
console.log(counter);
*/

/*
let brand = "Clarusway";

for (let i = 0; i < brand.length; i++) {
    console.log(i, brand[i], brand.length - i, brand[brand.length - i - 1]);

}
*/
/*
let brand = "Clarusway";

for (let i = 0, j = brand.length; i < brand.length; i++, j--) {
    console.log(i + 1, brand[i], j, brand[j - 1]);

}
*/

/*
let bests = ["Clarusway", "Google", "Amazon", "Tesla"];

for (let i = 0; i < bests.length; i++) {
    console.log(i + 1, ":", bests[i]);
}
*/

/*
let i = 0;
while (i < 10) {

    if (i === 6) { break; }
    console.log(i);
    i++;
}
*/
/*
let i = 0;
while (i < 10) {

    if (!(i % 3 === 0)) { console.log(i); }

    i++;
}
*/
/*
let i = 0;
while (i < 10) {
    i++;
    if (i % 3 === 0) { continue; }
    console.log(i);

}
*/

/*
let i = 0;
for (i = 0; i < 7; i++) {
    if (i === 2 || i === 4) {
        continue;
    }
    console.log(i);
}
*/

/*
let text = "Clarusway";
for (i = 0; i < text.length; i++) {
    console.log(text[text.length - (i + 1)]);
}
*/

/*
let text = "Clarusway";
for (i = 0; i < text.length; i++) {

    console.log(text[text.length - (i + 1)]);
}
*/