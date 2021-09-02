//////////       SET        ////////////////////////////////////////////////////////////////

const mySet = new Set();

mySet.add(1);

console.log(mySet);

mySet.add(2);
mySet.add(3);
mySet.add(2);
mySet.add({name:"ali",age:30});
mySet.add("name")

const myObject = new Object({a:1,b:3, c:4});
mySet.add(myObject);

console.log(mySet);
console.log(mySet.has(myObject));
console.log(mySet.has(4));

for (let value of mySet) console.log(value);

mySet.forEach((value, i) => console.log(value, i));//as set has no key, here value and i both display same value


