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
var person = new Object();
person['firstname'] = 'Tony';
person['lastname'] = 'Alicia';

var firstNameProperty = 'firstname';
console.log(person);
console.log(person[firstNameProperty]);
console.log(person.firstname);
console.log(person.lastname);

person.address = new Object();
person.address.street = '1077 Crinella Dr.';
person.address.city = 'Petaluma';
person.address.state = 'California';
console.log(person['address']['state']);
