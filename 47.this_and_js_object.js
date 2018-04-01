// // Example 263 - Simple example of this and call()
// function sayHello() {
//     console.log("Hello, " + this.name);
// }
//
//
//
// var user = {
//     name: 'Shovon'
// };
//
//
// // call sayHello and bind user object to it
// sayHello.call(user);
//
// sayHello.call({name: 'Shaikat'});

















// // Example 264 - Simple example of this and call()
// function nameTransformer() {
//     return this.name.toUpperCase();
// }
//
//
// function sayHello() {
//     var greeting = "Hello, " + nameTransformer.call(this);
//
//     console.log(greeting);
// }
//
//
//
//
//
// var user1 = {
//     name: 'Riley'
// };
//
// var user2 = {
//     name: 'Taylor'
// };
//
// sayHello.call(user1);
// sayHello.call(user2);






















// // Example 265 - Simple example of this and call()
// // Trying to change the value of an object's
// // property from inside the function using 'this' reference
// function transformName() {
//     var _tmp = String(this.name);
//
//     this.name = this.name.toUpperCase();
//
//     return _tmp;
// }
//
//
//
// var user = {
//     name: 'Shahriar Shovon'
// };
//
// var returnValue = transformName.call(user);
//
// console.log(returnValue);
// console.log(user.name);




















// // Example 266 - Simple example of this and call()
// // Trying to change the value of an object's
// // property from inside the function using 'this' reference
// function transformUpper() {
//     this.name = this.name.toUpperCase();
// }
//
// function transformLower() {
//     this.name = this.name.toLowerCase();
// }
//
// function transformMD5() {
//     var crypto = require('crypto');
//
//     this.name = crypto.createHash('md5').update(this.name).digest('hex');
// }
//
//
// function transform() {
//     if(!this.type) {
//         this.type = 'U'; // fallback
//     }
//
//     var _tmp = String(this.name);
//
//     switch(this.type) {
//         case 'U':
//             transformUpper.call(this);
//             break;
//         case 'L':
//             transformLower.call(this);
//             break;
//         case 'M':
//             transformMD5.call(this);
//             break;
//     }
//
//     return _tmp; // return old string
// }
//
//
//
// var user = {
//     name: 'Shahriar Shovon'
// };
//
// var returnValue = transform.call(user);
//
// console.log(returnValue);
// console.log(user.name);
// console.log();
//
//
//
//
//
// user = {
//     name: 'Shahriar Shovon',
//     type: 'U'
// };
//
// returnValue = transform.call(user);
//
// console.log(returnValue);
// console.log(user.name);
// console.log();
//
//
//
//
//
//
// user = {
//     name: 'Shahriar Shovon',
//     type: 'L'
// };
//
// returnValue = transform.call(user);
//
// console.log(returnValue);
// console.log(user.name);
// console.log();
//
//
//
//
//
//
// user = {
//     name: 'Shahriar Shovon',
//     type: 'M'
// };
//
// returnValue = transform.call(user);
//
// console.log(returnValue);
// console.log(user.name);
// console.log();

























// // Example 267 - Counting Named Function call without this
// function sayHello() {
//     sayHello.count++;
//     console.log("Hello");
// }
//
// sayHello.count = 0;
//
//
// sayHello();
// sayHello();
// sayHello();
//
// console.log(sayHello.count);

















// // Example 268 - Counting Named Function call with this using Function.prototype.call()
// // Function.prototype.call(objectToReplacethisWith, arg1, arg2, arg...);
// function sayHello(iterationId) {
//     this.count++;
//     console.log("[ " + iterationId + " ] Hello");
// }
//
// sayHello.count = 0;
//
//
// for(var i = 1; i <=5; i++) {
//     sayHello.call(sayHello, i);
// }
//
// console.log(sayHello.count);




























// // Example 269 - Default binding of this
// function sayHello() {
//     // sayHello called from global scope, so this refers to the global scope
//     // variable
//     console.log("Hello, " + this.name);
// }
//
//
// var name = 'Shahriar Shovon';
//
// sayHello(); // in browser -> Hello, Shahriar Shovon






















// // Example 270 - Implicit binding of this
// function sayHello() {
//     console.log("Hello, " + this.name);
// }
//
//
// var obj = {
//     name: "Shahriar Shovon",
//     sayHello: sayHello
// };
//
//
// obj.sayHello();























// // Example 271 - Implicit binding of this
// function sayHello() {
//     console.log("Hello, " + this.name);
// }
//
//
// var obj2 = {
//     name: "Sheldon Cooper",
//     sayHello: sayHello
// };
//
//
// var obj1 = {
//     name: "Shahriar Shovon",
//     obj2: obj2
// };
//
// // obj2.name overrides obj1.name, only the current this counts
// obj1.obj2.sayHello();














// // Example 272 - Cases where Implicit binding of this is lost
// // Works in Browser
// function sayHello() {
//     console.log("Hello " + this.name);
// }
//
//
// var obj = {
//     name: "Shahriar Shovon",
//     sayHello: sayHello
// };
//
//
// var sayHelloAlias = obj.sayHello;
//
// var name = "Sheldon Cooper";
//
// // called from the global scope
// sayHelloAlias(); // Sheldon Cooper
//
//
// obj.sayHello(); // Shahriar Shovon












// // Example 273 - Implicit binding is also lost if it's used in callback this way
// // Works in Browser
// function sayHello() {
//     console.log("Hello " + this.name);
// }
//
//
// function doTask(fn) {
//     fn();
// }
//
// var obj = {
//     name: "Shahriar Shovon",
//     sayHello: sayHello
// };
//
//
// var name = "Sheldon Cooper";
//
// doTask(obj.sayHello); // Sheldon Cooper












// // Example 274 - Implicit binding is also lost fixed with simple trick
// // Works in Browser
// function sayHello() {
//     console.log("Hello " + this.name);
// }
//
//
// function doTask(obj, fn) {
//     obj[fn]();
// }
//
// var obj = {
//     name: "Shahriar Shovon",
//     sayHello: sayHello
// };
//
//
// var name = "Sheldon Cooper";
//
// doTask(obj, 'sayHello'); // Shahriar Shovon



















// // Example 275 - Implicit binding is also lost in built-in function
// // Works in Browser
// function sayHello() {
//     console.log("Hello " + this.name);
// }
//
//
//
//
// var obj = {
//     name: "Shahriar Shovon",
//     sayHello: sayHello
// };
//
//
// var name = "Sheldon Cooper";
//
// setTimeout(obj.sayHello, 1000); // Sheldon Cooper


















// // Example 276 - Implicit binding is also lost in built-in function
// // Works in Browser
// function sayHello() {
//     console.log("Hello " + this.name);
// }
//
//
//
//
// var obj = {
//     name: "Shahriar Shovon",
//     sayHello: sayHello
// };
//
//
// var name = "Sheldon Cooper";
//
// setTimeout(function() {
//     obj.sayHello();
// }, 1000); // Shahriar Shovon














// // Example 277 - Explicit binding - forcing 'this' to be another object
// // Works in Browser
// function sayHello() {
//     console.log("Hello " + this.name);
// }
//
//
//
//
// var obj = {
//     name: "Shahriar Shovon"
// };
//
//
// // Force 'obj' to be 'this'
// sayHello.call(obj);













// // Example 278 - Explicit binding - forcing 'this' to be another object
// function sayHello() {
//     console.log("Hello " + this.name);
// }
//
//
//
//
// var obj = {
//     name: "Shahriar Shovon"
// };
//
//
// // Force 'obj' to be 'this'
// sayHello.call(obj);

















// // Example 279 - Explicit binding - forcing 'this' to be another object in built-in function like setTimeout()
// // DOESN'T WORK - We need hard binding for this
// function sayHello() {
//     console.log("Hello " + this.name);
// }
//
//
//
//
// var obj = {
//     name: "Shahriar Shovon"
// };
//
//
// // Force 'obj' to be 'this' - Doesn't work
// setTimeout.call(obj, sayHello, 1000);



















// // Example 280 - Hard binding - forcing 'this' to be another object in built-in function like setTimeout()
// function sayHello() {
//     console.log("Hello " + this.name);
// }
//
//
// var obj = {
//     name: "Shahriar Shovon"
// };
//
// // Hard binding - sayHelloCallbackable won't loose it's this binding anymore
// var sayHelloCallbackable = function() {
//     sayHello.call(obj);
// };
//
//
//
// setTimeout(sayHelloCallbackable, 100); // Shahriar  Shovon
//
//
// // this can't be overriden anymore - because this was hardly bound
// sayHelloCallbackable.call({
//     name: "Sheldon Cooper"
// });





















// // Example 281 - Hard binding binding - Also passing arguments
// function add(y) {
//     console.log("adding " + this.x + ", " + y);
//     return this.x + y;
// }
//
//
// var obj = {
//     x: 5
// };
//
// // Hard binding - sayHelloCallbackable won't loose it's this binding anymore
// var addCallbackable = function() {
//     return add.apply(obj, arguments);
// };
//
//
//
// console.log(addCallbackable(5));

















// // Example 282 - ES6 spread and rest operator
// // 'arguments' in function is deprecated in ES6.
// // With spread and rest operators, we can do the same in ES6
//
// // Rest operator - combines function arguments to an Array
// function printFriends(...friends) {
//     for(var i = 0; i < friends.length; i++) {
//         console.log(friends[i]);
//     }
// }
//
//
// printFriends("Alex", "Barney", "Jenny");
//
//
// console.log('------------------------------\n');
//
//
// var names = ["Alex", "Barney", "Chelsey"];
// // Spread Operator - Array expands to function parameters
// printFriends(...names);


















// // Example 283 - Hard binding - Also passing arguments - ES6 way - without using 'arguments'
// function add(...numbers) {
//     var sum = this.x;
//
//     console.log("adding " + this.x + "," + numbers.toString());
//
//     for(var i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }
//
//     return sum;
// }
//
//
// var obj = {
//     x: 10
// };
//
// // Hard binding - addNumbers won't loose it's this binding anymore
// var addNumbers = function(...numbers) {
//     return add.apply(obj, numbers);
// };
//
//
//
// console.log(addNumbers(5, 1, 2, 2));






















// // Example 284 - Hard binding - Making a reusable helper (ES5)
// function bind(fn, obj) {
//     return function() {
//         // arguments is deprecated in ES6
//         return fn.apply(obj, arguments);
//     };
// }
//
//
//
// function add() {
//     var sum = this.x;
//
//     console.log("adding " + this.x + "," + arguments.toString());
//
//     for(var i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }
//
//     return sum;
// }
//
//
// var obj = {
//     x: 10
// };
//
// // Hard binding - addNumbers won't loose it's this binding anymore
// var addNumbers = bind(add, obj);
//
// console.log(addNumbers(5, 1, 2, 2));
















// // Example 285 - Hard binding - Making a reusable helper (ES6)
// function bind(fn, obj) {
//     return function(...args) {
//         return fn.apply(obj, args);
//     };
// }
//
//
//
// function add(...numbers) {
//     var sum = this.x;
//
//     console.log("adding " + this.x + "," + numbers.toString());
//
//     for(var i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }
//
//     return sum;
// }
//
//
// var obj = {
//     x: 10
// };
//
// // Hard binding - addNumbers won't loose it's this binding anymore
// var addNumbers = bind(add, obj);
//
// console.log(addNumbers(5, 1, 2, 2));

























// // Example 286 - Hard binding - it is so common that ES5 has Function.prototype.bind built-in
// function add(...numbers) {
//     var sum = this.x;
//
//     console.log("adding " + this.x + "," + numbers.toString());
//
//     for(var i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }
//
//     return sum;
// }
//
//
// var obj = {
//     x: 10
// };
//
// // Hard binding - Using ES5 Function.prototype.bind()
// var addNumbers = add.bind(obj);
//
// console.log(addNumbers(5, 1, 2, 2));























// // Example 287 - 'new' binding of 'this'
// function User(name) {
//     this.name = name;
// }
//
//
// var shovon = new User("Shovon");
// console.log(shovon.name);














// // Example 288 - this binding can be ignored from call() or apply() if
// // null or undefined is passed as this
// function sayHello() {
//     console.log("Hello " + this.name);
// }
//
//
// var name = "Shovon";
//
// sayHello.call(null); // this default's to global
// sayHello.call(undefined);













// // Example 289 - this = null/undefined in call() or apply() - used in spreading the array to function argument
// function  add(a, b) {
//     console.log("a: " + a + ", b: " + b);
//     console.log(a + b);
// }
//
//
// add.apply(null, [4, 5]);

















// // Example 290 - this = null/undefined in bind - used in currying parameters
// // same as Example 289
// function  add(a, b) {
//     console.log("a: " + a + ", b: " + b);
//     console.log(a + b);
// }
//
//
// var addNumbers = add.bind(null, 4);
// addNumbers(5);



















// // Example 291 - this = null/undefined in call() or apply() - used in spreading the array to function argument
// // But using null/undefined has risks. So it's better to use an empty object to create a DMZ
// // {} or Object.create(null) may be used to create an empty object
// // Object.create(null) is more lightweight than {}
// function  add(a, b) {
//     console.log("a: " + a + ", b: " + b);
//     console.log(a + b);
// }
//
// var emptyObj = Object.create(null);
//
// add.apply(emptyObj, [4, 5]);
















// // Example 292 - Indirection
// function sayHello() {
//     console.log("Hello " + this.name);
// }
//
//
// var name = "Alex";
//
// var a = {
//     name: "Billy",
//     sayHello: sayHello
// };
//
// var b = {
//     name: "Chelsea"
// };
//
//
// sayHello();
// a.sayHello();
//
// (b.sayHello = a.sayHello)(); // implicit binding is lost - default binding
//
// b.sayHello = a.sayHello;
// b.sayHello();
























// // Example 293 - ES6 Arrow Function - new binding of this
// // ES6 arrow function this binds to lexical scope (global or function scope)
// function add() {
//     return () => {
//         console.log(this.a + this.b);
//     };
// }
//
//
// var obj1 = {
//     a: 5,
//     b: 10
// };
//
// var obj2 = {
//     a: 8,
//     b: 12
// };
//
// var addNumbers = add.call(obj1); // binds obj1 to this of arrow function
// addNumbers(); // 15
//
//
// // can't override this from obj1 to obj2
// addNumbers.call(obj2); // 15






















// // Example 294 - ES6 Arrow Function - new binding of this
// // ES6 arrow function this binds to lexical scope (global or function scope)
// function sayHello() {
//     console.log("sayHello starts.");
//
//     setTimeout(() => {
//         console.log("Hello " + this.name);
//         console.log("sayHello ends.");
//     }, this.timeOffset * 1000);
// }
//
//
// sayHello.call({name: "Shovon", timeOffset: 5});
// sayHello.call({name: "Alex", timeOffset: 2});




















// // Example 295 - ES6 Arrow Function alternative in ES5
// // this can be stored in a variable let's say self to have the same behavior as the arrow function
// function sayHello() {
//     var self = this;
//     console.log("sayHello starts.");
//
//     setTimeout(function() {
//         console.log("Hello " + self.name);
//         console.log("sayHello ends.");
//     }, self.timeOffset * 1000);
// }
//
//
// sayHello.call({name: "Shovon", timeOffset: 5});
// sayHello.call({name: "Alex", timeOffset: 2});




















// // Example 296 - Object's have two forms
// // 1. Literal or declarative form
// // 2. Constructed form
//
// // literal form
// var user = {
//     name: "Shahriar Shovon",
//     country: "BD"
// };
//
//
// // constructed form
// var friend = new Object();
// friend.name = "Alex Cooper";
// friend.country = "US";
//
//
// console.log(user);
// console.log(friend);






















// // Example 297 - string primitive vs String object
// // string and strings made with String() are string primitive
// // strings created with (new String()) are object
// var strPrimitive = "hello world";
// var strObject = new String("hello js");
// var strObject2 = String("hello web");
//
// console.log(typeof strPrimitive);
// console.log(strPrimitive instanceof String);
// console.log();
//
// console.log(typeof strObject);
// console.log(strObject instanceof String);
// console.log();
//
// console.log(typeof strObject2);
// console.log(strObject2 instanceof String);
// console.log();
//
//
//
//
// // all of them says "[object String]"
// console.log(Object.prototype.toString.call(strPrimitive));
// console.log(Object.prototype.toString.call(strObject));
// console.log(Object.prototype.toString.call(strObject2));





















// // Example 298 - string primitive vs String object
// var strPrimitive = "hello world";
// var strObject = new String("hello js");
// var strObject2 = String("hello web");
//
//
// // comparing string object
// console.log(Object.prototype.toString.call(strPrimitive) === Object.prototype.toString.call(""));
// console.log(Object.prototype.toString.call(strObject) === Object.prototype.toString.call(""));
// console.log(Object.prototype.toString.call(strObject2) === Object.prototype.toString.call(""));






























// // Example 299 - JS coerces string primitive to String Object automatically when needed
// // 'length' property is not available to string primitive, but string object
// // but we can access the 'length' property even when a string primitive is used to create a string
// var str = "hello world";
// console.log(str.length);



























// // Example 300 - Object properties and ways of accessing object properties
//
// // properties can be added while the object is being created
// var obj = {
//     name: "Shovon"
// };
//
// // properties can be added after the object is created one of these ways
// obj.country = "BD";
// obj['favoriteColor'] = 'xyz';
//
//
//
// // properties can be accessed one of these ways
// console.log(obj.name);
// console.log(obj["country"]);
//
//
// // printing the whole object
// console.log(obj);




























// // Example 301 - In JS property name of an object is always a string
// // if anything other than string is specified, then first it is converted to string
// var obj = {};
//
// obj[true] = "this is true";
// obj[5] = "this is 5";
// obj[58.8] = "this is 58.8";
// obj[obj] = "this is [object Object]";
//
//
// // true coerced to string is "true"
// // 5 coerced to string is "5"
// // 58.8 coerced to string is "58.8"
// // obj coerced to string is "[object Object]"
// console.log(obj["true"]);
// console.log(obj["5"]);
// console.log(obj["58.8"]);
// console.log(obj["[object Object]"]);




























// // Example 301 - Computer ES6 properties
// var prefix = "sh_";
//
// var obj = {
//     [prefix + "name"]: "Shovon",
//     [prefix + "country"]: "BD"
// };
//
//
//
// console.log(obj['sh_name']);
// console.log(obj['sh_country']);























// // Example 302 - Objects and Arrays are references
// var friends = ['Alex', 'Chelsea'];
// var obj1 = {
//     b: 7,
// };
//
//
// var obj2 = {
//     obj1: obj1,
//     friends: friends
// };
//
// console.log(friends);
// console.log(obj1);
// console.log(obj2);
// console.log();
//
//
// // changing obj2
// obj2.friends.push('Miley');
// obj2.obj1.b = 85;
//
// // changing values in obj2 changes friends and obj1.b
// // because they are references
// console.log(friends);
// console.log(obj1);
// console.log(obj2);





















// // Example 303 - To make an actual copy of Objects, it can be converted to JSON string and then parsed
// // back to JSON. But the object must be JSON-safe, which is not the case all the time
// var friends = ['Alex', 'Chelsea'];
// var obj1 = {
//     b: 7,
// };
//
//
// // copying Object with JSON.parse(JSON.stringify(obj))
// var obj2 = JSON.parse(JSON.stringify({
//     obj1: obj1,
//     friends: friends
// }));
//
//
// console.log(friends);
// console.log(obj1);
// console.log(obj2);
// console.log();
//
// // changing obj2
// obj2.friends.push('Miley');
// obj2.obj1.b = 85;
//
// // friends and obj1 are preserved, only obj2 changed.
// console.log(friends);
// console.log(obj1);
// console.log(obj2);




















// // Example 304 - To make a shallow copy (not real copies) of Objects, ES6 Object.assign(destination, source) can be used
// var friends = ['Alex', 'Chelsea'];
// var obj1 = {
//     b: 7,
// };
//
//
// // copying Object with JSON.parse(JSON.stringify(obj))
// var obj2 = Object.assign({}, {
//     obj1: obj1,
//     friends: friends
// });
//
//
// console.log(friends);
// console.log(obj1);
// console.log(obj2);
// console.log();
//
// // changing obj2
// obj2.friends.push('Miley');
// obj2.obj1.b = 85;
//
// // friends and obj1 are also changed
// console.log(friends);
// console.log(obj1);
// console.log(obj2);

























// // Example 305 - In ES5, all the properties have additional properties, called 'property descriptor'
// // Object.getOwnPropertyDescriptor(object, 'objectPropertyName');
// var obj = {
//     name: 'Shovon'
// };
//
// var propDesc = Object.getOwnPropertyDescriptor(obj, 'name');
// console.log(propDesc);


















// // Example 306 - In ES5, all the properties have additional properties, called 'property descriptor'
// // Object.getOwnPropertyDescriptor(object, 'objectPropertyName');
// var obj = {
//     name: 'Shovon'
// };
//
// var propDesc = Object.getOwnPropertyDescriptor(obj, 'name');
// console.log(propDesc);
















// // Example 307 - The 'writable' property descriptor
// // if writable=true, the object's property value can be changed.
// // if writable=false, the object's property value can't be changed.
// // in strict mode, TypeError is thrown in object's property value is attempted to change when writable=false
//
//
// var myObject = {};
//
// Object.defineProperty(myObject, 'name', {
//     value: 'Shovon',
//     writable: false,
//     configurable: true,
//     enumerable: true
// });
//
// console.log(Object.getOwnPropertyDescriptor(myObject, 'name'));
// console.log();
//
//
// console.log(myObject);
// console.log();
//
//
// // trying to change myObject.name
// myObject.name = 'Sharmin';
//
// // it won't change
// console.log(myObject);


























// // Example 308 - The 'writable' property descriptor
// // if writable=true, the object's property value can be changed.
// // if writable=false, the object's property value can't be changed.
// // in strict mode, TypeError is thrown in object's property value is attempted to change when writable=false
//
//
// // In strict mode, it throws TypeError
// "use strict";
//
// var myObject = {};
//
// Object.defineProperty(myObject, 'name', {
//     value: 'Shovon',
//     writable: false,
//     configurable: true,
//     enumerable: true
// });
//
// console.log(Object.getOwnPropertyDescriptor(myObject, 'name'));
// console.log();
//
//
// console.log(myObject);
// console.log();
//
//
// // trying to change myObject.name
// myObject.name = 'Sharmin';
//
// // it won't change
// console.log(myObject);
























// // Example 309 - Same as Example 308 - catching TypeError
// // In strict mode, it throws TypeError
// "use strict";
//
// var myObject = {};
//
// Object.defineProperty(myObject, 'name', {
//     value: 'Shovon',
//     writable: false,
//     configurable: true,
//     enumerable: true
// });
//
// console.log(Object.getOwnPropertyDescriptor(myObject, 'name'));
// console.log();
//
//
// console.log(myObject);
// console.log();
//
//
// try {
//     // trying to change myObject.name
//     myObject.name = 'Sharmin';
//
//     console.log(myObject);
// } catch(e) {
//     console.log(e.name === "TypeError");
//     console.log(e instanceof TypeError);
// }
























// // Example 310 - configurable property descriptor of object
// // if configurable=false, the other property descriptor can't be redefined with Object.defineProperty() method
// // strict mode or not, it will throw TypeError
// "use strict";
//
// var obj = {};
//
// Object.defineProperty(obj, 'name', {
//     value: 'Shovon',
//     configurable: false,
//     writable: true,
//     enumerable: true
// });
//
// console.log(obj);
// console.log(Object.getOwnPropertyDescriptor(obj, 'name'));
//
//
// // changing value works
// obj.name = 'Shaikat';
// console.log(obj);
//
//
// // trying to change the property descriptor
// Object.defineProperty(obj, 'name', {
//     value: 'Shovon',
//     configurable: true,
//     writable: true,
//     enumerable: true
// });
//
//
// console.log(Object.getOwnPropertyDescriptor(obj, 'name'));





















// // Example 311 - configurable property descriptor of object
// // if configurable=false, writable can be changed from true to false, but not vice-versa
// "use strict";
//
// var obj = {};
//
// Object.defineProperty(obj, 'name', {
//     value: 'Shovon',
//     configurable: false,
//     writable: true,
//     enumerable: true
// });
//
// console.log(Object.getOwnPropertyDescriptor(obj, 'name'));
//
//
//
// // trying to change the property descriptor
// Object.defineProperty(obj, 'name', {
//     value: 'Shovon',
//     configurable: false,
//     writable: false,
//     enumerable: true
// });
//
//
// console.log(Object.getOwnPropertyDescriptor(obj, 'name'));


























// // Example 312 - configurable property descriptor of object
// // if configurable=false, then 'delete' can't be used to delete a property from an object
//
//
// // // in strict mode, throws TypeError
// // "use strict";
//
// var obj = {};
//
// Object.defineProperty(obj, 'name', {
//     value: 'Shovon',
//     configurable: false,
//     writable: true,
//     enumerable: true
// });
//
//
//
// // attempt to delete a property
// delete obj.name;
//
// // delete fails
// console.log(obj);






















// // Example 313 - 'enumerable' property
// // if enumerable=true, the property is available in for..in loop
// // if enumerable=false, the property is hidden from for..in loop
// var obj = {
//     name: 'Shahriar Shovon',
//     country: 'BD',
//     id: '4213fa2d'
// };
//
//
//
// console.log('When enumeration is false:');
// // we don't want password to show up on enumeration
// Object.defineProperty(obj, 'password', {
//     value: 'BDx54#',
//     enumerable: false,
//     writable: true,
//     configurable: true
// });
//
// for(var key in obj) {
//     console.log(key, '=', obj[key]);
// }
//
//
// console.log();
//
//
//
// console.log('When enumeration is true:');
//
// // if enumeration=true for password, then it will show up on for..in loop
// Object.defineProperty(obj, 'password', {
//     value: 'BDx54#',
//     enumerable: true,
//     writable: true,
//     configurable: true
// });
//
// for(var key in obj) {
//     console.log(key, '=', obj[key]);
// }



















// // Example 314 - Making immutable object property
// var obj = {};
//
// Object.defineProperty(obj, 'NUMBER', {
//     value: 12,
//     configurable: false,
//     writable: false,
//     enumerable: true
// });
//
// console.log(obj);
// console.log(Object.getOwnPropertyDescriptor(obj, 'NUMBER'));
// console.log();
//
//
// // trying to change obj.NUMBER - should fail
// obj.NUMBER = 32;
// console.log(obj);














// // Example 315 - Preventing extension on Object
// var obj = {
//     name: 'Shahriar Shovon',
//     country: 'BD'
// };
//
//
// // now you can't add any more property to the object
// Object.preventExtensions(obj);
//
// obj.id = 4554; // won't be added and will throw TypeError in strict mode
//
// console.log(obj);























// // Example 316 - Sealing an Object
// // calls Object.preventExtensions(obj) and sets configurable property descriptor to false
// // so you
// //          - can't add new properties
// //          - can't reconfigure it
// //          - can't delete any property of it
// //          - can modify existing property value
// var obj = {
//     name: 'Shahriar Shovon',
//     country: 'BD'
// };
//
// Object.seal(obj);
//
//
// console.log('Before Adding New Property:');
// console.log(obj);
// console.log();
//
// // can't add new properties
// obj.id = 445;
// console.log('After Adding New Property:');
// console.log(obj);
// console.log();
//
//
//
// console.log('Attempting to Reconfigure the Object:');
// try {
//     // can't reconfigure it
//     console.log(Object.getOwnPropertyDescriptor(obj, 'name'));
//
//     Object.defineProperty(obj, 'name', {
//         configurable: true
//     });
//
//     console.log(Object.getOwnPropertyDescriptor(obj, 'name'));
//     console.log();
// } catch(e) {
//     console.log(e instanceof TypeError ? "Can't reconfigure object" : "");
//     console.log(e.name === 'TypeError' ? "Can't reconfigure object" : "");
//     console.log();
// }
//
//
//
//
// // can't delete existing property
// console.log('Before delete:');
// console.log(obj);
// console.log();
//
// delete obj.country;
// console.log('After delete:');
// console.log(obj);
// console.log();
//
//
//
// // existing property can be modified
// console.log('Before Property Modified:');
// console.log(obj);
// console.log();
//
//
// obj.country = 'US';
// console.log('After Property Modified:');
// console.log(obj);


























// // Example 317 - Freezing an Object
// // calls Object.seal(obj) and sets editable property descriptor to false
// // so you
// //          - can't add new properties
// //          - can't reconfigure it
// //          - can't delete any property of it
// //          - can't modify existing property value
// var obj = {
//     name: 'Shahriar Shovon',
//     country: 'BD'
// };
//
// Object.freeze(obj);
//
//
// console.log('Before Adding New Property:');
// console.log(obj);
// console.log();
//
// // can't add new properties
// obj.id = 445;
// console.log('After Adding New Property:');
// console.log(obj);
// console.log();
//
//
//
// console.log('Attempting to Reconfigure the Object:');
// try {
//     // can't reconfigure it
//     console.log(Object.getOwnPropertyDescriptor(obj, 'name'));
//
//     Object.defineProperty(obj, 'name', {
//         configurable: true
//     });
//
//     console.log(Object.getOwnPropertyDescriptor(obj, 'name'));
//     console.log();
// } catch(e) {
//     console.log(e instanceof TypeError ? "Can't reconfigure object" : "");
//     console.log(e.name === 'TypeError' ? "Can't reconfigure object" : "");
//     console.log();
// }
//
//
//
//
// // can't delete existing property
// console.log('Before delete:');
// console.log(obj);
// console.log();
//
// delete obj.country;
// console.log('After delete:');
// console.log(obj);
// console.log();
//
//
//
// // existing property can't be modified
// console.log('Before Property Modified:');
// console.log(obj);
// console.log();
//
//
// obj.country = 'US';
// console.log('After Property Modified:');
// console.log(obj);


















// // Example 318 - A Simple JavaScript getter - must be set for each property
// var obj = {
//     get name() {
//         return 'Shovon';
//     }
// };
//
//
// console.log(obj.name);

























// // Example 319 - A Simple JavaScript getter - must be set for each property
// // you can't assign a value if a getter is specified like this
// var obj = {
//     get name() {
//         return 'Shovon';
//     }
// };
//
//
// // won't be assigned
// obj.name = 'Shahriar';
//
// console.log(obj.name);



















// // Example 320 - To solve the problem of Example 319, you need a setter
// var obj = {
//     get name() {
//         return this._name ? this._name : 'Shovon';
//     },
//
//     set name(value) {
//         this._name = value;
//     }
// };
//
//
// // won't be assigned
// obj.name = 'Shahriar';
//
// console.log(obj.name);

















// // Example 321 - The Object.defineProperty() method can also be used to add getter and setter
// // in that case, only configurable and enumerable property may be defined, not writable and value
// var obj = {};
//
// Object.defineProperty(obj, 'name', {
//     get: function() {
//         return this._name ? this._name : '[Default "Shovon"]';
//     },
//     set: function(value) {
//         this._name = value;
//     },
//     enumerable: true,
//     configurable: true
// });
//
//
// // console.log(Object.getOwnPropertyDescriptor(obj, 'name'));
//
// console.log(obj.name);
//
// obj.name = 'Shahriar';
// console.log(obj.name);



















// // Example 322 - Check whether a property exists in an Object
// // 'in' or hasOwnProperty() can be used
// // the difference is that, 'in' will check the [[Prototype]] chain if its not found in the Object
// // but hasOwnProperty won't check the [[Prototype]] chain.
// var obj = {
//     name: 'Shovon'
// };
//
//
// console.log('name' in obj);
// console.log('country' in obj);
// console.log();
//
// console.log(obj.hasOwnProperty('name'));
// console.log(obj.hasOwnProperty('country'));
















// // Example 323 - objects created with Object.create(null), don't have access to hasOwnProperty()
// // becuase Object.create(null) object is not chained to any Object [[Prototoype]]
// // so a workaround is Object.prototype.hasOwnProperty.call(obj, 'propertyName');
// var obj = Object.create(null);
// obj.name = 'Shovon';
//
// try {
//     // throws TypeError
//     console.log(obj.hasOwnProperty('name'));
// } catch(e) {
//     if(e instanceof TypeError) {
//         console.log('hasOwnProperty is not available for obj');
//         console.log();
//     }
// }
//
//
// // workaround
// console.log(Object.prototype.hasOwnProperty.call(obj, 'name'));
// console.log(Object.prototype.hasOwnProperty.call(obj, 'country'));






















// // Example 324 - determine whether a property is enumerable
// var obj = {};
//
// Object.defineProperty(obj, 'name', {
//     value: 'Shovon',
//     enumerable: true
// });
//
// Object.defineProperty(obj, 'country', {
//     value: 'BD',
//     enumerable: false
// });
//
//
// console.log(obj.propertyIsEnumerable('name'));      // true
// console.log(obj.propertyIsEnumerable('country'));   // false
//


























// // Example 325 - Find all the enumerable keys and all the object's available keys
// var obj = {};
//
// Object.defineProperty(obj, 'name', {
//     value: 'Shovon',
//     enumerable: true
// });
//
// Object.defineProperty(obj, 'country', {
//     value: 'BD',
//     enumerable: false
// });
//
//
// // Object.keys(obj) -> returns all the enumerable property keys
// console.log(Object.keys(obj));
//
// // Object.getOwnPropertyNames -> returns all the available property keys
// console.log(Object.getOwnPropertyNames(obj));
























// // Example 326 - for..of is added to ES6 to use the @@iterator to traverse an Object or array
// var numbers = [1, 5, 89];
//
// for(var number of numbers) {
//     console.log(number);
// }
















// // Example 327 - Using @@iterator manually
// var numbers = [1, 9, 2];
//
//
//
// console.log('manual traversal:');
//
// var it = numbers[Symbol.iterator]();
//
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log();
//
//
//
// console.log('while loop traversal');
//
// var it = numbers[Symbol.iterator]();
//
// // while traversal
// var i = it.next();
// while(!i.done) {
//     console.log(i.value);
//
//     i = it.next();
// }
// console.log();
//
//
//
// console.log('for loop traversal');
// var it = numbers[Symbol.iterator]();
//
// // while traversal
// for(i = it.next(); i.done != true; i = it.next()) {
//     console.log(i.value);
// }


















// // Example 328 - You can define your own iterator
// var obj = {
//     a: 5,
//     b: 8,
//     r: 9
// };
//
//
//
// Object.defineProperty(obj, Symbol.iterator, {
//     enumerable: false,
//     writable: false,
//     configurable: true,
//     value: function() {
//         var obj = this;
//         var id = 0;
//         var keys = Object.keys(obj);
//
//         return {
//             next: function() {
//                 return {
//                     value: obj[keys[id++]],
//                     done: id > keys.length
//                 };
//             }
//         };
//     }
// });
//
//
// var it = obj[Symbol.iterator]();
//
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log();
//
//
// for(var v of obj) {
//     console.log(v);
// }
// console.log();
















// // Example 329 - Infinite iterator that returns random numbers
// var random = {
//     [Symbol.iterator]: function() {
//         return {
//             next: function() {
//                 return {
//                     value: Math.round(10000 * Math.random()).toString(16),
//                     done: false
//                 }
//             }
//         };
//     }
// };
//
//
// var random_pools = [];
//
// for(var n of random) {
//     random_pools.push(n);
//
//     if(random_pools.length === 20) {
//         break;
//     }
// }
//
//
// for(var rn of random_pools) {
//     console.log(rn);
// }



























// Example 330 - As same as Example 329

// https://github.com/uxitten/polyfill/blob/master/string.polyfill.js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
if (!String.prototype.padStart) {
    String.prototype.padStart = function padStart(targetLength,padString) {
        targetLength = targetLength>>0; //floor if number or convert non-number to 0;
        padString = String(padString || ' ');
        if (this.length > targetLength) {
            return String(this);
        }
        else {
            targetLength = targetLength-this.length;
            if (targetLength > padString.length) {
                padString += padString.repeat(targetLength/padString.length); //append to original to ensure we are longer than needed
            }
            return padString.slice(0,targetLength) + String(this);
        }
    };
}


var random = {
    [Symbol.iterator]: function() {
        return {
            next: function() {
                return {
                    value: Math.round(100000000 * Math.random()).toString(16).padStart(8, '0'),
                    done: false
                }
            }
        };
    }
};


var random_pools = [];

for(var n of random) {
    random_pools.push(n);

    if(random_pools.length === 20) {
        break;
    }
}


for(var rn of random_pools) {
    console.log(rn);
}

















