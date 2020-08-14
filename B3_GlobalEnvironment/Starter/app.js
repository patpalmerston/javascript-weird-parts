// const albert = 'hello world';

// function b() {
//     console.log('called b');
// }

// b();
// console.log(albert);

//Async

//long running function
// function waitThreeSeconds() {
//     var ms = 3000 + new Date().getTime();
//     while (new Date() < ms) {}
//     console.log('finished function');
// }

// function clickHandler() {
//     console.log('click event!');
// }

// // listen for the click event
// document.addEventListener('click', clickHandler);

// waitThreeSeconds();
// console.log('finished execution');

// var a = 2,
//     b = 3,
//     c = 4;

// a = b = c;
// console.log(a);
// console.log(b);
// console.log(c);

// var a = 0;
// var b = false;
// if (a == b) {
//     console.log('equal');
// } else {
//     console.log('not equal');
// }

// Default Values

// function greet(name) {
//     name = name || 'Pat';
//     console.log(`Hello ${name}`);
// }

// greet();

//Objects Functions
// var person = new Object();
// person['firstname'] = 'Tony';
// person['lastname'] = 'Alicia';

// var firstNameProperty = 'firstname';
// console.log(person);
// console.log(person[firstNameProperty]);
// console.log(person.firstname);
// console.log(person.lastname);

// person.address = new Object();
// person.address.street = '1077 Crinella Dr.';
// person.address.city = 'Petaluma';
// person.address.state = 'California';
// console.log(person['address']['state']);

//Object literals

// var person = {
//     firstname: 'Tony',
//     lastname: 'Andrea',
//     address: {
//         street: '1044 Crinells',
//         city: 'petal',
//         state: 'Call',
//     },
// };

// function greet(person) {
//     console.log(`Hi ${person.firstname}`);
// }

// console.log(person);

//JSON and Object Literals
// var objectLiteral = {
//     firstname: 'Mary',
//     isAProgrammer: true,
// };

// console.log(JSON.stringify(objectLiteral));
// var jsonValue = JSON.parse('{"firstname":"Mary","isAProgrammer":true}');
// console.log(jsonValue);

// Functions are Objects

// function greet() {
//     console.log('hi');
// }

// greet.language = 'english';
// console.log(greet);

// // function statements and expressions
// //statement that is a function declaration and can be hoisted
// greet('hoisted');
// function greet(a) {
//     console.log(a);
// }

// //expresson is a viariable that represents a function can not be hoisted
// const anonomysGreet = function (a) {
//     console.log(a);
// };
// anonomysGreet('cant be hoisted');

// in the execution context, the stack stacks functions and variables first then runs the code down the stack. So the variable expression that holds the anonymous function is in memory but the function itself cant be run until after the single thread stack reaches that variable declaration.

// By Value (Primitives)
// var a = 3;
// var b;

// b = a;
// a = 2;

// console.log(a);
// console.log(b);

// by Reference (all objects (including functions))
// var c = { greeting: 'hi' };
// var d;

// d = c;
// c.greeting = 'hello'; // mutate
// console.log(c);
// console.log(d);

// By value makes copies, By references uses pointers to the same object

// by reference (even as function parameters)
// function changeGreeting(obj) {
//     obj.greeting = 'Hola'; // mutate
// }

// changeGreeting(d);
// console.log(c);
// console.log(d);

// // equals operator sets up new momeory space (new Address)
// c = { greeting: 'lets do this' };
// console.log(c);
// console.log(d);

// Objects functions and this
// var c = {
//     name: 'the c object',
//     log: function () {
//         var self = this;
//         (self.name = 'updated c object'), console.log(self);

//         var setname = function (newname) {
//             self.name = newname;
//         };
//         setname('updated again! The c object');
//         console.log(self);
//     },
// };
// c.log();
// example using this key work and the side effects of global scope in methods inside objects, when using the 'this' key work the inner methods will attach to the global scope. To escape that side effect we create a reference variable to the this key word that is attached to the root of the parent object. Usually called "Self", from there we reference everything in the objects scope using the variable "self" that olds a reference to the parent object scope.
// var c = {
//     name: 'the c object',
//     log: function () {
//         // var self = this;
//         (this.name = 'updated c object'), console.log(this);

//         var setname = function (newname) {
//             this.name = newname;
//         };
//         setname('updated again! The c object');
//         console.log(this);
//     },
// };
// c.log();

// Array in JS can hold anything because it defines what is typed on the fly or "dynamic typing" for example we can hold one of each type and reference those type from the array itself

// var arr = [
//     1,
//     false,
//     {
//         name: 'pat',
//         address: '1077 Crinella',
//     },
//     function (name) {
//         var greeting = 'Hello ';
//         console.log(greeting + name);
//     },
//     'hello',
// ];
// console.log(arr);
// // now access the function in the array and pass it the name from object two
// arr[3](arr[2].name);

// // Arguments
// function greet(firstname, lastname, language, ...other) {
//     language = language || 'es';

//     if (arguments.length === 0) {
//         console.log('missing parameters');
//         console.log('=====================');
//         return;
//     }
//     console.log(firstname);
//     console.log(lastname);
//     console.log(language);
//     console.log(arguments);
//     console.log('arg 0:', arguments[0]);
//     console.log(other);
//     console.log('=======================');
// }

// greet();
// greet('john');
// greet('john', 'doe');
// greet('john', 'doe', 'en');
// greet('john', 'doe', 'en', 'some', 'other', 'args');

//----Immediately Invoked Function Expressions or (IIFE)s

// function statement
// function greet(name) {
//     console.log('Hello ' + name);
// }
// greet('greet');

// // function expression
// var greetFunc = function (name) {
//     console.log('Hello ' + name);
// };
// greetFunc('greetFunc');

// //iffe
// var greeting = (function greet(name) {
//     return 'Hello ' + name;
// })('Pat');
// console.log(greeting);

//function object needs a name unless giving it parens as a function expression. This technique tricks the syntax parser other wise it will throw an error if the function has no name and is not a statement.

// var firstname = 'Pat';
// //function expression creates this object on the fly, it is an object and invokable
// (function (name) {
//     var greeting = 'Hello';
//     console.log(greeting + ' ' + name);
// })(firstname); // can be invoked inside or outside of parens, either or

//Closures

// function greet(whattosay) {
//     return function (name) {
//         console.log(whattosay + ' ' + name);
//     };
// }

// // invoking a function that returns a function, then invoke the returned function
// // greet('Hi')('Pat');
// let sayHi = greet('Hi');
// sayHi('Pat');

// //closures pt 2
// function buildFunctions() {
//     var arr = [];
//     // function is not executed until the full scope is done, by that time i = 3 and is always 3 for the execution of the function, because the function is not executed until after the loop is finished and exits its own execution context
//     for (var i = 0; i < 3; i++) {
//         arr.push(function () {
//             console.log(i);
//         });
//     }
//     return arr;
// }
// var fs = buildFunctions();
// fs[0]();
// fs[1]();
// fs[2]();

// // same function with ES6 let
// function buildFunctions2() {
//     var arr = [];
//     // every time the loop runs it will execute the function because of the iffe
//     for (var i = 0; i < 3; i++) {
//         arr.push(
//             (function (j) {
//                 return function () {
//                     console.log(j);
//                 };
//             })(i)
//         );
//     }
//     return arr;
// }
// var fs2 = buildFunctions2();
// fs2[0]();
// fs2[1]();
// fs2[2]();

//Function Factory

// function makeGreeting(language) {
//     return function (firstname, lastname) {
//         if (language === 'en') {
//             console.log('Hello ' + firstname + ' ' + lastname);
//         }

//         if (language === 'es') {
//             console.log('Hola ' + firstname + ' ' + lastname);
//         }
//     };
// }
//taking advantage of closures to set the parameter values for different functions create from the same function with different execution contexts
// var greetEnglish = makeGreeting('en');
// var greetSpanish = makeGreeting('es');
// greetEnglish('lara', 'zil');
// greetSpanish('mara', 'smil');

// call() apply() bind()
// var person = {
//     firstname: 'John',
//     lastname: 'Doe',
//     getFullName: function () {
//         var fullname = this.firstname + ' ' + this.lastname;
//         return fullname;
//     },
// };

// var logName = function (lang1, lang2) {
//     console.log('Logged: ' + this.getFullName());
//     // you can add bind to the end of the funtion. since functions are objects you can use the dot operator to access the bind method that is available on all functions
//     console.log('Arguments: ' + lang1 + ' ' + lang2);
//     console.log('----------------');
// }.bind(person);
// // bind the function outside of object to the object as a method to that object
// //.bind() creates a copy of whatever function you call it on and whatever object you pass to that method now points to that objects reference

// var logPersonName = logName.bind(person);

// // logName();
// logPersonName('en');
// // logName('en');

// // .call() allows us to pass a this variable when calling the function. Slick way to bind the this keyword to a function made on the fly that interacts with a specific object
// logName.call(person, 'en', 'es');
// // .apply() does the same thing except it wants an array of parameters
// logName.apply(person, ['es', 'en']);

// // Function Borrowing
// var person2 = {
//     firstname: 'kel',
//     lastname: 'stuff',
// };
// // borrowing function from person object and placing it on the person 2 object
// console.log(person.getFullName.apply(person2));

// // function currying
// function multiply(a, b) {
//     return a * b;
// }
// // bind is permanently setting the first variable to 2, took a function, created a new function from it with some set parameters, thats called currying
// var multiplyByTwo = multiply.bind(this, 2);
// console.log(multiplyByTwo(3));

//---------functional programming
// take action against each item and add to new array
// function mapForEach(arr, fn) {
//     newArr = [];
//     for (var i = 0; i < arr.length; i++) {
//         newArr.push(fn(arr[i]));
//     }
//     return newArr;
// }

//lots of code but we can use functions to cut down on the amount of code used
// var arr1 = [1, 2, 3];
// console.log(arr1);

// This is the old version, with the new function we can change it up
// var arr2 = [];
// for (var i = 0; i < arr1.length; i++) {
//     arr2.push(arr[i] * 2);
// }

// var arr2 = mapForEach(arr1, (x) => {
//     return x * 2;
// });
// console.log(arr2);

// var arr3 = mapForEach(arr1, (x) => {
//     return x > 2;
// });
// console.log(arr3);

// var checkPastLimit = function (limiter, item) {
//     return item > limiter;
// };

// var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));
// console.log(arr4);

// var checkPastLimitSimplified = function (limiter) {
//     return function (limiter, item) {
//         return item > limiter;
//     }.bind(this, limiter);
// };

// var arr5 = mapForEach(arr1, checkPastLimitSimplified(2));
// console.log(arr5);

// Object Oriented Java Script

// var person = {
//     firstname: 'Default',
//     lastname: 'Default',
//     getFullName: function () {
//         return this.firstname + ' ' + this.lastname;
//     },
// };

// var pat = {
//     firstname: 'Pat',
//     lastname: 'Palmerston',
// };

// Never do this, dont assign the proto, for example only
// pat.__proto__ = person;
// console.log(pat.getFullName());
// console.log(pat.firstname);

// var payten = {
//     firstname: 'Payten',
// };

// payten.__proto__ = person;
// console.log(payten.getFullName());

// everything is an object
// var a = {};
// var b = function () {};
// var c = [];

// building Objects
// function constructor creates objects
// function Person(firstname, lastname) {
//     console.log(this);
//     (this.firstname = firstname), (this.lastname = lastname);
//     console.log('The Person function is invoked');
// }
// // every function you create gets a prototype that starts as an empty object that you can build on to
// Person.prototype.getFullName = function () {
//     return this.firstname + ' ' + this.lastname;
// };

// // invokes function, add the 'new' key word to a function call and you get a new object from the fuction constructor
// var pat = new Person('Pat', 'Palmerston');
// // returns object
// console.log(pat);

// var payten = new Person('Payten', 'Palmerston');
// console.log('full name', payten.getFullName());

// //adding to primitve object prototypes
// String.prototype.isLengthGreaterThan = function (limit) {
//     return this.length > limit;
// };

// console.log('pat'.isLengthGreaterThan(2));

// Arrays and For in
// Array.prototype.myCustomFeature = 'coo';
// var arr = ['john', 'pat', 'kel', 'pay', 'jack'];
// // dont use for in as you will loop all properties of the array object
// for (var pop in arr) {
//     console.log(pop, 'in arr', arr[pop]);
// }
// // instead use a traditional for loop or for of loop to access the index of the array
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// Object.create and pure prototyple inheritance

// if using older browsers that dont support the create.object feature you can use a poly fill that checks to see if the browser had the object.create feature. If not you can create that feature and asign the prototype to the parent object

if (!Object.create) {
    Object.create = function (o) {
        if (arguments.length > 1) {
            throw new Error(
                'Object.create implementation' +
                    'only accepts the first parameter.'
            );
        }
        function F() {}
        F.prototype = o;
        return new F();
    };
}

var person = {
    firstname: 'Default',
    lastname: 'Default',
    greet: function () {
        return 'Hi ' + this.firstname;
    },
};

var pat = Object.create(person);
pat.firstname = 'Pat';
pat.lastname = 'Palmerston';
console.log(pat);
console.log(pat.greet());
