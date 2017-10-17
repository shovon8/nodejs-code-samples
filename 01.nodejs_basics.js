//// Example 1
// var str1 = 'hello';
// var str2 = new String('hello');

// console.log(str1 == str2);
// console.log(str1 === str2);
// console.log(str1 === str2.toString());










// // Example 2
// var obj1 = {
//     firstName: 'Shahriar',
//     lastName: 'Shovon'
// };


// console.log(obj1.firstName + ' ' + obj1.lastName);













// // Example 3
// var obj2 = function() {
//     this.firstName = 'Shahriar';
//     this.lastName = 'Shovon';

//     return this;
// }
// console.log(obj2().firstName + ' ' + obj2().lastName);











// // Example 4: functions
// let sayHello = function() {
//     console.log('hello world');
//     return true;
// };

// sayHello();



// sayHello.id = 'TS22';
// console.log(sayHello.id);


















// // Example 5 : Function Callback
// let processNum = function(num1, num2, callback) {
//     return callback(num1, num2);
// };

// let Multiply = function(num1, num2) {
//     return num1 * num2;
// };

// let Add = function(num1, num2) {
//     return num1 + num2;
// };

// let Subtract = function(num1, num2) {
//     return num1 - num2;
// };

// let Divide = function(num1, num2) {
//     return num2 != 0 ? num1 / num2 : undefined;
// };

// let callbacks = [Multiply, Divide, Add, Subtract];

// callbacks.forEach(fn => {
//     console.log(processNum(5, 2, fn));
// });

// callbacks.forEach(fn => {
//     console.log(processNum(5, 0, fn));
// });





