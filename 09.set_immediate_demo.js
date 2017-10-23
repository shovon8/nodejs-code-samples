// // Example 66: setImmediate() and clearImmediate()
// let printMessage = (msg) => {
//     console.log(msg);
// };
//
// setImmediate(printMessage, 'hello world');
// console.log('I am ready to show you events!');









// // Example 67: setImmediate() and clearImmediate()
// let printMessage = (msg) => {
//     console.log(msg);
// };
//
// setImmediate(printMessage, 'hello world');
// setImmediate(printMessage, 'hey');
// setImmediate(printMessage, 'node is awesome');
// console.log('I am ready to show you events!');










// Example 68: setImmediate() and clearImmediate()
let printMessage = (msg) => {
    console.log(msg);
};

let timer1 = setImmediate(printMessage, 'hello world');
let timer2 = setImmediate(printMessage, 'hey');
let timer3 = setImmediate(printMessage, 'node is awesome');
clearImmediate(timer2);
console.log('I am ready to show you events!');