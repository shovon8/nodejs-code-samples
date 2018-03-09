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













// // Example 234 - Falsy - Values that coerce to 'false'
// // Values other than these stated here will be coerced to 'true'.
// // Values that are coerced to 'true' are also called Truthy
//
// // Falsy
// console.log("undefined      =   " + Boolean(undefined));
// console.log("null           =   " + Boolean(null));
// console.log("false          =   " + Boolean(false));
// console.log("+0             =   " + Boolean(+0));
// console.log("-0             =   " + Boolean(-0));
// console.log("NaN            =   " + Boolean(NaN));
// console.log('""             =   ' + Boolean(""));
//
// // Truthy
// console.log("[]             =   " + Boolean([]));
// console.log("{}             =   " + Boolean({}));
// console.log("function(){}   =   " + Boolean(function() {}));
// console.log("1              =   " + Boolean(1));
// console.log('"hello"        =   ' + Boolean("hello"));















// // Example 235 - Explicit coercion - String <--> Number
// // Number() and String() functions are used to explicitly coerce between numbers and strings
// var a = 42;
// var b = "47";
//
// var as = String(a);
// var bn = Number(b);
//
//
// console.log(a);
// console.log(as);
//
// console.log(b);
// console.log(bn);
















// // Example 236 - Date coercion
// var d = new Date();
// console.log(+d);
//
//
// var timestamp = +new Date();
// console.log(timestamp);
//
// var timestamp2 = +new Date;
// console.log(timestamp2);
// console.log();
//
//
//
//
// // but preferable method in ES5
// var t1 = (new Date()).getTime();
// var t2 = (new Date).getTime();
// var t3 = new Date().getTime();
//
// console.log(t1);
// console.log(t2);
// console.log(t3);
// console.log();
//
//
// // preferable in ES6
// console.log(Date.now());




















// // Example 237 - ~ coercion
// // ~ is a bitwise operator and does 2's complement on 32-bit number
// // ~ is the same as -(x+1)
// // It is used to make -1 false and others true
// // Used to make codes cleaner in functions that return -1 for failure
// // such as String.indexOf()
// var str = 'hello world';
//
// if(str.indexOf('lo') >= 0) {
//     console.log('found');
// }
//
// if(str.indexOf('ol') === -1) {
//     console.log('not found');
// }
//
// console.log();
//
//
//
// // with ~
// console.log(~str.indexOf('lo'));
// console.log(~str.indexOf('ol'));
// console.log();
//
//
// // ~ converted code
// if(~str.indexOf('lo')) {
//     console.log('found');
// }
//
// if(!~str.indexOf('ol')) {
//     console.log('not found');
// }
//






















// // Example 238 - parsing numeric part from a string
// var borderWidth = "20px";
// var boxWidth = "34.6%";
//
//
// console.log(parseInt(borderWidth));
// console.log(parseFloat(boxWidth));
















// // Example 239 - parseInt can parse hex strings to numbers
// var colorHex = 'fff is white';
// console.log(parseInt(colorHex, 16));
// console.log(parseInt(colorHex, 16).toString(16));















// // Example 240 - parsing octal strings to number
// var oct = "427";
// console.log(parseInt(oct, 8));













// // Example 241 - parsing binary string to number
// var bin = "1011 is a binary number";
// console.log(parseInt(bin, 2));














// // Example 242 - The difference between variable + "" and String(variable)
// // variable + "" -> calls valueOf()
// //  String(a) -> calls toString()
// var a = {
//     valueOf: function() {
//         return "Node.js";
//     },
//     toString: function() {
//         return "JavaScript";
//     }
// };
//
//
// console.log(a + ""); // Node.js
// console.log(String(a)); // JavaScript
//












// // Example 243 - String to Number implicit coercion
// var a = "3.14";
//
// // implicit String -> Number coercion
// var b = a - 0;
// var c = a / 1;
// var d = a * 1;
//
// console.log(typeof a, a);
//
// console.log(typeof b, b);
// console.log(typeof c, c);
// console.log(typeof d, d);













// // Example 244 - Implicit Boolean coercion
// // ! coerce to Boolean but it flips the value from Truthy to Falsy
// // That's why we have to double negate it !!
// console.log(!!null);
// console.log(!!undefined);
// console.log(!!"");
// console.log(!!false);
// console.log(!!0);
// console.log(!!-0);
// console.log(!!+0);
// console.log();
//
// console.log(!!43);
// console.log(!!"hello");





















// // Example 245 - Making sure only one of the argument is Truthy and
// // the others are Falsy
// // Works only on Boolean inputs
// function onlyOne() {
//     var sum = 0;
//
//     for(var i = 0; i < arguments.length; i++) {
//         if(arguments[i]) {
//             sum += arguments[i];
//         }
//     }
//
//     return sum == 1;
// }
//
//
//
// console.log(onlyOne(true, false, false, false));
// console.log(onlyOne(false, false, true, false, false, true));
















// // Example 245 - IMPROVED - Making sure only one of the argument is Truthy and
// // the others are Falsy
// // Works on any type of input
// function onlyOne() {
//     var sum = 0;
//
//     for(var i = 0; i < arguments.length; i++) {
//         sum += Number(!!arguments[i]);
//     }
//
//     return sum == 1;
// }
//
//
//
// console.log(onlyOne(NaN, undefined, "", null));
// console.log(onlyOne(NaN, 1, "", false));
// console.log(onlyOne(NaN, undefined, 1, "", true));
















// // Example 246 - JavaScript || selector
// var a = "hello";
// var b = "world";
// var c = false;
//
//
// console.log(a || c); // 'hello'
// console.log(c || b); // 'world'
//
// // if both are true, for || selector, the first one is returned
// // as it stops checking as soon as a Truthy is found
// console.log(a || b); // 'hello'


















// // Example 247 - JavaScript && selector
// var a = "hello";
// var b = "world";
// var c = undefined;
//
//
// // returns the value that is coerced to false
// console.log(a && c); // undefined
// console.log(c && b); // undefined
//
// // if both are Truthy, returns RHS
// console.log(a && b); // 'world'

















// // Example 248 - || selector equivalent ternary form
// // a || b -> a ? a : b
// (() => {
//     console.log('a="hello", b=undefined');
//
//     var a = 'hello';
//     var b = undefined;
//
//     console.log(a || b);
//     console.log(a ? a : b);
// })();
//
//
//
// console.log();
// (() => {
//     console.log('a=undefined, b="world"');
//
//     var a = undefined;
//     var b = 'world';
//
//     console.log(a || b);
//     console.log(a ? a : b);
// })();
//
//
//
// console.log();
// (() => {
//     console.log('a=undefined, b=null');
//
//     var a = undefined;
//     var b = null;
//
//     console.log(a || b);
//     console.log(a ? a : b);
// })();


























// // Example 249 - && selector equivalent ternary form
// // a && b -> a ? b : a
// (() => {
//     console.log('a="hello", b=undefined');
//
//     var a = 'hello';
//     var b = undefined;
//
//     console.log(a && b);
//     console.log(a ? b : a);
// })();
//
//
//
// console.log();
// (() => {
//     console.log('a=undefined, b="world"');
//
//     var a = undefined;
//     var b = 'world';
//
//     console.log(a && b);
//     console.log(a ? b : a);
// })();
//
//
//
// console.log();
// (() => {
//     console.log('a=undefined, b=null');
//
//     var a = undefined;
//     var b = null;
//
//     console.log(a && b);
//     console.log(a ? b : a);
// })();
























// // Example 250 - || selector is used to set default values in function
// function greet(name, msg) {
//     var name = name || "Shovon";
//     var msg = msg || "How are you?";
//
//     console.log(name + "! " + msg);
// }
//
//
// greet();
// greet("Sharmin", "Good Morning");






















// // Example 251 - && selector is used to check LHS and execute RHS only
// // if LHS is true
// function greet(msg) {
//     msg = msg || "Hello World";
//     console.log(msg);
// }
//
// var msg = "Good Morning";
// msg && greet(msg);
//
//
//
// // greet() function won't execute as msg is Falsy
// msg = undefined;
// msg && greet(msg);














// // Example 252 - null and undefined == comparison
// // null and undefined are equal to itself and each other
// // they are not equal to anything else in JS
// console.log('null == null ->', null == null);
// console.log('undefined == undefined ->', undefined == undefined);
// console.log('null == undefined ->', null == undefined);
// console.log('null == false ->', null == false);
// console.log('undefined == false ->', undefined == false);
// console.log('null == 0 ->', null == 0);
// console.log('undefined == 0 ->', undefined == 0);
// console.log('null == "" ->', null == "");
// console.log('undefined == "" ->', undefined == "");





















// // Example 253 - Comparing objects to non-objects
// var a = "hello";
// var b = Object(a);
//
// console.log(a === b); // false
// console.log(a == b); // true
//
//
//
//
//
//
// // null and undefined can't be boxed
// var c = null;
// var d = Object(a); // can't be boxed -> equivalent to Object()
// console.log(c == d); // false
//
//
// var e = undefined;
// var f = Object(e); // can't be boxed -> equivalent to Object()
// console.log(e == f); // false
//
//
//
//
// var e = NaN;
// var f = Object(e); // boxed to Number
// console.log(e == f); // false as NaN is never equal to itself



















// // Example 254 - Evil tricks from YDKJS - Just for Fun
// var i = 2;
//
// // this is not such a good idea
// Number.prototype.valueOf = function() {
//     return i++;
// };
//
// var a = new Number(42);
//
// if(a == 2 && a == 3) {
//     console.log('this must be a bug');
// }


























