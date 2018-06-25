// Generator:  a generator is a special kind of function that
// can start and stop one or more times, and doesn't necessarily
// ever have to finish












// // Example 418 - 'yield' is used to stop/pause execution of a function
// // The function which you want to pause execution using 'yield' must have a * before it's name
// let x = 1;
//
// function *print() {
//     x++;
//
//     yield;
//
//     console.log('The final value of x: ' + x);
// }
//
// function incrementX() {
//     x++;
// }
//
//
//
// // creates an iterator
// let it = print();
//
// // executes before 'yield' in function print();
// it.next();
//
// console.log('x before yield: ' + x);
//
// // x is incremented
// incrementX();
//
// // the function print() continues execution
// it.next();






















// // Example 419 - Handling return value from ES6 Generator
// function *add(x, y) {
//     return x + y;
// }
//
// let it = add(5, 8);
//
// // calling it.next() executes the function add()
// // as no yield is there, execution goes to the end of the function
// // and it finishes
// // The return value is an object.
// // it has 'done' and 'value' property
// let resolution = it.next();
// console.log(resolution);
//
//
// // the return value is in the 'value' property
// console.log('Return value: ' + resolution.value);
//
// // 'done' property is true if the function was run to completion
// // otherwise false
// console.log('Finished: ' + resolution.done);























// // Example 420 - ES6 generator - yield can pass argument
// function *add(x) {
//     let result = x + (yield);
//
//     return result;
// }
//
//
// let it = add(5);
//
// // the first next() starts the generator
// let tmp = it.next();
// console.log(tmp);
//
// // the later next() goes to the nth yields
// let resolution = it.next(2);
// console.log(resolution);
//
//
//
//
//
//
// // you can call it again just like function
// let it2 = add(5);
//
// let tmp2 = it2.next();
// console.log(tmp2);
//
// let resolution2 = it2.next(7);
// console.log(resolution2);


















// // Example 421 - 'yield' in generators can be used to return something
// // on next() call
// function *add(x) {
//     let sum = x + (yield "Another number");
//     return sum;
// }
//
//
// let it = add(5);
//
// let tmp1 = it.next();
// console.log(tmp1.value);
// console.log(tmp1.done);
// console.log();
//
// let tmp2 = it.next(4);
// console.log(tmp2.value);
// console.log(tmp2.done);



























// // Example 422 - Working with multiple yields in generators
// function *add() {
//     let x = yield "Enter first number.";
//     let y = yield "x = " + x + ", now enter the second number.";
//     let z = yield "x = " + x + ", y = " + y + ", now enter the last number.";
//
//     let result = x + y + z;
//     return result;
// }
//
//
// let it = add();
// // console.log(it.next());
// // console.log(it.next(2));
// // console.log(it.next(3));
// // console.log(it.next(8));
//
// // start execution. returns the value from the first yield
// console.log(it.next().value);
//
// // sets the value of the first yield and goes to the next yield and
// // returns the value of that yield
// console.log(it.next(2).value);
//
// // sets the value of the second yield and goes to the last yield and
// // returns the value of that yield
// console.log(it.next(3).value);
//
// // sets the value of the last yield and returns the result of return statement
// console.log(it.next(8).value);





















// // Example 423 - Making a wrapper for executing generators
// function *add() {
//     let x = yield "Enter first number.";
//     let y = yield "x = " + x + ", now enter the second number.";
//     let z = yield "x = " + x + ", y = " + y + ", now enter the last number.";
//
//     let result = x + y + z;
//     return result;
// }
//
//
// function step(gen) {
//     let it = gen();
//
//     return function (value) {
//         return it.next(value).value;
//     };
// }
//
//
//
// let run = step(add);
//
// console.log(run());
// console.log(run(5));
// console.log(run(6));
// console.log(run(7));


















// // Example 424 - Making stateful number generator with scopes and closures
// // Here getNextOddNumber as called each time, returns the next odd number starting from 1
// let getNextOddNumber = (function () {
//     let number;
//
//     return function() {
//         if(number === undefined) {
//             number = 1;
//         } else {
//             number += 2;
//         }
//
//         return number;
//     }
// })();
//
// for(let i = 0; i < 5; i++) {
//     console.log(getNextOddNumber());
// }











// // Example 425 - Example 424 can be re-written using iterator
// let getNextEvenNumber = (function () {
//     let number;
//
//     return {
//         [Symbol.iterator]: function () {
//             return this;
//         },
//         next: function () {
//             if(number === undefined) {
//                 number = 2;
//             } else {
//                 number += 2;
//             }
//
//             return {
//                 done: false,
//                 value: number
//             };
//         }
//     };
// })();
//
//
//
// console.log(getNextEvenNumber.next().value);
// console.log(getNextEvenNumber.next().value);


















// // Example 426 - Example 425 - using for loop to iterate over a infinite generator
// let getNextEvenNumber = (function () {
//     let number;
//
//     return {
//         [Symbol.iterator]: function () {
//             return this;
//         },
//         next: function () {
//             if(number === undefined) {
//                 number = 2;
//             } else {
//                 number += 2;
//             }
//
//             return {
//                 done: false,
//                 value: number
//             };
//         }
//     };
// })();
//
//
// let count = 0;
//
// for(let v of getNextEvenNumber) {
//     if(count === 10) {
//         break;
//     }
//
//     console.log(v);
//     count++;
// }

















// // Example 427 - array by default is iterable using for..of loop in ES6
// let numbers = [1, 5, 8, 9];
//
// for(let v of numbers) {
//     console.log(v);
// }














// // Example 428 - Example 425 - re-implemented using generator
// function *oddNumber() {
//     let number;
//
//     while(true) {
//         if(number === undefined) {
//             number = 1;
//         } else {
//             number += 2;
//         }
//
//         yield number;
//     }
// }
//
//
// let odd = oddNumber();
//
// console.log(odd.next().value);
// console.log(odd.next().value);
// console.log(odd.next().value);
// console.log(odd.next().value);
// console.log(odd.next().value);
// console.log(odd.next().value);
// console.log(odd.next().value);
//
//
//
// for(let v of odd) {
//     if(v > 200) {
//         break;
//     }
//     console.log(odd.next().value);
// }




















// // Example 429 - Run some other codes once a generator has finished running
// function *add() {
//     try {
//         let a = yield "number a";
//         let b = yield "number b";
//         let total = a + b;
//
//         return total;
//     } finally {
//         // this statement will always run after the generator has run successfully
//         console.log("*add() ran successfully.");
//     }
// }
//
//
// let adder = add();
// adder.next();
// adder.next(5);
// let result = adder.next(10).value;
// console.log(result);























// // Example 430 - An infinite generator can be stopped using iterator.return() method
// function *oddNumber() {
//     try {
//         let number;
//
//         while(true) {
//             if(number === undefined) {
//                 number = 1;
//             } else {
//                 number += 2;
//             }
//
//             yield number;
//         }
//     } finally {
//         console.log("Required odd numbers are generated.");
//     }
// }
//
//
// let odd = oddNumber();
//
// for(let v of odd) {
//     console.log(odd.next().value);
//
//     if(v > 200) {
//         odd.return("Done");
//         // console.log(odd.return("Completed.").value);
//     }
// }



































// // Example 431 - Making Asynchronous code run synchronously with generators
// function *main() {
//     try {
//         let data = yield getFileContents('data.txt');
//         console.log('Data 1:');
//         console.log(data);
//     } catch (error) {
//         console.log('Error Caught: ' + error);
//     }
// }
//
// let fs = require('fs');
//
// function getFileContents(filePath) {
//     fs.readFile(filePath, 'utf8', (error, data) => {
//         if(error) {
//             it.throw(error);
//         } else {
//             it.next(data);
//         }
//     });
// }
//
// let it = main();
//
// // start execution
// it.next();


















// // Example 432 - throwing errors in generators and catching them outside
// function *errorThrower() {
//     let a = yield;
//
//     if(typeof a !== 'number') {
//         throw "invalid number a";
//     }
//
//     let b = yield;
//
//
//     if(typeof b !== 'number') {
//         throw "invalid number b";
//     }
//
//     let sum = a + b;
//
//     return sum;
// }
//
// let adder = errorThrower();
// adder.next(); // start generator
//
// try {
//     // adder.next(6);
//     adder.next('h'); // generates error
//
//     // let result = adder.next(7);
//     // let result = adder.next('a'); // generates error
//
//
//     console.log(result.value);
// } catch (e) {
//     console.log(e);
// }























// // Example 433 - throwing errors using iterator and catching them inside generator
// function *errorCatching() {
//     try {
//         let a = yield;
//         let b = yield;
//         let sum = a + b;
//
//         return sum;
//     } catch (e) {
//         console.log(e);
//     }
// }
//
// let adder = errorCatching();
// adder.next(); // start generator
//
// let inputA = 5;
// let inputB = 7;
//
// if (typeof inputA === 'number' && typeof inputB === 'number') {
//     adder.next(inputA);
//     console.log(adder.next(inputB).value);
// } else {
//     adder.throw("invalid input type");
// }






















// // Example 434 - Combining Promise and Generator
// function addPromise(x, y) {
//     return new Promise((resolve, reject) => {
//         if(typeof x === 'number' && typeof y === 'number') {
//             resolve(x + y);
//         } else {
//             reject("arguments must be numeric.");
//         }
//     });
// }
//
//
//
//
//
// // handle result and error in generator
// function *addPromiseHandler(x, y) {
//     try {
//         let result = yield addPromise(x, y);
//         console.log(x + ' + ' + y + ' = ' + result);
//     } catch (e) {
//         console.log(e);
//     }
// }
//
//
// // run code
// // let it = addPromiseHandler('a', 8); // error
// let it = addPromiseHandler(5, 8);
// let promise = it.next().value;
// promise.then(
//     (result) => {
//         it.next(result);
//     },
//     (error) => {
//         it.throw(error);
//     }
// );













// // Example 435 - Combining Promise with ES7 or post-ES6 async-await
// function addPromise(x, y) {
//     return new Promise((resolve, reject) => {
//         if(typeof x === 'number' && typeof y === 'number') {
//             resolve(x + y);
//         } else {
//             reject("arguments must be numeric.");
//         }
//     });
// }
//
//
//
//
//
// // handle result and error in generator
// async function addPromiseHandler(x, y) {
//     try {
//         let result = await addPromise(x, y);
//         console.log(x + ' + ' + y + ' = ' + result);
//     } catch (e) {
//         console.log(e);
//     }
// }
//
//
// // run code
// addPromiseHandler(5, 8);
























// // Example 436 - controlling multiple promises with Generator
// // run() From YDKJS - slightly modified for simplicity
// function run(gen) {
//     let it = gen();
//
//     function handleNext(value) {
//         let next = it.next(value);
//
//         return handleResult(next);
//     }
//
//
//     function handleErr(err) {
//         return Promise.resolve(it.throw(err)).then(handleResult);
//     }
//
//
//     function handleResult(next) {
//         if (next.done) {
//             return next.value;
//         } else {
//             return Promise.resolve(next.value).then(handleNext, handleErr);
//         }
//     }
//
//     return Promise.resolve().then(handleNext);
// }
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
// the generator - NOTE: bad idea to use getDelayPromise after yield
// function *main() {
//     let a = yield getDelayPromise(10, 400);
//     let b = yield getDelayPromise(20, 500);
//
//     let result = yield getDelayPromise(a + b, 200);
//
//     // console.log('Main: ' + result);
// }
//
// run(main);














// // Example 437 - controlling multiple promises with Generator
// // for getting delay promise
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
// // the generator - NOTE: bad idea to use getDelayPromise after yield
// function *main() {
//     let a = yield getDelayPromise(10, 400);
//     let b = yield getDelayPromise(20, 500);
//
//     let result = yield getDelayPromise(a + b, 200);
//
//     // console.log('Main: ' + result);
// }
//
//
// // my own promise based iterator handler
// function runIt(gen, callback) {
//     let it = gen();
//
//     function handleResult(result) {
//         let itN = it.next(result);
//         let p = itN.value;
//         let s = itN.done;
//
//         if(s !== true) {
//             p.then(handleResult);
//         } else {
//             // console.log('Result: ' + result);
//             callback(result);
//         }
//     }
//
//
//     it.next().value.then(handleResult);
// }
//
//
//
// runIt(main, function(result) {
//     console.log('The result is:');
//     console.log(result);
// });






















// // Example 438 - controlling multiple promises with Generator - Efficient and Correct Way
// // for getting delay promise
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
// // the generator -
// function *main() {
//     // this makes the promises to be asynchronous
//     // and not wait for another to finish
//     let p1 = getDelayPromise(10, 400);
//     let p2 = getDelayPromise(20, 500);
//
//     let a = yield p1;
//     let b = yield p2;
//
//     let result = yield getDelayPromise(a + b, 200);
//
//     // console.log('Main: ' + result);
// }
//
//
// // my own promise based iterator handler
// function runIt(gen, callback) {
//     let it = gen();
//
//     function handleResult(result) {
//         let itN = it.next(result);
//         let p = itN.value;
//         let s = itN.done;
//
//         if(s !== true) {
//             p.then(handleResult);
//         } else {
//             // console.log('Result: ' + result);
//             callback(result);
//         }
//     }
//
//
//     it.next().value.then(handleResult);
// }
//
//
//
// runIt(main, function(result) {
//     console.log('The result is:');
//     console.log(result);
// });




























//
// // Example 439 - Re-written Example 438 with Promise.all([...]);
// // controlling multiple promises with Generator - Efficient and Correct Way
// // for getting delay promise
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
// // the generator
// function *main() {
//     // this makes the promises to be asynchronous
//     // and not wait for another to finish
//     let results = yield Promise.all([
//         getDelayPromise(10, 400),
//         getDelayPromise(20, 500)
//     ]);
//
//     let a = results[0];
//     let b = results[1];
//
//     let result = yield getDelayPromise(a + b, 200);
//
//     // console.log('Main: ' + result);
// }
//
//
// // my own promise based iterator handler
// function runIt(gen, callback) {
//     let it = gen();
//
//     function handleResult(result) {
//         let itN = it.next(result);
//         let p = itN.value;
//         let s = itN.done;
//
//         if(s !== true) {
//             p.then(handleResult);
//         } else {
//             // console.log('Result: ' + result);
//             callback(result);
//         }
//     }
//
//
//     it.next().value.then(handleResult);
// }
//
//
//
// runIt(main, function(result) {
//     console.log('The result is:');
//     console.log(result);
// });




























// // Example 440 - Re-written Example 439 - wrapping promises before used in generators makes code more readable
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
// function getNumbers(x, y) {
//     return Promise.all([
//         getDelayPromise(10, 400),
//         getDelayPromise(20, 500)
//     ]);
// }
//
// // the generator
// function *main() {
//     // this makes the promises to be asynchronous
//     // and not wait for another to finish
//     let results = yield getNumbers(10, 20);
//
//     let a = results[0];
//     let b = results[1];
//
//     let result = yield getDelayPromise(a + b, 200);
//
//     // console.log('Main: ' + result);
// }
//
//
// // my own promise based iterator handler
// function runIt(gen, callback) {
//     let it = gen();
//
//     function handleResult(result) {
//         let itN = it.next(result);
//         let p = itN.value;
//         let s = itN.done;
//
//         if(s !== true) {
//             p.then(handleResult);
//         } else {
//             // console.log('Result: ' + result);
//             callback(result);
//         }
//     }
//
//
//     it.next().value.then(handleResult);
// }
//
//
//
// runIt(main, function(result) {
//     console.log('The result is:');
//     console.log(result);
// });





























// // Example 441 - yield delegation
// // passing control of one generator to another generator
// function *f1() {
//     console.log('in f1():');
//     let x = yield 2;
//     let y = yield 3;
//     let sum = x + y;
//     console.log('f1(): ' + sum);
//     return sum;
// }
//
//
// function *f2() {
//     console.log('in f2():');
//     let a = yield 8;
//     let d = yield *f1();
//     let b = yield 7;
//     let c = yield 5;
//     let sum2 = a + b + c + d;
//     console.log('f2(): ' + sum2);
//     return sum2;
// }
//
//
// let v;
// let it = f2();
// console.log(v = it.next().value);
// console.log(v = it.next(v).value);
// console.log(v = it.next(v).value);
// console.log(v = it.next(v).value);
// console.log(v = it.next(v).value);
// console.log(v = it.next(v).value);




























// // Example 442 - Handling exception of the calling generator in the called generator
//
// // throwException() throws an exception
// function *throwException() {
//     throw "throwException error";
// }
//
// // catchException caches it
// function *catchException() {
//     try {
//         let error = yield *throwException();
//     } catch (e) {
//         console.log("catchException: " + e);
//     }
// }
//
//
//
//
// let it = catchException();
// it.next();


























// // Example 443 - Thunks in JS
// // they are special function that only requires a callback to complete.
// // it wraps the original function with arguments
// function add(a, b, cb) {
//     setTimeout(function() {
//         cb(a + b);
//     }, 1200);
// }
//
// // this is a thunk function
// function thunkAdd(cb) {
//     return add(5, 8, cb);
// }
//
// // this is how you run a thunk function
// thunkAdd(function(result) {
//     console.log(result);
// });









// Example 444 - Thunkify function
function thunkify(fn) {
    return function() {
        let args = arguments;

        return function (cb) {
            let result = fn.apply(null, args);
            return cb(result);
        };
    }
}

function add(x, y) {
    return x + y;
}


let addThunk = thunkify(add);
let addThunkCall = addThunk(3, 4);

addThunkCall(function (sum) {
    console.log('thunk function result: ' + sum);
});


