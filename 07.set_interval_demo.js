// // Example 59: calling a callback after a given period(in ms) of time
// let printMessage = () => {
//     console.log('hello world');
// };
//
//
// setInterval(printMessage, 2000);















// // Example 60: calling a callback after a given period(in ms) of time
// let printMessage = (msg) => {
//     console.log(msg);
// };
//
// // also pass argument to callback
// setInterval(printMessage, 2000, 'print me');














// // Example 61: calling a callback after a given period(in ms) of time
// let addNumbers = (a, b) => {
//     console.log(a + b);
// };
//
// // also pass argument to callback
// setInterval(addNumbers, 2000, 15, 20);


















// // Example 61: calling a callback after a given period(in ms) of time
// let getRandom = (min, max) => {
//     console.log(Math.floor(Math.random() * (max + 1 - min)) + min);
// };
//
// setInterval(getRandom, 2000, 15, 35);

















// Example 62: clearing the interval with clearInterval()
let getRandom = (min, max) => {
    console.log(Math.floor(Math.random() * (max + 1 - min)) + min);
};

let numberGeneratorInterval = setInterval(getRandom, 2000, 15, 35);


setTimeout(() => {
    console.log('clearing interval...');
    clearInterval(numberGeneratorInterval);
}, 10000);