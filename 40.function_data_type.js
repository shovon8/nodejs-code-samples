// // Example 159 - function arguments length
// function test(a, b, c) {
// }
//
//
// console.log(test.length);














// // Example 160 - function arguments array
// function test() {
//     console.log(arguments);
//
//
//     // printing arguments
//     for(var i = 0; i < arguments.length; i++) {
//         console.log("argument " + (i + 1) + " = " + arguments[i]);
//     }
// }
//
//
// test(5, 6, 8, 'test', 9);
//

















// // Example 161 - checking for global variable
//
// // enable debug
// var DEBUG = true;
//
//
// // disable debug
// // DEBUG = undefined;
//
// function add(a, b) {
//     var result = a + b;
//
//
//     // debug log
//     if(typeof DEBUG !== "undefined") {
//         console.log("[*] Adding " + a + " and " + b + " and the result is " + result);
//     }
//
//     console.log(result);
// }
//
//
// add(5, 6);
// add(7, 9);
















// // Example 162 - checking for global variable - improved
//
// // enable debug
// var DEBUG = true;
//
// // DEBUG = false;
//
// function add(a, b) {
//     var result = a + b;
//
//
//     // debug log
//     if(typeof DEBUG !== "undefined" && DEBUG === true) {
//         console.log("[*] Adding " + a + " and " + b + " and the result is " + result);
//     }
//
//     console.log(result);
// }
//
//
// add(5, 6);
// add(7, 9);














// Example 163 - checking for global variable - improved

// enable debug
var DEBUG = true;

// disable debug
// var DEBUG = false;



function debug() {
    return (typeof DEBUG !== "undefined" && DEBUG === true);
}

function add(a, b) {
    var result = a + b;


    // debug log
    if(debug()) {
        console.log("[*] Adding " + a + " and " + b + " and the result is " + result);
    }

    console.log(result);
}


add(5, 6);
add(7, 9);