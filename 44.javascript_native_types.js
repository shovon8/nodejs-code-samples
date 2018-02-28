// // Example 206 - creating a String object
// var a = new String("hello world");
// console.log(a.toString());










// // Example 207 - testing type of String object
// var a = new String("hello world");
//
// // typeof operator returns 'object', which is of no use
// console.log(typeof a); // object
//
// console.log(a instanceof String); // true
//
// console.log(Object.prototype.toString.call(a)); // [object String]
//
//
//
// console.log(Object.prototype.toString.call(a) === '[object String]');













// // Example 208 - testing for different JavaScript Object types
// console.log(Object.prototype.toString.call(null));
// console.log(Object.prototype.toString.call(undefined));
// console.log(Object.prototype.toString.call(true));
// console.log(Object.prototype.toString.call([1, 2, 3]));
// console.log(Object.prototype.toString.call(/abc/i));
// console.log(Object.prototype.toString.call('hello'));
// console.log(Object.prototype.toString.call(12));
















// //  Example 209 - Problems with JS object wrapper
// // object wrappers in JS always resolves to true
// var a = false;
// if(!a) {
//     console.log('hey');
// }
//
// var b = new Boolean(false);
// if(!b) { // resolved to 'true'
//     console.log('you');
// }

















// // Example 210 - Manually Boxing primitives
// var a = Object(12);
// console.log(Object.prototype.toString.call(a));
//
// var b = Object('hello');
// console.log(Object.prototype.toString.call(b));














// // Example 211 - Unboxing Boxed primitives
// var a = new Boolean(true);
// var b = new String('hello');
// var c = new Number(43);
//
// console.log(a.valueOf());
// console.log(b.valueOf());
// console.log(c.valueOf());
















// // Example 212 - Making undefined Arrays of any length
// var undefArray = Array.apply(null, {length: 4});
// console.log(undefArray);














// // Example 213 - JS Object
//
// // discouraged way
// var o1 = new Object();
// o1.name = 'Shovon';
//
// // preferred way
// var o2 = {name: 'Shovon'};
//
// console.log(o1);
// console.log(o2);












// // Example 214 - JS Regular Expression literal
// var r1 = new RegExp("abc*", 'g');
// var r2 = /abc*/g;
//
// console.log(r1);
// console.log(r2);
//
// console.log("abcccdas".match(r1));
// console.log("abccccccccdas".match(r2));
















// // Example 215 - Get current Unix timestamp
// console.log(Date.now());
//
// var a = new Date();
// console.log(a.getTime());














// // Example 216 - Date.now() polyfill
// if(!Date.timestamp) {
//     Date.timestamp = function() {
//         return (new Date()).getTime();
//     };
// }
//
// console.log(Date.timestamp());
// console.log(Date.timestamp());
// console.log(Date.timestamp());
//










// // Example 217 - The prototype of each Type is the same type by default
// console.log(Function.prototype.toString());
// console.log(Array.prototype.toString());
// console.log(Number.prototype.toString());













// // Example 218 - The prototype of each Type is the same type
// console.log(Array.isArray(Array.prototype));



















// // Example 219 - making functions bulletproof with default prototype values
// function printer(names, text, date) {
//     // use this with caution as modifying Array.prototype by mistake
//     // may lead to unexpected results
//     names = names || Array.prototype;
//     text = text || String.prototype;
//     date = date || Date.prototype;
//
//
//     var str = "To: ";
//     for(var i = 0; i < names.length; i++) {
//         str += names[i] + ' ';
//     }
//
//     str += '\nBody: ';
//
//     str += text;
//
//     str += '\nTime: ';
//
//     str += date.getTime();
//
//     return str;
// }
//
//
//
// console.log(printer(['Shovon', 'Sharmin'], 'hello world', new Date()));
















