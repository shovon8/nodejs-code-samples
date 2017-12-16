// // Example 110 - Strict mode in a specific mode
// function foo() {
//     "use strict";  // turns on strict mode in this scope
//
//     // this code is strict mode
//
//     function bar() {
//         // this code is strict mode
//     }
// }
//
// foo();
//
//
// // this code is not strict mode
// a = 2;















// Example 111 - Strict mode enabled globally - in the whole file
"use strict";  // turns on strict mode for whole file

function foo() {
    // this code is strict mode

    function bar() {
        // this code is strict mode
    }
}

foo();


// this code is in strict mode as well
a = 2; // throws error, because of strict mode




