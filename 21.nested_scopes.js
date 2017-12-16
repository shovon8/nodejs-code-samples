// // Example 104 - Nested scopes
// function test1() {
//     let a = 1;
//
//     function test2() {
//         let b = 2;
//
//         function test3() {
//             let c = 3;
//
//             console.log(a, b, c);
//         }
//
//         test3();
//         console.log(a, b);
//     }
//
//     test2();
//     console.log(a);
// }
//
//
//
// test1();
// // Explanation:
// // -> test1() calls test2()
// //      -> test2() calls test3()
// //          -> test3() prints a, b, c
// //          <- return to test2()
// //      -> test2() prints a, b
// //      <- return to test1()
// // -> test1() prints a
// // <- return to global scope













// // Example 105 - Nested scopes
// function foo() {
//     a = 1;
// }
// foo();
//
// console.log(a); // a is global from another scope - this is a bad practice










// // Example 106 - Nested scopes
// 'use strict';
//
// function foo() {
//     a = 1;
// }
// foo();
//
// // a is global from another scope - this is a bad practice
// // so strict mode throws an error
// console.log(a);














// // Example 107 - ES6 let keyword allows variable
// // to be defined in an individual block
// // {..}
//
// function foo() {
//     let a = 1;
//
//     console.log(a);
// }
//
//
// foo();
//
// console.log(a); // throws error














// // Example 108 - let scope
// function foo() {
//     let a = 1; // can be accessed anywhere in foo()
//
//     if(a >= 1) {
//         let b = 2; // can be accessed anywhere inside if, but not outside
//
//         console.log(a, b);
//     }
//
//     console.log(a);
//     // console.log(b); // error
// }
//
// foo();












// Example 109 - let scope
function foo() {
    let a = 1; // can be accessed anywhere in foo()

    if(a >= 1) {
        let b = 2; // can be accessed anywhere inside if, but not outside

        a += b; // can change a from inside if
        console.log(a, b);
    }

    console.log(a);
}

foo();