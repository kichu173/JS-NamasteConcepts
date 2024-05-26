"use strict";

// https://www.youtube.com/watch?v=9T4z98JcHR0&t=79s

//* this in global space

console.log(this); // globalObject in browser - window, in nodejs it is global

//* this inside a function

function x() {
  console.log(this); // globalObject/ window, where as when you run in strict mode
  //then the value of this keyword is undefined.
}

//* this inside non-strict mode - (this substitution)

// If the value of this keyword is undefined or null
// this keyword will be replaced with the globalObject.
// only in non strict mode.

//* this keyword value depends on `how the function is called` (window)

x(); // in strict mode it is undefined
window.x(); // window in either strict/non-strict mode.

//* this inside a object's method
// difference between a function and methon in js - if you make a function as a
// part of an object then it is a method.

const obj = {
  a: 10,
  x: function () {
    // 'x' is a method of an object 'obj'
    console.log(this);
  },
};

obj.x();// {a: 10, x: ƒ}

//* call apply bind methods (sharing methods)

const student = {
  name: "Akshay",
  printName: function () {
    console.log(this.name);
  },
};
student.printName();

const student2 = {
  name: "Deepika",
};

student.printName.call(student2); // value of this = student2
//TODO: Read call, apply, bind.

//* this keyword inside the arrow function (enclosing lexical context)
// enclosing lexical context - console.log(this);
const obj2 = {
  a: 10,
  x: () => {
    console.log(this);
  },
};

obj2.x(); // window

//* this keyword inside nested arrow function

const obj3 = {
  a: 10,
  x: function () {
    // enclosing lexical context - console.log(this);
    const y = () => {
      console.log(this);
    };
    y();
  },
};

obj3.x(); // prints the obj3 {a: 10, x: ƒ}

//* this keyword inside a dom => reference to html element
// this reference to the html button element.

//* this inside class, constructor (skip)
