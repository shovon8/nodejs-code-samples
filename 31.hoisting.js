// // Example 130 - Hoisting variables
//
// a = 2;
// var a;
// console.log(a); // prints 2 not undefined
//
//
//
//
// console.log(b); // prints undefined, does not throw ReferenceError
// var b = 2;


















// // Example 131 - function declaration is hoised
// helloWorld(); // can access function declared later
//
//
// function helloWorld() {
//     console.log("Hello World");
// }


















// // Example 132 - function expression is not hoisted
//
// // returns TypeError, not ReferenceError because helloWorld variable is hoisted
// // but JavaScript engine don't yet know that a function expression is assigned to it
// // helloWorld is undefined, and trying to call undefined() is a TypeError as it is not a
// // function
// helloWorld();
//
// var helloWorld = function() {
//     console.log("Hello World");
// };













// // Example 133 - function expression is not hoisted
//
// // returns ReferenceError
// // because printHello() function is not assigned to the current scope
// printHello();
//
// var helloWorld = function printHello() {
//     console.log("Hello World");
// };














// // Example 134 - Functions are hoisted first, then variables
// // What happens here is that the function is hoisted first, then an annonymous function is assigned to printOne variable.
// // so calling printOne() prints '1', but calling printOne() at the end prints '2'
// printOne(); // 1
//
// var printOne;
//
// function printOne() {
//     console.log(1);
// }
//
//
// printOne = function() {
//     console.log(2);
// };
//
//
// printOne(); // 2










// Example 135 - Subsequent function declaration overrides each other

printCode(); // '8B'

function printCode() {
    console.log('1A');
}


function printCode() {
    console.log('5A');
}


function printCode() {
    console.log('8B');
}