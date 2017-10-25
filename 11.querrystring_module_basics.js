// // Example 76: Object to querystring conversion
// const qs = require('querystring');
//
// let user = {
//     firstName: 'Kelly',
//     lastName: 'Clarkson',
//     description: 'A great musician'
// };
//
// console.log(qs.stringify(user));










// // Example 77: querystring to Object conversion
// const qs = require('querystring');
//
// let urlQS = 'firstName=Kelly&lastName=Clarkson&description=A%20great%20musician';
//
// let userObj = qs.parse(urlQS);
//
// console.log(userObj);














// // Example 78: Object to querystring conversion
// // qs.stringify(obj, seperator, equalSign)
// const qs = require('querystring');
//
// let user = {
//     firstName: 'Kelly',
//     lastName: 'Clarkson',
//     description: 'A great musician'
// };
//
// console.log(qs.stringify(user, '/', '='));
// console.log(qs.stringify(user, '@', '.'));








// Example 79: querystring to Object conversion
const qs = require('querystring');

let encodedStr1 = 'firstName=Kelly/lastName=Clarkson/description=A%20great%20musician';
let encodedStr2 = 'firstName.Kelly@lastName.Clarkson@description.A%20great%20musician';

let userObj1 = qs.parse(encodedStr1, '/', '=');
let userObj2 = qs.parse(encodedStr2, '@', '.');

console.log(userObj1);
console.log(userObj2);



