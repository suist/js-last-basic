"use strict";

//javascript is synchronous.   by order -> in order
// Execute the code block by order after hoisting.
//hoisting: var, function declaration

console.log("1");
setTimeout(() => console.log("2"), 2000); // setTimeout(time handler,time)
console.log("2");
console.log("3");

//Synchronous callback
function printImmediately(print) {
  // hoisting -> move top and declaration
  print();
}

printImmediately(() => console.log("hello"));
//Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}

printWithDelay(() => console.log("async callback"), 4000);

//callback hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "suist" && password === "1234") ||
        (id === "coder" && password === "academy")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "suist") {
        onSuccess({ name: "suist", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt("enter yout id");
const password = prompt("enter your password");
userStorage.loginUser(id, password, (user) => {
  userStorage.getRoles(
    user,
    (userWithRole) => {
      alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
    },
    (error) => {
      console.log(error);
    }
  );
});
