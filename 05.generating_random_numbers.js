// NOTE: The numbers are sorted before it's printed, just to see which numbers were generated(the range)


// // Example 49 : Generate random number between 0 and 1
// let numbers = [];
// for(let i = 0; i < 10; i++) {
//     numbers.push(Math.random());
// }

// console.log(numbers.join("\t"));














// // Example 50: Generating a random number between min and max (float)
// let numbers = [];

// let getRandom = (min, max) => {
//     return Math.random() * (max - min) + min;
// };

// for(let i = 0; i < 100; i++) {
//     numbers.push(getRandom(10, 20));
// }

// console.log(numbers.join("\t"));















// // Example 51: Generating a random number between min and max-1 (int)
// let numbers = [];

// let getRandom = (min, max) => {
//     return Math.floor(Math.random() * (max - min)) + min;
// };

// for(let i = 0; i < 100; i++) {
//     numbers.push(getRandom(10, 20));
// }

// numbers.sort();

// console.log(numbers.join("  "));























// // Example 52: Randomness test
// // returns min+1 to max
// let getRandom = (min, max) => {
//     return Math.ceil(Math.random() * (max - min)) + min;
// };

// let numbers = [];
// for(let i = 0; i < 100; i++) {
//     numbers.push(getRandom(10, 20));
// }


// numbers.sort();
// console.log(numbers.join("  "));

















// // Example 53: Randomness test
// // returns min to max
// let getRandom = (min, max) => {
//     return Math.floor(Math.random() * (max + 1 - min)) + min;
// };

// let numbers = [];
// for(let i = 0; i < 100; i++) {
//     numbers.push(getRandom(10, 20));
// }


// numbers.sort();
// console.log(numbers.join("  "));




















