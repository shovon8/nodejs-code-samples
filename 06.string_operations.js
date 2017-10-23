// // Example 52 : Searching substring in strings - String.prototype.indexOf()
// let message = 'I love javascript and node.js, but I also worked with PHP';
//
// console.log(message.indexOf('javascript')); // start index if found
// console.log(message.indexOf('ruby')); // -1 for not found
















// // Example 53: String.prototype.substring(startIndex, endIndex);
// let anyString = 'Mozilla';
//
// // start at index 0 and go upto(not including) index 3
// console.log(anyString.substring(0, 3));
//
// // go back to index 0 from 3(not including 3)
// console.log(anyString.substring(3, 0));
//
// // get everything after index
// console.log(anyString.substring(3));















// // // Example 54: String.prototype.substr(startIndex, length);
// let anyString = 'Mozilla';
//
// // start at index 0 and go upto(not including) index 3
// console.log(anyString.substr(0, 3));
//
// // get last 2 characters
// console.log(anyString.substr(-2, 2));
//
// // get last 2 characters leaving 1 after it
// console.log(anyString.substr(-3, 2));














// // Example 55 : finding the full word from a portion of it - String.prototype.indexOf()
// let message = 'I love javascript and node.js, but I also worked with PHP';
//
// let wordStart = message.indexOf('java');
// let wordEnd = message.indexOf(' ', wordStart);
//
// console.log(message.substring(wordStart, wordEnd));
//
//
//
// wordStart = message.indexOf('no');
// wordEnd = message.indexOf(' ', wordStart);
//
// console.log(message.substring(wordStart, wordEnd));















// // Example 56: length of string
// let message = 'I love javascript and node.js, but I also worked with PHP';
// console.log(message.length);










// // Example 57: Splitting string : String.prototype.split(seperator, limit)
// let message = 'I love javascript and node.js, but I also worked with PHP';
// console.log(message.split(' '));
//
// console.log(message.split(/[ ,]/)); // with regex












// Example 58: Splitting string : String.prototype.split(seperator, limit)
let message = 'a b c d e f';
console.log(message.split(' '));
console.log(message.split(' ', 3));