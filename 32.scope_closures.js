/*
Closure:
Closure is when a function is able to remember and access its lexical
scope even when that function is executing outside its lexical scope - YDKJS
*/







// // Example 136 - Basic Closure
//
// // // this is a simple code, plain old lexical scope
// // // closure here is invisible
// // function foo() {
// //     var a = 2;
// //
// //     function bar() {
// //         console.log(a);
// //     }
// //
// //     bar();
// // }
// //
// //
// // foo();
//
//
//
//
//
// // but a slight modification would make 'closure' visible.
// function foo() {
//     var a = 2;
//
//     function bar() {
//         console.log(a);
//     }
//
//     return bar; // instead of calling bar inside foo, we return bar
// }
//
//
// var baz = foo();
//
// baz(); // prints '2'
//
// // this is closure, as it remembers its lexical scope outside it's lexical scope.
// // the variable a can be accessed outside of foo() now.
// // bar() is referenced by baz and it executed outside of its own lexical scope
//


























// // Example 137 - Another closure - any way to execute a function outside its own lexical scope
// // is closure
// function foo() {
//     var a = 2;
//
//     function baz() {
//         console.log(a);
//     }
//
//     bar(baz);
// }
//
//
// function bar(callback) {
//     callback();
// }
//
//
//
// foo(); // prints '2'
//
// // foo calls bar() and pass a reference to baz(), then bar() prints baz() from the lexical scope outside of foo or baz



























// // Example 138 - Closures and Loops
//
// // // Prints 6. 6 times?
// // // Because the closure is tied to the variable i, which changes after each iteration of the loop
// // // At the end of the loop, the value of i is 6
// // for(var i = 0; i <= 5; i++) {
// //     setTimeout(function timer() {
// //         console.log(i);
// //     }, i * 1000);
// // }
//
//
//
//
//
// // // using IIFE doesn't work as well
// // for(var i = 0; i <= 5; i++) {
// //     (function() {
// //         setTimeout(function timer() {
// //             console.log(i);
// //         }, i * 1000);
// //     })();
// // }
//
//
//
//
//
// // // this works
// // // j creates a variable owned to the lexical scope of IIFE
// // for(var i = 0; i <= 5; i++) {
// //     (function() {
// //         var j = i;
// //         setTimeout(function timer() {
// //             console.log(j);
// //         }, i * 1000);
// //     })();
// // }
//
//
//
//
//
//
//
// // this works as well
// for(var i = 0; i <= 5; i++) {
//     (function(j) {
//         setTimeout(function timer() {
//             console.log(j);
//         }, i * 1000);
//     })(i);
// }


































// // Example 139 - Closures and Loops with 'let' block scope
// for(var i = 0; i <= 5; i++) {
//     let j = i;
//
//     setTimeout(function timer() {
//         console.log(j);
//     }, i * 1000);
// }




















// Example 140 - Closures and Loops with 'let' block scope
for(let i = 0; i <= 5; i++) {
    setTimeout(function timer() {
        console.log(i);
    }, i * 1000);
}



