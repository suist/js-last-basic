"use strict";
//Array

//1. Declaration

const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position

const fruits = ["🍎", "🍌"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length - 1]); // last index

//3. Looping over an array

// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// c.forEach
fruits.forEach(function (fruit, index, array) {
  console.log(fruit, index, array);
});

fruits.forEach((fruit, index) => console.log(fruit, index));

//4. Addition, deletion, copy
//push : add an item to the end
fruits.push("🍓", "🍍");

//pop : remove an item from the end
fruits.pop();

//unshift : add an item from the beginning

//shift : remove an item from the beginning
fruits.shift();

//note!! shift,unshift are slower than app,push -> should move others items

//splice: remove an item by index position
fruits.splice(1, 1);
fruits.splice(1, 1, "🍠", "🍊");

//combine two arrays
const fruits2 = ["🍠", "🍊"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// find the index

console.clear();
console.log(fruits);

console.log(fruits.indexOf("🍠")); // is not exist -> -1
console.log(fruits.includes("🍠")); // true , false

//lastIndexOf
fruits.push("🍎");
console.log(fruits.indexOf("🍎"));
console.log(fruits.lastIndexOf("🍎"));
