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
var c = {
    name: 'the c object',
    log: function () {
        var self = this;
        (self.name = 'updated c object'), console.log(self);

        var setname = function (newname) {
            self.name = newname;
        };
        setname('updated again! The c object');
        console.log(self);
    },
};
c.log();
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

var arr = [
    1,
    false,
    {
        name: 'pat',
        address: '1077 Crinella',
    },
    function (name) {
        var greeting = 'Hello ';
        console.log(greeting + name);
    },
    'hello',
];
console.log(arr);
// now access the function in the array and pass it the name from object two
arr[3](arr[2].name);

// Arguments
function greet(firstname, lastname, language, ...other) {
    language = language || 'es';

    if (arguments.length === 0) {
        console.log('missing parameters');
        console.log('=====================');
        return;
    }
    console.log(firstname);
    console.log(lastname);
    console.log(language);
    console.log(arguments);
    console.log('arg 0:', arguments[0]);
    console.log(other);
    console.log('=======================');
}

greet();
greet('john');
greet('john', 'doe');
greet('john', 'doe', 'en');
greet('john', 'doe', 'en', 'some', 'other', 'args');
