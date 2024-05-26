let myName = {//! https://www.youtube.com/watch?v=75W8UPQ5l7k
    firstName: "Kiran Kumar",
    lastName: "K",
}

let printFullName = function(hometown, state) {
    console.log(this.firstName + " " + this.lastName + " from " + hometown + ", " + state);
}

printFullName.call(myName, "Chennai", "TamilNadu");

let myName2 = {
    firstName: "Sachin",
    lastName: "Tendulkar"
}

//* function borrowing
printFullName.call(myName2, "Mumbai", "Maharastra");// first arg is reference to this keyword, remaining arg are to the function parameters.

//* Apply method - only difference b/n call and apply method - second arg is passed as array list.
printFullName.apply(myName2, ["Mumbai", "Maharastra"]);

//* bind method - it binds and keep the copy of the method, which can be invoked later.
let printMyName = printFullName.bind(myName2, "Mumbai", "Maharastra");
console.log(printMyName);
printMyName();
