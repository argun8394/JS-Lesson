//////////       SET        ////////////////////////////////////////////////////////////////

// const mySet = new Set();

// mySet.add(1);

// // console.log(mySet);

// mySet.add(2);
// mySet.add(3);
// mySet.add(2);
// mySet.add({name:"ali",age:30});
// mySet.add("name")

// const myObject = new Object({a:1,b:3, c:4});
// mySet.add(myObject);

// // console.log(mySet);
// // console.log(mySet.has(myObject));
// // console.log(mySet.has(4));

// // for (let value of mySet) console.log(value);
// for (let i=0; i<mySet.length; i++) console.log(mySet[i]);

// // mySet.forEach((value, i) => console.log(value, i));//as set has no key, here value and i both display same value



// //***********Array Map Method********************************

// const numbers = [1, 3, 5, 7];
// const squares = numbers.map(number => number * numbers);

// console.log(squares);//// output: Array [1, 9, 25, 49]



//********************************Array Filter Method********************************

const numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

console.log(numbers.filter((number) => !(number%2)));


