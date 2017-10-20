//// Example 1
// let str1 = 'hello';
// let str2 = new String('hello');

// console.log(str1 == str2);
// console.log(str1 === str2);
// console.log(str1 === str2.toString());










// // Example 2
// let obj1 = {
//     firstName: 'Shahriar',
//     lastName: 'Shovon'
// };


// console.log(obj1.firstName + ' ' + obj1.lastName);













// // Example 3
// let obj2 = function() {
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












// // Example 6 : Array Operations
// let array1 = [1, 2, 3, 4, 5, 6];
// //or let array1 = new Array(1, 2, 3, 4, 5, 6)
// console.log(array1);

// // add a new item at the end
// array1.push("shovon");
// console.log(array1);

// // pop removes the item from the end and returns it
// let lastElement = array1.pop();
// console.log(array1);
// console.log(lastElement);

// // insert at the beginning
// array1.unshift("hello");
// console.log(array1);

// // removefrom the beginning
// let firstElement = array1.shift();
// console.log(array1);
// console.log(firstElement);


// // traverse array values
// console.log('traversing array:');
// array1.forEach((value) => {
//     console.log(`value: ${value}`);
// });


// // traverse array keys and values
// console.log('traversing array:');
// array1.forEach((value, key) => {
//     console.log(`${key}: ${value}`);
// });


















// // Example 7: Associative Array
// let array2 = new Array();
// array2['firstName'] = 'Shahriar';
// array2['lastName'] = 'Shovon';
// array2['country'] = 'Bangladesh';
// console.log(array2);


// // printing all the keys of associative array
// for(key in array2) {
//     console.log(key);
// }


// // printing keys and values of associative array
// for(key in array2) {
//     console.log(`My ${key} is ${array2[key]}`);
// }










// // Example 8: Checking for Key Existence on Associative Array
// let array3 = new Array();
// array3['firstName'] = 'Shahriar';
// array3['lastName'] = 'Shovon';
// array3['country'] = 'Bangladesh';
// console.log(array3);


// // check whether an associative array has specific property
// array3.hasProperty = function(qProperty) {
//     for(key in this) {
//         if(key === qProperty) {
//             return true;
//         }
//     }

//     return false;
// }


// console.log(array3.hasProperty('firstName'));
// console.log(array3.hasProperty('first'));



















// // Example 9 : Functional Inheritance
// let User = (ops) => {
//     var user = {};
//     user.firstName = ops.firstName || 'Shahriar';
//     user.lastName = ops.lastName || 'Shovon';
//     user.email = ops.email || 'shovon@example.com';
//     user.name = () => {
//         return user.firstName + ' ' + user.lastName;
//     };

//     return user;
// };


// // Agency inherits User
// let Agency = (ops) => {
//     ops = ops || {};
//     var agency = User(ops);
//     agency.customers = ops.customers || 0;
//     agency.isAgency = true;
//     return agency;
// };


// let userObj = User({firstName: 'Alex', lastName: 'Cooper'});

// let agencyObj = Agency({firstName: 'Alex', lastName: 'Cooper', customers: 5});
// console.log(agencyObj);
// console.log(userObj);
// console.log(userObj.name());

























// Example 10: Print process ID or PID
console.log(process.pid);