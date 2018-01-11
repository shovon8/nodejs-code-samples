// // Example 124 - the only way to have block scope in ES5 is try..catch. The catch portion follows
// // block scope rule
// try {
//     throw 2;
// } catch(a) {
//     console.log(a);
// }
//
//
// // console.log(a); // ReferenceError
//
//
//
//
// // in ES6 it is easy to have block scope with 'let' keyword
// {
//     let a = 2;
//     console.log(a);
// }
//
// // console.log(a); // ReferenceError
//
//
//
// // It is practical to use a JavaScript ES6 transpiler like babel to write ES6 code and let the transpiler
// // do the polyfilling for you.
//












// // Example 125 - for loop with 'let'
//
// for(let i = 0; i < 10; i++) {
//     console.log(i);
// }
//
// console.log("After loop i =", i); // // prints undefined
//
//
// for(var i = 0; i < 10; i++) {
//     console.log(i);
// }
//
// console.log("After loop i =", i); // prints 10, the value of i. no block scope









// // Example 126 - if statement and block scope

// let action = "SUM";

// if(action === "SUM") {
//     let sum = 5; // doesn't leak sum to global scope
//     // var sum = 5; // it leaks sum to global scope
//     console.log(sum);
// }

// console.log(action, sum); // ReferenceError if 'let' is used to declare 'sum'



























// // Example 127 - variable declared with 'let' will not hoist the entire block scope
// // that is, it will throw ReferenceError if accessed before declared
// // variables declared with 'var' will not do that


// // NO HOISTING HERE
// {
//     // this is so we can continue even when an error is occured
//     try {
//         console.log(message);        
//     } catch(e) {
//         console.log(e.name, '-', e.message);
//     }

//     let message = "Hello world";
// }



// // HOISTED
// {
//     console.log(message); // undefined, does not throw ReferenceError
//     var message = "Hey";
// }


























// // Example 128 - 'let' and block scope for 'for' loop
// // on for loop, variable declared with 'let' is reassigned each time
// for(let i = 0; i < 10; i++) {
//     console.log(i);
// }


// // {
// //     let i;
// //     for(i = 0; i < 10; i++) {
// //         let j = i;
// //         console.log(j);
// //     }
// // }










// Example 129 - 'const' creates block scoped variable like 'let'
// the difference between 'const' and 'let' is that, variables created
// with 'const' can't be modified
{
    const CALL_COST_PER_MINUTE = 2;
    let BALANCE = 200;


    // an attempt to modify the constant CALL_COST_PER_MINUTE
    try {
        if(BALANCE > 100) {
            CALL_COST_PER_MINUTE = 2.5; // ERROR
        }

    } catch(e) {
        console.log(e.name, "-", e.message);
        console.log("Unable to increase call cost. Standard charges applies till the issue is fixed.");
    }

    console.log("Can talk for", BALANCE / CALL_COST_PER_MINUTE, "minutes");
}






