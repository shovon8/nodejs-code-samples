// // Example 362 - setTimeout() callback
// console.log('A');
//
// setTimeout(function() {
//     console.log('B');
// }, 1000);
//
// console.log('C');
//
//
// // prints A -> C -> B





















// // Example 363 - setTimeout() accepts function argument
// function printMessage(msg) {
//     console.log("printMessage: " + msg);
// }
//
//
// console.log('A');
//
// setTimeout(printMessage, 1000, 'B');
//
// console.log('C');
//
// // here B is the argument of printMessage using setTimeout()
// // prints A -> C -> B



















// // Example 364 - setTimeout() can be cancelled before it can call the callback function
// // clearTimeout() is used to do that.
// function printMessage(msg) {
//     console.log("printMessage: " + msg);
// }
//
//
// console.log('A');
//
// var timer = setTimeout(printMessage, 1000, 'B');
//
// console.log('C');
//
// clearTimeout(timer); // cleared timer, B won't be printed





















// // Example 365 - timeout certain operation if it takes longer than expected
//
// // function to make a function timeout after delay milli-seconds
// function timeoutify(callback, delay) {
//     var timer = setTimeout(function () {
//         timer = null;
//
//         callback(new Error('Timeout!'));
//     }, delay);
//
//
//     return function() {
//         if(timer) {
//             clearTimeout(timer);
//             callback.apply(this, arguments);
//         }
//         // console.log('timeoutify returned function'); // for debugging
//     };
// }
//
//
//
//
// // for debugging
// var i = 1;
// var counter = setInterval(function() {
//     if(i > 10) {
//         clearInterval(counter);
//         return;
//     }
//     console.log('tick', i);
//     i++;
// }, 1000);
//
//
//
// // timeout test
// setTimeout(timeoutify(function (err, data) {
//     console.log('on timeout test');
//     if(err) {
//         console.log(err.message);
//     } else {
//         console.log('hello world');
//     }
//
// }, 4000), 10000);
//
//
// // no timeout test
// setTimeout(timeoutify(function (err, data) {
//     console.log('on success test:');
//     if(err) {
//         console.log(err.message);
//     } else {
//         console.log('hello world from success test');
//     }
//
// }, 4000), 1000);





















// // Example 366 - synchronous code vs asynchronous code
// // prints 1 if asynchronous, 0 if non asynchronous
// function resultSyncCallback(data) {
//     console.log('sync call, result =', a);
// }
//
// function resultAsyncCallback(data) {
//     console.log('async call, result =', b);
// }
//
//
// // synchronous function
// function readFile(filename, callback) {
//     callback();
// }
//
//
// // sync, prints 0
// var a = 0;
// readFile('hello.txt', resultSyncCallback);
// a++;
//
//
// // async, prints 1
// var b = 0;
// setTimeout(resultAsyncCallback, 0);
// b++;





























// // Example 367 - Making synchronous code run asynchronous
// // For explanation refer to Semicolon's answer at https://stackoverflow.com/questions/30383542/kyle-simpson-asyncify-function-from-you-dont-know-js-async-performance
// /* NOTE: I COPIED THE ANSWER FROM THE ABOVE LINK, SO I CAN REMIND MYSELF LATER WHEN I LOOK AT THE CODE
// * The code seems to be an very convoluted way of saying this:
//
// function asyncify(cb) {
//     return function() {
//         setTimeout(function() {
//             cb.apply(this, arguments);
//         }, 0);
//     }
// }
// But I should emphasize ‘seems.’ Perhaps I’m missing some important nuance in the back-and-forth above.
//
// As for bind.apply, that’s a little trickier to explain. Both are methods on every function, which allow you to invoke it with a specified context (this) and in the case of apply, it accepts arguments as an array.
//
// When we "apply" bind, bind itself is the function which is being applied -- not the object apply lived on, which could have been anything. Therefore, it might be easier to begin making sense of this line if we rewrite it like this:
//
// Function.prototype.bind.apply(...)
// Bind has a signature like this: .bind(context, arg1, arg2...)
//
// The arguments are optional -- often they are used for currying, which is one of the main use cases for bind. In this case, the author wishes to bind the original function to (1) the current this context, (2) the arguments which the "asyncified" function was invoked with. Because we don’t know in advance how many arguments need to be passed along, we must use apply, where the arguments can be an array or an actual arguments object. Here's a very verbose rewrite of this section that may help illuminate what occurs:
//
// var contextOfApply = orig_fn;
// var contextWithWhichToCallOriginalFn = this;
//
// var argumentArray = Array.prototype.slice.call(arguments);
//
// argumentArray.unshift(contextWithWhichToCallOriginalFn);
//
// // Now argument array looks like [ this, arg1, arg2... ]
// // The 'this' is the context argument for bind, and therefore the
// // context with which the function will end up being called.
//
// fn = Function.prototype.bind.apply(contextOfApply, argumentArray);
// Actually...
//
// I can explain how the simple version I provided differs. On reviewing it again I caught what that missing nuance was that led its author to go through that weird dance at top. It is not actually a function for making another function "always async". It is a function that only ensures it is async once -- it guards against executing the callback during the same tick in which it was created but thereafter, it executes synchronously.
//
// It’s still possible to write this in a friendlier way though, I think:
//
// function asyncify(cb) {
//     var inInitialTick = true;
//
//     setTimeout(function() { inInitialTick = false; }, 0);
//
//     return function() {
//         var self = this;
//         var args = arguments;
//
//         if (inInitialTick)
//             setTimeout(function() { cb.apply(self, args); }, 0);
//         else
//             cb.apply(self, args);
//     }
// }
// Now I should note that the above does not actually do what it says. In fact the number of times that the function will execute using a timeout vs. synchronously is kind of random using either this or the original version. That's because setTimeout is a lame (but sometimes fine) substitute for setImmediate, which is clearly what this function really wants (but perhaps can't have, if it needs to run in Moz & Chrome).
//
// This is because the millisecond value passed to setTimeout is kind of a "soft target". It won't actually be zero; in fact it will always be at least 4ms if I recall right, meaning any number of ticks may pass.
//
// Imagining for a moment that you’re in a magical wonderland where ES6 stuff works and there’s no weird hand-wringing over whether to implement a utility as fundamental as setImmediate, it could be rewritten like this, and then it would have predictable behavior, because unlike setTimeout with 0, setImmediate really does ensure the execution occurs on the next tick and not some later one:
//
// const asyncify = cb => {
//     var inInitialTick = true;
//
//     setImmediate(() => inInitialTick = false);
//
//     return function() {
//         if (inInitialTick)
//             setImmediate(() => cb.apply(this, arguments));
//         else
//             cb.apply(this, arguments);
//     }
// };
// Actually Actually...
//
// There's one more difference. In the original, if called during the "current tick which is actually an arbitrary number of successive ticks" it will still only execute one initial time, with the final set of arguments. This actually smells a little like it might be unintended behavior, but without context I'm only guessing; this may be exactly what was intended. This is because on each call before the first timeout completes, fn is overwritten. This behavior is sometimes called throttling but in this case, unlike "normal" throttling, it will only take place for an unknown length of time around 4ms after its creation, and thereafter will be unthrottled and synchronous. Good luck to whoever has to debug the Zalgo thus invoked :)
// * */
//
// // // Easy implementation
// // function asyncify(cb) {
// //     return function() {
// //         setTimeout(function() {
// //             cb.apply(this, arguments);
// //         }, 0);
// //     }
// // }
//
//
// // YDKJS implementation
// function asyncify(fn) {
//     var orig_fn = fn,
//         intv = setTimeout( function(){
//             console.log('1');
//             intv = null;
//
//             if (fn) {
//                 console.log('2');
//                 fn();
//             }
//         }, 0 );
//
//     fn = null;
//
//     return function() {
//         if (intv) {
//             console.log('3');
//             fn = orig_fn.bind.apply(orig_fn, [this].concat([].slice.call(arguments)));
//         } else {
//             console.log('4');
//             orig_fn.apply(this, arguments);
//         }
//     };
// }
//
//
// function resultSyncCallback(data) {
//     console.log('sync call, result =', a);
// }
//
//
//
// // sync, prints 0
// var a = 0;
// resultSyncCallback();
// a++;
//
// a = 0;
// var asyncResult = asyncify(resultSyncCallback);
// setTimeout(asyncResult, 0);
// a++;































// // Example 368 - adding program that deals with parameters not set but will be set in the future
//
// // add() works with future parameters
// function add(getX, getY, callback) {
//     // x and y are future parameters
//     var x;
//     var y;
//
//
//     console.log('getting x...');
//     getX(function(xValue) {
//         console.log('x value set.');
//         x = xValue;
//
//         if(y != undefined) {
//             callback(x + y);
//         }
//     });
//
//
//     console.log('getting y...');
//     getY(function (yValue) {
//         console.log('y value set.');
//         y = yValue;
//
//         if(x != undefined) {
//             callback(x + y);
//         }
//     });
// }
//
//
// // returns x after 2 seconds
// function fetchX(callback) {
//     setTimeout(callback, 2000, 2);
// }
//
// // return y after 1 seconds
// function fetchY(callback) {
//     setTimeout(callback, 1000, 5);
// }
//
//
// // call add
// add(fetchX, fetchY, function (result) {
//     console.log('result : ' + result);
// });



































// // Example 369 - Example 368 in JS Promise
//
// // add() works with Promise, also returns another Promise
// /* FROM JS DOCS
// Promise.all(iterable)
// Returns a promise that either fulfills when all of the promises in the iterable argument have fulfilled or rejects as soon as one of the promises in the iterable argument rejects. If the returned promise fulfills, it is fulfilled with an array of the values from the fulfilled promises in same order as defined in the iterable. If the returned promise rejects, it is rejected with the reason from the first promise in the iterable that rejected. This method can be useful for aggregating results of multiple promises.
//  */
// function add(xPromise, yPromise) {
//     return Promise.all([xPromise, yPromise]).then(function (values) {
//         return values[0] + values[1];
//     });
// }
//
//
//
// // returns x after 2 seconds
// function fetchX(x) {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function () {
//             if(typeof x === "number") {
//                 return resolve(x);
//             } else {
//                 return reject(new Error("x is invalid"));
//             }
//         }, 2000);
//     });
// }
//
// // returns x after 1 seconds
// function fetchY(y) {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function () {
//             if(typeof y === "number") {
//                 return resolve(y);
//             } else {
//                 return reject(new Error("y is invalid"));
//             }
//         }, 1000);
//     });
// }
//
//
//
//
// // call add()
// add(fetchX(5), fetchY(10)).then(function (sum) {
//     console.log('result: ' + sum);
// }, function (error) {
//     console.log("Error: " + error.message);
// });





























// // Example 370 - Example 369 - Promise error handling
//
// // add() works with Promise, also returns another Promise
// /* FROM JS DOCS
// Promise.all(iterable)
// Returns a promise that either fulfills when all of the promises in the iterable argument have fulfilled or rejects as soon as one of the promises in the iterable argument rejects. If the returned promise fulfills, it is fulfilled with an array of the values from the fulfilled promises in same order as defined in the iterable. If the returned promise rejects, it is rejected with the reason from the first promise in the iterable that rejected. This method can be useful for aggregating results of multiple promises.
//  */
// function add(xPromise, yPromise) {
//     return Promise.all([xPromise, yPromise]).then(function (values) {
//         return values[0] + values[1];
//     });
// }
//
//
//
// // returns x after 2 seconds
// function fetchX(x) {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function () {
//             if(typeof x === "number") {
//                 return resolve(x);
//             } else {
//                 return reject(new Error("x is invalid"));
//             }
//         }, 2000);
//     });
// }
//
// // returns x after 1 seconds
// function fetchY(y) {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function () {
//             if(typeof y === "number") {
//                 return resolve(y);
//             } else {
//                 return reject(new Error("y is invalid"));
//             }
//         }, 1000);
//     });
// }
//
//
//
// // call add() - Error handling
// add(fetchX(5), fetchY("2")).then(function (sum) {
//     console.log('result: ' + sum);
// }, function (error) {
//     console.log("Error: " + error.message);
// });


































// // Example 371 - A Promise returned from a function is immutable and it can be passed to other function
// // as many times as desired and then these function can decide what to do on success or failure
//
// // function that returns Promise
// function addNumbers(x, y) {
//     return (new Promise((resolve, reject) => {
//         if(typeof x !== "number" || typeof y !== "number") {
//             return reject(new Error('x and y must be numeric'));
//         }
//
//         return resolve(x + y);
//     }));
// }
//
//
// // function that acts on the result of Promise
// function printResult(promiseObject) {
//     promiseObject.then(function(result) {
//         console.log('the result is: ' + result);
//     }, function(error) {
//         console.log('Error Message: ' + error.message);
//     });
// }
//
//
// var p1 = addNumbers(5, 9);
// var p2 = addNumbers(9, 'a');
//
//
// printResult(p1);
// printResult(p2);



























// // Example 372 - A Slight modification of Example 371
//
// // function that returns Promise
// function addNumbers(x, y) {
//     return (new Promise((resolve, reject) => {
//         if(typeof x !== "number" || typeof y !== "number") {
//             return reject(new Error('inputs must be numeric'));
//         }
//
//         return resolve({
//             value: x + y,
//             x: x,
//             y: y
//         });
//     }));
// }
//
//
// // function that acts on the result of Promise
// function printResult(promiseObject) {
//     promiseObject.then(function(result) {
//         console.log(result.x + ' + ' + result.y + ' = ' + result.value);
//     }, function(error) {
//         console.log('Error Message: ' + error.message);
//     });
// }
//
//
// var p1 = addNumbers(5, 9);
// var p2 = addNumbers(9, 'a');
// var p3 = addNumbers(25, 12);
//
//
// printResult(p1);
// printResult(p2);
// printResult(p3);























// // Example 373 - Since Promises are immutable, it can be passed to many functions without any risk
//
// // function that returns Promise
// function addNumbers(x, y) {
//     return (new Promise((resolve, reject) => {
//         if(typeof x !== "number" || typeof y !== "number") {
//             return reject(new Error('inputs must be numeric'));
//         }
//
//         return resolve({
//             value: x + y,
//             x: x,
//             y: y
//         });
//     }));
// }
//
//
// // this Promise handler only cares about printing the result, no errors
// function handleResult(promiseObject) {
//     promiseObject.then(function(result) {
//         console.log(result.value);
//     });
// }
//
//
// // this Promise handler cares about result and errors
// function handleResultErrors(promiseObject) {
//     function success(result) {
//         console.log('(' + result.x + ',' + result.y + ') = ' + result.value);
//     }
//
//     function failure(error) {
//         console.log(error.message);
//     }
//
//     promiseObject.then(success, failure);
// }
//
//
// var p1 = addNumbers(5, 9);
// var p2 = addNumbers(9, 'a');
// var p3 = addNumbers(25, 12);
//
//
// handleResult(p1);
// handleResultErrors(p2);
// handleResultErrors(p3);



































// // Example 374 - Since Promises are immutable, it can be handled this way as well
//
// // function that returns Promise
// function addNumbers(x, y) {
//     return (new Promise((resolve, reject) => {
//         if(typeof x !== "number" || typeof y !== "number") {
//             return reject(new Error('inputs must be numeric'));
//         }
//
//         return resolve({
//             value: x + y,
//             x: x,
//             y: y
//         });
//     }));
// }
//
//
// // one of the success handler
// function printResult(result) {
//     console.log(result.value);
// }
//
// // another success handler
// function printResultVerbose(result) {
//     console.log('(' + result.x + ',' + result.y + ') = ' + result.value);
// }
//
//
// // error handler
// function handleErrors(error) {
//     console.log('Error: ' + error.message);
// }
//
//
// var p1 = addNumbers(5, 9);
// var p2 = addNumbers(25, 12);
// var p3 = addNumbers(9, 'a');
//
//
// // p1 Promise: not handling errors
// p1.then(printResult);
// p1.then(printResultVerbose);
//
// // p2 Promise: handling errors
// p2.then(printResult, handleErrors);
// p2.then(printResultVerbose, handleErrors);
//
// // p3 Promise: handling errors
// p3.then(printResult, handleErrors);
// p3.then(printResultVerbose, handleErrors);





























// // Example 375 - Promise object is an instanceof Promise
// var promise = new Promise(function(resolve, reject) {});
//
// console.log(promise instanceof Promise);


















// // Example 376 - Promise.race() example
// /*
// * The Promise.race(iterable) method returns a promise that resolves or rejects as soon as one of the
// * promises in the iterable resolves or rejects, with the value or reason from that promise.
// * */
//
// // Example from JS Docs
// var p1 = new Promise(function(resolve, reject) {
//     setTimeout(resolve, 500, 'one');
// });
//
// var p2 = new Promise(function(resolve, reject) {
//     setTimeout(resolve, 100, 'two');
// });
//
// Promise.race([p1, p2]).then(function(value) {
//     console.log(value); // "two"
//     // Both resolve, but p2 is faster
// });
















// // Example 377 - Promise.race() example - even if the first completed promise is a reject()
// /*
// * The Promise.race(iterable) method returns a promise that resolves or rejects as soon as one of the
// * promises in the iterable resolves or rejects, with the value or reason from that promise.
// * */
//
// // Example from JS Docs
// var p1 = new Promise(function(resolve, reject) {
//     setTimeout(resolve, 500, 'one');
// });
//
// var p2 = new Promise(function(resolve, reject) {
//     setTimeout(reject, 100, 'two failed faster.');
// });
//
// Promise.race([p1, p2]).then(function(value) {
//     console.log(value); // "two"
// }, function(error) {
//     console.log(error);
//     // p2 fails faster than p1 resolves
//
// });























// // Example 378 - Timing out a promise
// function timeoutPromise(delay) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function() {
//             reject("Timeout!");
//         }, delay);
//     });
// }
//
//
// function addNumbers(x, y) {
//     return (new Promise((resolve, reject) => {
//         if(typeof x !== "number" || typeof y !== "number") {
//             return reject(new Error('inputs must be numeric'));
//         }
//
//         return resolve({
//             value: x + y,
//             x: x,
//             y: y
//         });
//     }));
// }
//
//
// // it still waits 3 seconds to finish even though addNumbers() promise returns a result immediately
// Promise.race([addNumbers(5, 8), timeoutPromise(3000)])
//     .then(function(result) {
//         console.log(result);
//     }, function(err) {
//         console.log(err);
//     });


















// // Example 379 - lexical scope and Promise
// var p = new Promise(function (resolve, reject) {
//
//     var obj = Object.create(null);
//
//     obj.test = function() {
//         console.log('simple test');
//     };
//
//     obj.x = 45;
//     obj.y = 12;
//
//
//     resolve((function () {
//         return this;
//     }).bind(obj));
// });
//
//
// p.then(function fulfilled(result) {
//     // accessing variables and functions from another scope
//     var self = result();
//     self.test();
//     console.log(self.x, self.y);
// }, function rejected(error) {
//     console.log(error);
// });






















// // Example 380 - If an error occurs before a Promise is resolved, it is also detected.
// var p = new Promise(function (resolve, reject) {
//     unknownFunction(); // throws ReferenceError error
//
//     resolve('Resolved');
// });
//
//
// p.then(function success(result) {
//     console.log(result);
// }, function fail(error) {
//     console.log('An error is detected before a promise could be resolved. So it is rejected.');
//     console.log('Error Message: ' + error.message);
// });

























// // Example 381 - If you want to resolve a Promise straight, Promise.resolve() can be used
// var data = {
//     id: 'sH725BNB',
//     name: 'Shovon'
// };
//
// // also returns a Promise
// var p = Promise.resolve(data);
//
//
// p.then(
//     (result) => {
//         console.log(result);
//     },
//     (error) => {
//         // never gets here
//     }
// );


















// // Example 382 - these are identical
// var p1 = new Promise((resolve, reject) => {
//     resolve(10);
// });
//
// var p2  = Promise.resolve(10);












// // Example 383 - If a Promise is passed to Promise.resolve(), it returns another Promise
// var p1 = new Promise((resolve, reject) => {
//     resolve(10);
// });
//
// var p2 = Promise.resolve(p1);
//
//
// p2.then(
//     (result) => {
//         console.log(result);
//     }
// );








// // Example 384 - If more than one Promise resolves to the same value, they are the same
// var p1 = new Promise((resolve, reject) => {
//     resolve(10);
// });
//
// var p2 = Promise.resolve(p1);
//
// var p3 = Promise.resolve(10);
//
// var p4 = Promise.resolve(10);
//
//
// p1.then(
//     (result) => {
//         console.log(result);
//     }
// );
//
//
// p2.then(
//     (result) => {
//         console.log(result);
//     }
// );
//
//
// p3.then(
//     (result) => {
//         console.log(result);
//     }
// );
//
//
// p4.then(
//     (result) => {
//         console.log(result);
//     }
// );




















// // Example 385 - Any 'then'able can be converted to a Promise in JS
// var obj = {
//     then: function(callback) {
//         callback(42);
//     }
// };
//
//
// var p = Promise.resolve(obj);
//
// p.then(
//     (result) => {
//         console.log(result);
//     }
// );




















// // Example 386 - A function can also be converted to a Promise - it makes the function asynchronous as well
// // In case of function, the return value is resolved
// function sayHello(name) {
//     return "Hello " + name;
// }
//
//
// var p = Promise.resolve(sayHello('Shovon'));
//
// p.then(
//     (result) => {
//         console.log(result);
//     }
// );

















// // Example 387 - Returning anything from a Promise then() returns another Promise
// function sayHello(name) {
//     return "Hello, " + name;
// }
//
//
// var p1 = Promise.resolve(sayHello('Shovon'));
//
// var p2 = p1.then(
//     (result) => {
//         console.log(result);
//
//         return ['Alex', 'Bill', 'Chelsea'];
//     }
// );
//
// var p3 = p2.then(
//     (result) => {
//         console.log('Your friends are ' + result.join(', '));
//     }
// );
//
// // and so on














// // Example 388 - Returning anything from a Promise then() returns another Promise and they are chainable
// function sayHello(name) {
//     return "Hello, " + name;
// }
//
//
// var p1 = Promise.resolve(sayHello('Shovon'));
//
// // chaining then()
// p1.then(
//     (result) => {
//         console.log(result);
//
//         return ['Alex', 'Bill', 'Chelsea'];
//     }
// ).then(
//     (result) => {
//         console.log('Your friends are ' + result.join(', '));
//     }
// );
//
// // and so on














// // Example 389 - If the Promise of step 1 is asynchronous and it needs to wait before it can send another promise
// // to step 2, you have to create another promise and return it.
// function sayHello(name) {
//     return "Hello, " + name;
// }
//
//
// var p1 = Promise.resolve(sayHello('Shovon'));
//
// // chaining then()
// p1.then(
//     (result) => {
//         console.log(result);
//
//         return new Promise(
//             (resolve, reject) => {
//                 resolve(['Alex', 'Bill', 'Chelsea']);
//             }
//         );
//     }
// ).then(
//     (result) => {
//         console.log('Your friends are ' + result.join(', '));
//     }
// );

















// // Example 390 - If the Promise of step 1 is asynchronous and it needs to wait before it can send another promise
// // to step 2, you have to create another promise and return it.
// function sayHello(name) {
//     return "Hello, " + name;
// }
//
//
// var p1 = Promise.resolve(sayHello('Shovon'));
//
// // chaining then()
// p1.then(
//     (result) => {
//         console.log(result);
//
//         return new Promise(
//             (resolve, reject) => {
//                 setTimeout(
//                     () => {
//                         resolve(['Alex', 'Bill', 'Chelsea']);
//                     },
//                     2000 // 2 seconds delay
//                 );
//             }
//         );
//     }
// ).then(
//     (result) => {
//         console.log('Your friends are ' + result.join(', '));
//     }
// );
























// // Example 391 - Each returned Promise must not have a value, it just signals to proceed to the next level
// function delay(time) {
//     return new Promise(
//         (resolve, reject) => {
//             setTimeout(resolve, time);
//         }
//     );
// }
//
//
//
//
// delay(1000)
// .then(
//     function STEP2() {
//         console.log("Step 2 after 1s.");
//         return delay(2000);
//     }
// )
// .then(
//     function STEP3() {
//         console.log("Step 3 after 2s.");
//         return delay(1500);
//     }
// )
// .then(
//     function STEP4() {
//         console.log("Step 4 after 1s 500ms.");
//         return delay(200);
//     }
// )
// .then(
//     function STEP5() {
//         console.log("Step 4 after 200ms.");
//     }
// );



















// // Example 392 - If an error occurs in any of the step, it is passed to the next step's error handler
// function delay(time) {
//     return new Promise(
//         (resolve, reject) => {
//             setTimeout(resolve, time);
//         }
//     );
// }
//
//
//
//
// delay(1000)
// .then(
//     function STEP2() {
//         console.log("Step 2 after 1s.");
//         return delay(2000);
//     }
// )
// .then(
//     function STEP3() {
//         unknownFunction(); // throws ReferenceError
//
//         console.log("Step 3 after 2s.");
//         return delay(1500);
//     }
// )
// .then(
//     function STEP4() {
//         console.log("Step 4 after 1s 500ms.");
//         return delay(200);
//     },
//     function failSTEP4(err) {
//         console.log('Error Caught on STEP4: ' + err.message);
//
//         // now an error resolution Promise can be returned
//         console.log('recovering from error... It may take a while.');
//         return delay(5000);
//     }
// )
// .then(
//     function STEP5() {
//         console.log("Step 4 after 200ms.");
//     }
// );






















// // Example 393 - If an error handler is not provided, then a default error handler is used in case any error occurs
// // in Promise
// // The default error handler re-throws the error
// // default error Handler
// // (error) => {
// //     throw error;
// // }
//
// var p = new Promise(
//     (resolve, reject) => {
//         reject(new Error("Unable to connect to the database."));
//     }
// );
//
//
// p.then(
//     (result) => {
//         // handle result
//     }
// ).then(
//     (result) => {
//         // handle result
//     },
//
//     // error handler
//     (error) => {
//         console.log('Caught error:');
//         console.log(error.message);
//     }
// );



















// // Example 394 - Just like Promise has a default error handler, it also has a default handler for success
// // The default success handler
// // (result) => {
// //     return result;
// // }
//
// var p = new Promise(
//     (resolve, reject) => {
//         resolve(52);
//     }
// );
//
//
// p.then(
//     null, // no success handler
//     (error) => {
//         // error handler
//     }
// ).then(
//     (result) => {
//         console.log(result); // 52, passed to the next then() as expected
//     },
//
//     // error handler
//     (error) => {
//         // do anything with error here
//     }
// );



















// // Example 395 - A good way of naming the then() callbacks are onRejected() onResolved()
// function add(x, y) {
//     return new Promise(
//         function(resolve, reject) {
//             if(typeof x === "number" && typeof y === "number") {
//                 return resolve(x + y);
//             }
//
//             return reject(new Error("inputs must be numeric"));
//         }
//     );
// }
//
//
//
//
// // success test
// add(5, 8)
// .then(
//     function onResolved(result) {
//         console.log(result);
//     },
//     function onRejected(error) {
//         console.log(error.message);
//     }
// );
//
//
//
//
// // error test
// add(5, 'a')
// .then(
//     function onResolved(result) {
//         console.log(result);
//     },
//     function onRejected(error) {
//         console.log(error.message);
//     }
// );
















// // Example 396 - try..catch block can't catch asynchronous errors
// function test() {
//     setTimeout(function () {
//         nofunction.error();
//     }, 3000);
// }
//
//
//
// try {
//     test();
// }  catch (e) {
//     console.log('error occured');
// }




















// //Example 397 - Promise doesn't use error first callback style, it uses split callbacks styles for handling
// // errors
// let promise = Promise.reject("Not a number");
//
// promise.then(
//     function onResolved(result) {
//         console.log(result);
//     },
//     function onRejected(error) {
//         console.log(error);
//     }
// );













// // Example 398 - A promise unhandled error or error from the resolved state's callback function can be caught with
// // .catch()
// let promise = Promise.resolve(12);
//
//
// promise.then(
//     function onResolve(result) {
//         console.log(result);
//
//         undefFunction(); // error on purpose
//     }
// ).catch(
//     function onError(error) {
//         console.log("The error is: " + error.message);
//     }
// );






















// // Example 399 - Promise.all([promises,...])
// // takes in an array of promises, and returns the result when all of these promises are resolved.
// // the result is an array of each promises resolved value
// // if any one of the promises cant be resolved then it fails
// let p1 = Promise.resolve(3);
// let p2 = Promise.resolve(5);
// let p3 = Promise.resolve(8);
//
// Promise.all([p1, p2, p3])
// .then(
//     function onResolved(results) {
//         let sum = results[0] + results[1] + results[2];
//         console.log('The sum is ' + sum);
//     }
// ).catch(
//     function onRejected(error) {
//         console.log('An error occurred: ' + error.message);
//     }
// );
//
//
//
//
// // failure test
// let p4 = Promise.reject('failed to fetch the number from the server.');
//
// Promise.all([p1, p4, p2, p3])
// .then(
//     function onResolved(results) {
//         console.log('it works!');
//     }
// ).catch(
//     function onRejected(error) {
//         console.log('An error occurred: ' + error);
//     }
// );



















// // Example 400 - Promise.race([promises,...])
// // It will be resolved as soon as one of the promises resolves.
// // It will be rejected as soon as one of the promises rejected.
// function getDelayPromise(result, delay) {
//     return new Promise(
//         function handler(resolve, reject) {
//             setTimeout(function timerHandler() {
//                 if(typeof result === "number") {
//                     return resolve(result);
//                 }
//
//                 return reject("not a number");
//             }, delay);
//         }
//     );
// }
//
//
// let p1 = getDelayPromise(5, 2000);
// let p2 = getDelayPromise(10, 1000);
// let p3 = getDelayPromise(2, 800);
//
//
// Promise.race([p1, p2, p3])
// .then(
//     function onResolved(result) {
//         console.log('The result is ' + result);
//     }
// ).catch(
//     function onRejected(error) {
//         console.log('Error: ' + error);
//     }
// );

























// // Example 401 - Promise.race([promises,...]) - order of arguments don't matter
// // It will be resolved as soon as one of the promises resolves.
// // It will be rejected as soon as one of the promises rejected.
// function getDelayPromise(result, delay) {
//     return new Promise(
//         function handler(resolve, reject) {
//             setTimeout(function timerHandler() {
//                 if(typeof result === "number") {
//                     return resolve(result);
//                 }
//
//                 return reject("not a number");
//             }, delay);
//         }
//     );
// }
//
//
// let p1 = getDelayPromise(5, 2000);
// let p2 = getDelayPromise(10, 1000);
// let p3 = getDelayPromise(2, 800);
//
//
// // orders don't matter
// Promise.race([p1, p2, p3])
//     .then(
//         function onResolved(result) {
//             console.log('The result is ' + result);
//         }
//     ).catch(
//     function onRejected(error) {
//         console.log('Error: ' + error);
//     }
// );
//
//
// // orders don't matter
// Promise.race([p3, p1, p2])
//     .then(
//         function onResolved(result) {
//             console.log('The result is ' + result);
//         }
//     ).catch(
//     function onRejected(error) {
//         console.log('Error: ' + error);
//     }
// );















// // Example 402 - Promise.race([promises,...]) - error handling
// // It will be resolved as soon as one of the promises resolves.
// // It will be rejected as soon as one of the promises rejected.
// function getDelayPromise(result, delay) {
//     return new Promise(
//         function handler(resolve, reject) {
//             setTimeout(function timerHandler() {
//                 if(typeof result === "number") {
//                     return resolve(result);
//                 }
//
//                 return reject("not a number");
//             }, delay);
//         }
//     );
// }
//
//
// let p1 = getDelayPromise(5, 2000);
// let p2 = getDelayPromise(10, 1000);
// let p3 = getDelayPromise(2, 800);
// let p4 = getDelayPromise('a', 500);
//
//
// // error, because p4 was rejected first
// Promise.race([p1, p2, p3, p4])
// .then(
//     function onResolved(result) {
//         console.log('The result is ' + result);
//     }
// ).catch(
//     function onRejected(error) {
//         console.log('Error: ' + error);
//     }
// );
//
//
//
// // no errors, as p3 resolves first
// let p5 = getDelayPromise('b', 8000);
// Promise.race([p1, p2, p3, p5])
//     .then(
//         function onResolved(result) {
//             console.log('The result is ' + result);
//         }
//     ).catch(
//     function onRejected(error) {
//         console.log('Error: ' + error);
//     }
// );






















// // Example 403 - Promise.race([promises,...]) can be used to timeout certain operation
// function getData(data) {
//     return new Promise(
//         function handler(resolve, reject) {
//             setTimeout(function timerHandler() {
//                 return resolve(data);
//             }, 5000);
//         }
//     );
// }
//
//
// function timeOutPromise(delay) {
//     return new Promise(
//         function(resolve, reject) {
//             setTimeout(function timerHandler() {
//                     return reject("Timed out");
//             }, delay);
//         }
//     );
// }
//
//
//
// let dataPromise = getData({
//     id: 423,
//     name: 'Shahriar Shovon'
// });
//
// let timerPromise = timeOutPromise(2000);
//
//
// // timeout after 2 seconds, but the data takes 5 seconds to resolve, so error is reported
// Promise.race([dataPromise, timerPromise])
// .then(
//     function onResolved(data) {
//         console.log(data);
//     }
// ).catch(
//     function onRejected(error) {
//         console.log('Error: ' + error);
//     }
// );























// // Example 404 - Promise.race([promises,...]) can be used to timeout certain operation
// function getData(data) {
//     return new Promise(
//         function handler(resolve, reject) {
//             setTimeout(function timerHandler() {
//                 return resolve(data);
//             }, 2000);
//         }
//     );
// }
//
//
// function timeOutPromise(delay) {
//     return new Promise(
//         function(resolve, reject) {
//             setTimeout(function timerHandler() {
//                 return reject("Timed out");
//             }, delay);
//         }
//     );
// }
//
//
//
// let dataPromise = getData({
//     id: 423,
//     name: 'Shahriar Shovon'
// });
//
// let timerPromise = timeOutPromise(3000);
//
//
// // timeout after 3 seconds, but the data takes 2 seconds to resolve, so no error
// Promise.race([dataPromise, timerPromise])
//     .then(
//         function onResolved(data) {
//             console.log(data);
//         }
//     ).catch(
//     function onRejected(error) {
//         console.log('Error: ' + error);
//     }
// );















// // Example 405 - Promise.observe - its a polyfill utility for observing the resolution of Promise
// // this cleans up memory
// if(!Promise.observe) {
//     Promise.observe = function(promise, callback) {
//         promise.then(
//             function onResolved(result) {
//                 Promise.resolve(result).then(callback);
//             },
//             function onRejected(error) {
//                 Promise.resolve(error).then(callback);
//             }
//         );
//
//         return promise;
//     };
// }
//
//
//
//
//
// function getData(data) {
//     return new Promise(
//         function handler(resolve, reject) {
//             setTimeout(function timerHandler() {
//                 return resolve(data);
//             }, 4000);
//         }
//     );
// }
//
//
// function timeOutPromise(delay) {
//     return new Promise(
//         function(resolve, reject) {
//             setTimeout(function timerHandler() {
//                 return reject("Timed out");
//             }, delay);
//         }
//     );
// }
//
//
//
// let dataPromise = getData({
//     id: 423,
//     name: 'Shahriar Shovon'
// });
//
// let timerPromise = timeOutPromise(3000);
//
//
// Promise.race([
//     Promise.observe(
//         dataPromise,
//         function clear() {
//             console.log('Promise cleared');
//         }
//     ),
//     timerPromise
// ]).then(
//     function onResolved(result) {
//         console.log(result);
//     }
// ).catch(
//     function onRejected(error) {
//         console.log(error);
//     }
// );




















// // Example 406 - Promise.first([promises,...])
// // ignores rejected promises
// // returns only the first resolved promise
// if(!Promise.first) {
//     Promise.first = function (promises) {
//         return new Promise(
//             function (resolve, reject) {
//                 promises.forEach(
//                     function(promise) {
//                         Promise.resolve(promise).then(resolve);
//                     }
//                 );
//             }
//         );
//     };
// }
//
//
//
//
// function getDelayPromise(result, delay) {
//     return new Promise(
//         function handler(resolve, reject) {
//             setTimeout(function timerHandler() {
//                 if(typeof result === "number") {
//                     return resolve(result);
//                 }
//
//                 return reject("not a number");
//             }, delay);
//         }
//     );
// }
//
//
//
//
//
// let p1 = getDelayPromise(5, 1000);
// let p2 = getDelayPromise(1, 800);
// let p3 = getDelayPromise(22, 3000);
// let p4 = getDelayPromise('a', 1200);
//
//
// Promise.first([p1, p2, p3])
// .then(
//     function onResolved(data) {
//         console.log(data);
//     }
// ).catch(
//     function onRejected(error) {
//         console.log('Error: ' + error);
//     }
// );































// // Example 407 - Array.prototype.map() mapping array values
// let numbers = [1, 2, 9, 6, 5, 87];
//
// // applies function hashValue() to each of the array elements
// let hashedValues = numbers.map(function hashValue(value) {
//     return require('crypto').createHash('md5').update(String(value)).digest('hex');
//
// });
//
// console.log(numbers);
// console.log(hashedValues);

















// // Example 408 - Mapping array data to Promises
// if(!Promise.map) {
//     Promise.map = function(values) {
//         let promises = numbers.map(function(value) {
//             return Promise.resolve(value);
//         });
//
//         return Promise.all(promises);
//     };
// }
//
//
// let numbers = [1, 2, 9, 6, 5, 87];
//
//
// Promise.map(numbers)
// .then(function(results) {
//     console.log('Got using Promise:');
//     console.log(results);
// });





















// // Example 409 - Mapping array data to Promises, also let a user defined
// // callback to handle what to do to the data before it resolves
// if(!Promise.map) {
//     Promise.map = function(values, callback) {
//         let promises = values.map(function(value) {
//             return new Promise(function(resolve, reject) {
//                 // let the callback resolve or reject the promise
//                 callback(value, resolve, reject);
//             });
//         });
//
//         return Promise.all(promises);
//     };
// }
//
//
// let friends = ['Alex', 'Billy', 'Chelsea', 'Dark', 'Ellie', 'Fred', 'Gloriana'];
//
// Promise.map(friends, function(friend, resolve, reject) {
//     // resolve the promise here
//     resolve("You're a good friend " + friend);
// }).then(function(results) {
//     // print results array
//     results.forEach(function(result) {
//         console.log("* " + result);
//     });
// });



























// // Example 410 - Ways of rejecting a promise
// let p1 = Promise.reject("rejected promise");
//
// let p2 = new Promise(function (resolve, reject) {
//     reject("another rejected promise");
// });
//
//
//
// function errorHandler(error) {
//     console.log('Promise error: ' + error);
// }
//
// p1.catch(errorHandler);
// p2.catch(errorHandler);
















// // Example 411 - If a rejected Promise is resolved, it's also is rejected
// let p1 = Promise.reject("Not a number");
// let p2 = Promise.resolve(p1);
//
// p2.then(function onResolved(result) {
//     console.log('resolved: ' + result);
// }).catch(function onRejected(error) {
//     console.log('rejected: ' + error);
// });

















// // Example 412 - Resolving multiple values in Promise
// // you can return values as array in promise
// function getY(x) {
//     return new Promise(function(resolve, reject) {
//         resolve(Math.round(Math.random() * x));
//     });
// }
//
//
// function getPairs(y, z) {
//     let x = y * z;
//
//     return getY(x).then(function(y) {
//         return [x, y];
//     });
// }
//
//
// getPairs(5, 9).then(function(result) {
//     console.log(result[0], result[1]);
// });

















// // Example 413 - Resolving multiple values in Promise
// // you can also return an array of promises
// function getY(x) {
//     return new Promise(function(resolve, reject) {
//         resolve(Math.round(Math.random() * x));
//     });
// }
//
// function getPairs(y, z) {
//     let x = y * z;
//
//     return [
//         Promise.resolve(x),
//         getY(x)
//     ];
// }
//
//
// Promise.all(
//     getPairs(30, 10)
// ).then(function(numbers) {
//     let number1 = numbers[0];
//     let number2 = numbers[1];
//
//     console.log(number1, number2);
// });

























// // Example 414 - Spreading arrays
// // it is used to make working with array results easier
// function spread(fn) {
//     // pass the function fn and all its parameters to the apply as an array
//     return Function.apply.bind(fn, null);
// }
//
//
// function getY(x) {
//     return new Promise(function(resolve, reject) {
//         resolve(Math.round(Math.random() * x));
//     });
// }
//
// function getPairs(y, z) {
//     let x = y * z;
//
//     return [
//         Promise.resolve(x),
//         getY(x)
//     ];
// }
//
//
//
//
// Promise.all(
//     getPairs(30, 10)
// ).then(
//     spread(function(x, y) {
//        console.log(x, y);
//     })
// );



























// // Example 415 - Spreading arrays
// // it is used to make working with array results easier
// function getY(x) {
//     return new Promise(function(resolve, reject) {
//         resolve(Math.round(Math.random() * x));
//     });
// }
//
// function getPairs(y, z) {
//     let x = y * z;
//
//     return [
//         Promise.resolve(x),
//         getY(x)
//     ];
// }
//
//
//
//
// Promise.all(
//     getPairs(30, 10)
// ).then(
//     Function.apply.bind(function(x, y) {
//         console.log(x, y);
//     }, null)
// );


























// // Example 416 - Spreading arrays - ES6 way
// // it is used to make working with array results easier
// function getY(x) {
//     return new Promise(function(resolve, reject) {
//         resolve(Math.round(Math.random() * x));
//     });
// }
//
// function getPairs(y, z) {
//     let x = y * z;
//
//     return [
//         Promise.resolve(x),
//         getY(x)
//     ];
// }
//
//
//
//
// Promise.all(
//     getPairs(30, 10)
// ).then(function(results) {
//     let [x, y] = results;
//
//     console.log(x, y);
// });























// Example 417 - Spreading arrays - ES6 way
// it is used to make working with array results easier
function getY(x) {
    return new Promise(function(resolve, reject) {
        resolve(Math.round(Math.random() * x));
    });
}

function getPairs(y, z) {
    let x = y * z;

    return [
        Promise.resolve(x),
        getY(x)
    ];
}




Promise.all(
    getPairs(30, 10)
).then(function([x, y]) {

    console.log(x, y);
});