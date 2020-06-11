// 1.object to string

let a = JSON.stringify(true);
console.log(a);

let b = JSON.stringify(["apple", "banana"]);
console.log(b);

const rabbit = {
  name: "su",
  age: 29,
  color: "cute",
  size: null,
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ["name", "color", "size"]);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value : ${value}`);
  return key === "name" ? "ellie" : value;
});
console.log(json);

// 2. JSON to Object

const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value :${value}`);
  return key === "birthDate" ? new Date(value) : value;
});
