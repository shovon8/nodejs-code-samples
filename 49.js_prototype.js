// // Example 333 - Basics of [[Prototype]] chain
// var obj1 = {
//     a: 2
// };
//
// // this is obvious
// console.log(obj1.a);
//
//
//
// // creating another object from obj1
// var obj2 = Object.create(obj1);
//
// // how? obj2 don't have a property a.
// // but it is in the prototype chain as it is created from obj1
// console.log(obj2.a);
//
// console.log('a' in obj2);
//
// for(var k in obj2) {
//     console.log(k, obj2[k]);
// }
























// // Example 334 - Object Property Shadowing
// var obj1 = {
//     a: 2
// };
//
// // creating another object from obj1
// var obj2 = Object.create(obj1);
//
// // this is obvious, both are the same
// console.log(obj1.a, obj2.a);
//
//
// // a is modified  through obj2
// obj2.a++;
//
// // the property values are different now
// // a is [[Get]] from the prototype chain and [[Put]] to the current object, which is obj2
// console.log(obj1.a, obj2.a);
























// // Example 335 - Object Property Shadowing
// var obj1 = {
//     a: 2
// };
//
// // creating another object from obj1
// var obj2 = Object.create(obj1);
//
// // this is obvious, both are the same
// console.log(obj1.a, obj2.a);
//
//
// // The only way to change the real a is by accessing it through obj1 in Example 334
// obj1.a = 45;
//
// // now they are the same
// console.log(obj1.a, obj2.a);






















// // Example 336 - Check whether object's property is prototyped or its own
// var obj1 = {
//     a: 2
// };
//
// // creating another object from obj1
// var obj2 = Object.create(obj1);
//
// // obj2 don't have its own property 'a'
// console.log(obj2.hasOwnProperty('a'));
//
// // obj1 does
// console.log(obj1.hasOwnProperty('a'));
// console.log();
//
//
// // now obj2 has a property, but its not the same as obj1, obj1's property is shadowed by the new obj2's 'a'
// // property
// obj2.a = 87;
//
// console.log(obj2.hasOwnProperty('a'));
// console.log(obj1.hasOwnProperty('a'));



















// // Example 337 - Class function
// // The prototype of an object created from a function using 'new' keyword is the same as the
// // prototype of the function by default
// function User() {
//
// }
//
// // creating an object with 'new' keyword
// var a = new User();
//
// // same
// console.log(Object.getPrototypeOf(a));
// console.log(User.prototype);
// console.log();
//
// console.log(Object.getPrototypeOf(a) === User.prototype); // true





















// // Example 338 - constructor of Class function
// function User() {
//
// }
//
// // creating an object with 'new' keyword
// var a = new User();
//
// // same
// console.log(a.constructor);
// console.log(User.prototype.constructor);
// console.log(User);
// console.log();
//
// // if not modified otherwise, a.constructor can be tested to see if it's created from User
// console.log(a.constructor === User); // true



















// // Example 339 - Comparing constructor with class Function is not reliable
// // because it can be overridden
// function User() {
//
// }
//
// // overriding constructor
// User.prototype.constructor = {};
//
// var a = new User();
//
//
// // not same anymore, the default behavior is overridden
// console.log(User);
// console.log(a.constructor);
// console.log();
//
//
// // constructor can be manually fixed
// Object.defineProperty(User.prototype, "constructor", {
//     value: User,
//     configurable: true,
//     writable: true,
//     enumerable: false
// });
//
//
// // they are same again
// console.log(User);
// console.log(a.constructor);
















// // Example 340 - simulating a basic Class in JavaScript
// function User(name) {
//     this.name = name;
// }
//
// User.prototype.printName = function() {
//     console.log(this.name);
// };
//
// var u1 = new User("shovon");
// var u2 = new User("shaikat");
//
// u1.printName();
// u2.printName();
























// // Example 341 - Basic Prototype Inheritance in ES5
// function File(device, size) {
//     this.device = device;
//     this.size = size;
// }
//
// File.prototype.getDevice = function() {
//     return this.device;
// };
//
// File.prototype.getSize = function() {
//     return this.size;
// };
//
//
// function WebFile(name, size, device) {
//     File.call(this, device, size);
//     this.name = name;
// }
//
// // ES5 prototype linking/inheritance
// WebFile.prototype = Object.create(File.prototype);
//
// WebFile.prototype.getName = function() {
//     return this.name;
// };
//
// WebFile.prototype.getSize = function () {
//     return this.size > 1024 ? String(Number(this.size / 1024).toFixed(2)) + " KB" : this.size + " B";
// };
//
//
// var index = new WebFile('index.html', 4423, '/dev/sda1');
//
// console.log(index.getDevice(), index.getName(), index.getSize());

























// // Example 342 - Basic Prototype Inheritance in ES6+
// function File(device, size) {
//     this.device = device;
//     this.size = size;
// }
//
// File.prototype.getDevice = function() {
//     return this.device;
// };
//
// File.prototype.getSize = function() {
//     return this.size;
// };
//
//
// function WebFile(name, size, device) {
//     File.call(this, device, size);
//     this.name = name;
// }
//
// // ES6+ prototype linking/inheritance
// Object.setPrototypeOf(WebFile.prototype, File.prototype);
//
//
// WebFile.prototype.getName = function() {
//     return this.name;
// };
//
// WebFile.prototype.getSize = function () {
//     return this.size > 1024 ? String(Number(this.size / 1024).toFixed(2)) + " KB" : this.size + " B";
// };
//
//
// var index = new WebFile('index.html', 4423, '/dev/sda1');
//
// console.log(index.getDevice(), index.getName(), index.getSize());

























// // Example 343 - instanceof check
// function User(name) {
//     this.name = name;
// }
//
// var u1 = new User("shovon");
// var u2 = new User("shaikat");
//
//
// console.log(u1 instanceof User); // true
// console.log(u2 instanceof User); // true


























// // Example 344 - Checking if two objects are from the same class function
// function User(name) {
//     this.name = name;
// }
//
// var u1 = new User("shovon");
// var u2 = new User("shaikat");
//
// // checks like Example 343
// console.log(User.prototype.isPrototypeOf(u1)); // true
// console.log(User.prototype.isPrototypeOf(u2)); // true
// console.log();
//
// // you can also get the [[Prototype]] using __proto__
// console.log(u1.__proto__);
// console.log(u2.__proto__);
// console.log();
//
// // also test whether they are the same using __proto__
// console.log(u1.__proto__ === u2.__proto__);



























// // Example 345 - we can also get the prototype using Object.getPrototypeOf() property
// function User(name) {
//     this.name = name;
// }
//
//
// var u1 = new User("shovon");
// var u2 = new User("shaikat");
//
//
// // they are the same
// console.log(Object.getPrototypeOf(u1));
// console.log(Object.getPrototypeOf(u2));
// console.log(User.prototype);
//
// // __proto__ also returns the prototype of the created objects
// console.log(u1.__proto__);
// console.log(u2.__proto__);





























// // Example 346 - Polyfill of __proto__
// Object.defineProperty(Object.prototype, '__proto__', {
//     get: function() {
//         return Object.getPrototypeOf(this);
//     },
//     set: function(o) {
//         Object.setPrototypeOf(this, o);
//         return o;
//     }
// });



















// // Example 347 - The best way to create a prototype link is Object.create(LinkingObject)
// var Util = {
//     print: function(str) {
//         console.log(str);
//     }
// };
//
//
// var $ = Object.create(Util);
//
// $.print('hello world');



















// Example 348 - Object.create polyfill
if(!Object.create) {
    Object.create = function(o) {
        function F() {}
        F.prototype = o;

        return (new F());
    };
}





















