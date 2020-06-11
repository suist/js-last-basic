"use strict";
//Object !
//one of the js data types.
// a collection of related date and /or functionality.
//nearly all objects in js are instances of Object
//object = {key : value };

//dynamically typed language

//1. Literals and properties

const obj1 = {}; // object literal syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const ellie = { name: "ellie", age: 4 };
print(ellie);

ellie.hasJob = true; // possible -> 별로 추천 하지 않음.
delete ellie.hasJob; // can delete properties later

//2. computed properties
// key should be always string
console.log(ellie.name);
console.log(ellie["name"]); // runtime에서 결정될때
ellie["hasJob"] = true;
console.log(ellie.hasJob);

// obj.key -> ellie.'name' -> undefined
// function printValue(obj, key) {
//     console.log(obj.key);

// }
// printValue(ellie, 'name')

function printValue(obj, key) {
  console.log(obj[key]);
}

// 3.Property value shorthand
const person1 = { name: "bob", age: 2 };
const person2 = { name: "bob", age: 3 };
const person3 = { name: "bob", age: 4 };
const person4 = makePerson("su", 30);

function makePerson(name, age) {
  return {
    name, // name:name,
    age, // age:age
  };
}

const person5 = new Person("su", 30);
// 4. Constructor function
function Person(name, age) {
  //this = {};
  this.name = name;
  this.age = age;
  //return this;
}

// 5. in operator : property existence check (keu in obj)

console.log("name" in ellie);
console.log("age" in ellie);
console.log("random" in ellie);

//6. for..in vs for..of
// for(key in obj)

for (let key in ellie) {
  console.log(key);
}
//for (value of iterable)
const array = [1, 2, 3];
for (let value of array) {
  console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2,obj3])
const user = { name: "ellie", age: "20" };
const user2 = user;

//old way
const user3 = {};
for (let key in user) {
  user3[key] = user[key];
}

//es5
Object.assign(user, user2); // 뒤에 나오는값이 덮어 씌워짐
const user4 = Object.assign({}, user);

const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
