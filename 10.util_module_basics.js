// // Example 69: util.format() - like printf() in C - returns a formatted string
// const util = require('util');
//
// let message = util.format('%s', 'hello world');
// console.log(message);










// // Example 70: util.format() - like printf() in C - returns a formatted string
// const util = require('util');
//
// let message = util.format('%d + %d = %d', 1, 2, 3);
// console.log(message);















// // Example 71: util.format() - like printf() in C - returns a formatted string
// const util = require('util');
//
// let message = util.format('%d + %d = %d', 1.5, 2.5, 4);
// console.log(message);











// // Example 72: util.format() - like printf() in C - returns a formatted string
// // %j - prints JSON object
// const util = require('util');
//
// let user = {
//     firstName: 'Kelly',
//     lastName: 'Clarkson'
// };
//
// let message = util.format('The data is: %j', user);
// console.log(message);














// // Example 73: util.inspect() - finds information about objects
// const util = require('util');
// const qs = require('querystring');
//
// console.log(util.inspect(qs));






// // Example 74: util.inspect() - finds information about objects
// const util = require('util');
// const qs = require('querystring');
//
// console.log(util.inspect(qs, {showHidden: true}));













// Example 75: util.inspect() - finds information about objects
const util = require('util');
const qs = require('querystring');

console.log(util.inspect(qs, {showHidden: true, depth: null, colors: true}));


