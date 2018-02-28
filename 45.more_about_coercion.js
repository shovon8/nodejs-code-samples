// // Example 220 - Number to String explicit coercion
// var a = 42;
// var b = String(a);
//
// console.log(a, typeof a);
// console.log(b, typeof b);
//
//
//










// // Example 221 - Coercion example
// var n1 = 43;
// var n2 = 23;
//
// console.log(n1 + n2);
// console.log(String(n1) + String(n2));
//
//
// var c = n1 + "";
// var d = n2 + "";
//
// console.log(c + d);















// // Example 222 - toString() method
// var obj1 = {
//     name: 'Shahriar Shovon',
//     country: 'BD'
// };
//
//
// var number = 4.2e99;
//
// console.log(obj1.toString());
// console.log(number.toString());

















// // Example 223 - overriding toString() method
// var obj1 = {
//     name: 'Shahriar Shovon',
//     country: 'BD'
// };
//
// obj1.toString = function() {
//     return ('name=' + this.name + ', country=' + this.country);
// };
//
// console.log(obj1 + ""); // coerced to string
// console.log(obj1.toString()); // calling the toString() method





















// // Example 225 - overriding toString() method
// // it is also possible to modify Object.prototype.toString directly.
// // But it is a bad idea I think
// var obj1 = {
//     name: 'Shahriar Shovon',
//     country: 'BD'
// };
//
// Object.prototype.toString = function() {
//     return ('name=' + this.name + ', country=' + this.country);
// };
//
// console.log(obj1 + ""); // coerced to string
// console.log(obj1.toString()); // calling the toString() method




















// // Example 226 - overriding toString() method
// // it is also possible to modify Object.prototype.toString directly.
// // But it is a bad idea I think
// // I am trying to make it safer by returning/preserving the default value of toString() when
// // 'name' and 'country' properties are not available
// var obj1 = {
//     name: 'Shahriar Shovon',
//     country: 'BD'
// };
//
// var obj2 = {
//     name: 'Sharmin Akter',
//     gender: 'Female'
// };
//
// var obj3 = {
//     name: 'Shaikat',
//     country: 'BD'
// };
//
//
//
// // preserving the default toString()
// var toStringObject = Object.prototype.toString;
//
// Object.prototype.toString = function() {
//     if(this.name && this.country) {
//         return ('name=' + this.name + ', country=' + this.country);
//     }
//
//     return toStringObject.apply(this);
// };
//
//
//
// console.log(obj1 + ""); // coerced to string
// console.log(obj1.toString()); // calling the toString() method
//
// console.log('\n');
// console.log(obj2 + "");
// console.log(obj2.toString());
//
// console.log('\n');
// console.log(obj3 + "");
// console.log(obj3.toString());





























// // Example 227 - overriding toString() method
// // it is also possible to modify Object.prototype.toString directly.
// // But it is a bad idea I think
// // I am trying to make it safer by returning/preserving the default value of toString() when
// // 'name' and 'country' properties are not available
//
//
// // Using IIFE (Immediately Invoked Function Expression) to make the code modular
// (function() {
//     var toStringObject = Object.prototype.toString;
//
//     Object.prototype.toString = function() {
//         if(this.name && this.country) {
//             return ('name=' + this.name + ', country=' + this.country);
//         }
//
//         return toStringObject.apply(this);
//     };
// })();
//
//
//
//
//
//
//
// var obj1 = {
//     name: 'Shahriar Shovon',
//     country: 'BD'
// };
//
// var obj2 = {
//     name: 'Sharmin Akter',
//     country: 'BD'
// };
//
// var obj3 = {
//     name: 'Shaikat',
//     location: 'BD'
// };
//
//
//
// console.log(obj1 + ""); // coerced to string
// console.log(obj1.toString()); // calling the toString() method
//
// console.log('\n');
// console.log(obj2 + "");
// console.log(obj2.toString());
//
// console.log('\n');
// console.log(obj3 + "");
// console.log(obj3.toString());































// // Example 228 - Same as 227 but without toStringObject variable
// // The code works the same way and I think it is better optimized
// // as the default toString() can still be accessed through the use of toStringDefault()
//
//
// // Using IIFE (Immediately Invoked Function Expression) to make the code modular
// (function() {
//     Object.prototype.toStringDefault = Object.prototype.toString;
//
//     Object.prototype.toString = function() {
//         if(this.name && this.country) {
//             return ('name=' + this.name + ', country=' + this.country);
//         }
//
//         // // this one also works
//         // return Object.prototype.toStringDefault.apply(this);
//         return this.toStringDefault();
//     };
// })();
//
//
//
//
//
//
//
// var obj1 = {
//     name: 'Shahriar Shovon',
//     country: 'BD'
// };
//
// var obj2 = {
//     name: 'Sharmin Akter',
//     country: 'BD'
// };
//
// var obj3 = {
//     name: 'Shaikat',
//     location: 'BD'
// };
//
//
//
// console.log(obj1 + ""); // coerced to string
// console.log(obj1.toString()); // calling the toString() method
//
// console.log('\n');
// console.log(obj2 + "");
// console.log(obj2.toString());
//
// console.log('\n');
// console.log(obj3 + "");
// console.log(obj3.toString());



















// // Example 229 - Tweaking JSON.stringify using ObjectVariable.toJSON
// // If an object is passed to JSON.stringify and if you want only specific properties
// // to be included, then you can override ObjectVariable.toJSON() and return a JSON
// // object with the specific properties
// var objectVar = {
//     name: 'Shahriar Shovon',
//     country: 'BD',
//     id: 'H7539482O',
//     print: function () {
//         console.log('id=' + this.id + ', name=' + this.name + ', country=' + this.country);
//     }
// };
//
//
// // You could use the print() method to print the information
// objectVar.print();
//
//
// // now you want to make a JSON string out of objectVar and you don't want print() there
//
// // this works, as functions are automatically removed when you use JSON.stringify()
// console.log(JSON.stringify(objectVar));
//
//
// // what if you also want to remove 'id'?
// objectVar.toJSON = function() {
//
//     // return the properties you want your JSON.stringify() to include
//     return {
//         name: this.name,
//         country: this.country
//     };
// };
//
// // you should see only the required properties are JSON.stringify(ied :-D)
// console.log(JSON.stringify(objectVar));


































// // Example 230 - The same thing as Example 229 can be done using a second parameter
// // to JSON.stringify() called a 'replacer'
// // if 'replacer' is an array - the value of each index of the array is assumed the key of the
// //                          object and returned
// // if 'replacer' is a function - it takes two argument, key and value. if a test returns undefined
// //                          it is not included in the final output
// var objectVar = {
//     name: 'Shahriar Shovon',
//     country: 'BD',
//     id: 'H7539482O',
//     print: function () {
//         console.log('id=' + this.id + ', name=' + this.name + ', country=' + this.country);
//     }
// };
//
//
// // You could use the print() method to print the information
// objectVar.print();
//
//
// // Only 'name' and 'country' is stringified
// console.log(JSON.stringify(objectVar, ['name', 'country']));
//
//
// // can also be done using the replacer() function
// console.log(JSON.stringify(objectVar, function(key, value) {
//     if(key !== 'id') {
//         return value;
//     }
//
//     return undefined;
// }));





















// // Example 231 - A third parameter can be passed to JSON.stringify() to specify spaces or padding
// // it can be a Number or a String
// var objectVar = {
//     name: 'Shahriar Shovon',
//     country: 'BD',
//     id: 'H7539482O',
//     favorites: {
//         books: ['Story of Life', 'JavaScript the Good Parts'],
//         games: ['GTA Sanandreas', 'GTA V']
//     }
// };
//
//
//
// // 4 spaces for each tab
// console.log(JSON.stringify(objectVar, null, 4));
//
// // ---- string for each tab
// console.log(JSON.stringify(objectVar, null, '----'));




























// // Example 232 - overriding valueOf and toString for Number coercion
// var a = {
//     valueOf: function () {
//         return "42";
//     }
// };
//
//
// var b = {
//     toString: function() {
//         return "42";
//     }
// };
//
//
//
// var c = [4, 2];
// c.toString = function() {
//     return this.join("");
// };
//
//
// console.log(Number(a), Number(b), Number(c));



















// // Example 233 - Having different values for String and Number coercion
// var d = {
//     valueOf: function () {
//         return "1509026";
//     },
//     toString: function () {
//         return "Shahriar Shovon"
//     }
// };
// console.log(Number(d));
// console.log(String(d));













// Example 234 - Falsy - Values that coerce to 'false'
// Values other than these stated here will be coerced to 'true'.
// Values that are coerced to 'true' are also called Truthy

// Falsy
console.log("undefined      =   " + Boolean(undefined));
console.log("null           =   " + Boolean(null));
console.log("false          =   " + Boolean(false));
console.log("+0             =   " + Boolean(+0));
console.log("-0             =   " + Boolean(-0));
console.log("NaN            =   " + Boolean(NaN));
console.log('""             =   ' + Boolean(""));

// Truthy
console.log("[]             =   " + Boolean([]));
console.log("{}             =   " + Boolean({}));
console.log("function(){}   =   " + Boolean(function() {}));
console.log("1              =   " + Boolean(1));
console.log('"hello"        =   ' + Boolean("hello"));

