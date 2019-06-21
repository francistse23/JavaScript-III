/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding - Value of 'this' will be looking into global/console Object.

* 2. Implicit Binding - 'this' is limited to the function it is definted in.

* 3. New Binding - constructor function that creates a new object 

* 4. Explicit Binding - when JS's call or apply method is invoked.

*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function showWindow() {
  console.log(this);
}

// Principle 2

// code example for Implicit Binding
const myObject = {
  name: "Francis",
  activity: "code",
  hello: function() {
    console.log(`Hello, my name is ${this.name}`);
  },
  doActivity: function() {
    console.log(`${this.name} likes to ${this.activity}.`);
  }
};

console.log(myObject.hello());

// Principle 3

// code example for New Binding
function Person(name) {
  this.name = name;
  this.greeting = function() {
    console.log(`Hi, my name is ${this.name}`);
  };
}

let peter = new Person("Peter");
console.log(peter.greeting());

// Principle 4

// code example for Explicit Binding
const friend = { name: "Alex", activity: "play games" };
myObject.doActivity.call(friend);
