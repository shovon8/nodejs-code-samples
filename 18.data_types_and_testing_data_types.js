// // Example 94: Working with undefined variables
//
// // a variable by default is undefined
// let a;
// console.log(typeof a);
//
// // testing for undefined variable
// console.log(typeof a === "undefined");
//
//
// // after setting a value, the variable changes its undefined state
// console.log("\nAfter setting a value:");
// a = 2;
// console.log(typeof a);
// console.log(typeof a === "undefined");
//
//
// // we can set it to undefined again
// console.log("\nAfter assigning undefined:");
// a = undefined;
// console.log(typeof a);
// console.log(typeof a === "undefined");
//
//












// // Example 95 : Testing number variables
// let n = 54;
// console.log(typeof n);
//
// // testing whether it is a number
// console.log(typeof n === "number");
//
// // testing with isNaN() function
// console.log( !isNaN(n) );
//
//
// console.log("\nAfter assigning a string that can be converted to a number:");
// n = "42";
// console.log(typeof n === "number");
// // wont work if the string is convertible to a Number
// console.log( !isNaN(n) );
//
//
//
//
// console.log("\nAfter assigning a string that can't be converted to a number:");
// n = "42hello";
// console.log(typeof n === "number");
// console.log( !isNaN(n) );
//
//
//
//
// console.log("\nAfter assigning a string that can't be converted to a number:");
// n = "hello";
// console.log(typeof n === "number");
// console.log( !isNaN(n) );














// // Example 96: objects and function
// let o = {a: 2, b: 3};
//
// console.log(typeof o);
//
// // checking for object
// console.log(typeof o === "object");
// console.log(o instanceof Object); // true
//
// // an Object is not a function
// console.log(o instanceof Function); // false
//
//
// // a function
// let f = () => {
//     return 1;
// };
//
// console.log(typeof f);
// console.log(typeof f === "function");
// console.log(f instanceof Function); // true
//
// // a function is also an Object, but the reverse is not true
// console.log(f instanceof Object); // true













// // Example 97 : Boolean
// let b = true;
// console.log(typeof b); // "boolean"
// console.log(typeof b === "boolean"); // true
// console.log(b instanceof Boolean); // false!
//
//
//
// console.log("\nObject notation:");
// let b2 = new Boolean(true); // object notation
// console.log(typeof b2); // object
// console.log(typeof b2 === "boolean"); // false
// console.log(b2 instanceof Boolean); // true
//
//
// // this property can be seen in other types as well
// // Example: number, string
// let s1 = "hello";
// let s2 = new String("hello");
//
// console.log(typeof s1);
// console.log(typeof s2);
// console.log(s1 instanceof String);
// console.log(s2 instanceof String);












// // Example 98: Testing null
// let d = null;
//
// console.log(typeof d); // object - thats a bug
// console.log(d === null); // true











// Example 99: Always use === not ==
console.log(undefined == null); // true - due to type casting
console.log(undefined === null); // false - no type casting