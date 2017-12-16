// // Example 100 - Falsy
// // JS has some falsy values
// // falsy = values that equals to false when casted/coerced to boolean
//
// // "" - empty string
// console.log("\"\"");
// console.log("" == false); // true
// console.log(Boolean("") === false); // true
//
// console.log("\n0");
// console.log(0 == false); // true
// console.log(Boolean(0) === false); // true
//
// console.log("\n-0")
// console.log(-0 == false); // true
// console.log(Boolean(-0) === false); // true
//
// console.log("\nNaN");
// console.log(NaN == false);; // false
// console.log(Boolean(NaN) === false); // true
//
// console.log("\nnull");
// console.log(null == false); // false
// console.log(Boolean(null) === false); // true
//
// console.log("\nundefined");
// console.log(undefined == false); // false
// console.log(Boolean(undefined) === false); // true
//
// console.log("\nfalse -");
// console.log(false == false); // true
// console.log(false === false); // true








// Example 101 - Falsy
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(false));








//
// // Example 102 - Truthy
// // everything else is truthy
// console.log(Boolean("hello")); // true
// console.log(Boolean(2)); // true
// console.log(Boolean(-1)); // true
// console.log(Boolean(2.33)); // true
// console.log(Boolean([])); // true
// console.log(Boolean({})); // true
// console.log(Boolean(() => {console.log('hello');}));