// // Example 255 - Statement Completion Values
//
// // if the following is typed into the REPL of Node.js
//
// // the output is 42 as expected
// b = 42;
//
// // the output is 'undefined', how?
// // that's the completion value of 'var a = b'
// var a = b;








// // Example 256 - Capturing the Statement Completion Values
// // if you think you can capture the statement completion values, you are wrong
// // it is possible, but a little bit tricky.
//
// // in Example 255, the Statement Completion Value can be found if only run in a
// // Browser Console or Node.js REPL.
// // But what if, you want to get the Statement Completion Value in a program?
// // use eval()
//
// var a = '', b = 42;
//
// a = eval('var c = b'); // undefined - which is a statement completion value
// console.log(a, b, c);






















// // Example 257 - Variable Side Effect
// function foo() {
//     a = a + 1;
//     console.log(a);
// }
//
// var a = 1;
// console.log(a);
// foo(); // changes a = 2
//
// console.log(a);

















// // Example 258 - 'delete' operator side effect
// var obj = {
//     a: 4,
//     b: 6
// };
//
//
//
// if(delete obj.a) {
//     console.log('deleted');
//     console.log(obj.a);
// } else {
//     console.log('not deleted');
// }

















// // Example 259 - Multi-variable assignment
// var a = b = c = d = 42;
//
// console.log(a, b, c, d);


















// // Example 260 - Function simplification
//
// // a function may be written like that
// function printVowels(str) {
//     var matches;
//
//     if(str) {
//         matches = str.match(/[aeiou]/g);
//
//         if(matches) {
//             return matches;
//         }
//     }
//
//     return false;
// }
//
//
//
// // the same function can be simplified as follows
// function printVowelsSimplified(str) {
//     var matches;
//
//     if(str && (matches = str.match(/[aeiou]/g))) {
//         return matches;
//     }
//
//     return false;
// }
//
//
//
// console.log(printVowels("hello world"));
// console.log(printVowelsSimplified("hello world"));
//
//
//
// console.log(printVowels("strngs"));
// console.log(printVowelsSimplified("strngs"));
//






















// // Example 261 - JSON and JSON-p and JS Object
// /*
// * JSON Structure: has quotes in propertyName
// * {
// *   "propertyName1" : value,
// *   "propertyName2" : "String value"
// * }
// *
// * JS Object: Don't have quotes in propertyName -
// *
// * JS automatically converts JSON to JS object
// * */
//
// var jsObj = {
//     name: "Shovon"
// };
//
// var json = {
//     "name": "Shovon",
//     "country": "BD"
// };
//
//
//
// console.log(jsObj.name);
// console.log(json.name);























// // Example 262 - Object destructuring in ES 6
// function getUser(id) {
//     // check id and return from database in real example
//
//     var id = id || 214;
//
//     return {
//         id: id,
//         name: 'Shahriar Shovon',
//         country: 'BD'
//     };
// }
//
//
// // Object destructuring
// var {id, name, country} = getUser();
// console.log(id, name, country);
//
// // Usually it's done like
// var data = getUser(18);
// console.log(data.id, data.name, data.country);























// // Example 263 - Object Destructuring in JS Function
// function diff({x, y}) {
//     return x - y;
// }
//
//
// // x will be assigned to x of the function
//
// console.log(diff({x: 9, y: 7}));
//
// // can have different order
// console.log(diff({y: 7, x: 9}));
























// // Example 264 - Equivalent of Object Destructuring in the old days
// function diff(obj) {
//     var x = obj.x;
//     var y = obj.y;
//
//     return x - y;
// }
//
//
// console.log(diff({x: 9, y: 7}));
// console.log(diff({y: 7, x: 9}));



















// // Example 255 - Using && Short Circuiting
// // L && R
// // if L is false, then R is not checked
// // because false && whatever = false, so no need to check the right side (R)
// function printName(obj) {
//
//     // here if obj is defined(true), it checks obj.name
//     // if obj is not defined, obj.name is not checked - thus no error is thrown
//     if(obj && obj.name) {
//         console.log("Hi, " + obj.name);
//     } else {
//         console.log("You who?");
//     }
// }
//
//
//
// printName();
// printName({name: 'Shahriar Shovon'});



















// // Example 256 - Using || Short Circuiting
// // L || R
// // if L is true, then R is not checked
// // because true || whatever = true, so no need to check the right side (R)
// console.log("Shovon" || "Sharmin");















// // Example 257 - && and || difference
// console.log("Shovon" || "Sharmin");
// console.log("Shovon" && "Sharmin");











// // Example 258 - try and finally block in function - return in try block
// // printNumber return value is set to 42, then finally block is executed.
// // only then printNumber() function is finished executing
// function printNumber() {
//     try {
//         return 42;
//     } finally {
//         console.log('printNumber finished.');
//     }
//
//     console.log('never reaches here');
// }
//
//
// console.log(printNumber());













// // Example 259 - throw and finally in a function
// function numberThrower() {
//     try {
//         console.log('numberThrower: threw 42');
//         throw 42;
//     } finally {
//         console.log('numberThrower: finished executing.');
//     }
// }
//
//
//
// try {
//     numberThrower();
// } catch(e) {
//     console.log('outside numberThrower: caught ' + e);
// }

















// // Example 260 - If in a function, in finally block, anything is thrown, it will override
// // the previous return value
// function throwInFinally() {
//     try {
//         return "tryReturn";
//     } finally {
//         throw "finallyThrow";
//     }
//
//     console.log("Never runs");
// }
//
// // console.log(throwInFinally()); // error, finallyThrow
//
// try {
//     throwInFinally();
// } catch (e) {
//     console.log(e);
// }
















// // Example 261 - return in finally block overrides the previous return
// function overrideReturn() {
//     try {
//         return 5;
//     } finally {
//         return 10;
//     }
//
//     return 15;
// }
//
//
//
// console.log(overrideReturn()); // 10
















// Example 262 - switch statement does a === check on its value and variable
var a = 42;

switch(a) {
    case true:
        console.log('boolean');
        break;

    case 0:
        console.log('zero');
        break;

    case "hello":
        console.log("string");
        break;

    default:
        console.log("never reaches here.");
}