/**
 * By naming a function
 *      - it can have a name in the stack trace if needed to debug
 *      - it can call itself and event handlers can detach/unbind the event from the function
 *      - it makes the code or function self-documented
 */










// // Example 121 - Naming Anonymous Function
//
// // anonymous callback function expression
// setTimeout(function() {
//     console.log("hello world");
// }, 2000);
//
// // named callback function expression
// setTimeout(function printHello() {
//     console.log("hello");
// }, 5000);
//
//
// // // can't be accessed from here, so callback functions have their own scope
// // // Since the name of the callback function is also wrapped in different scope, its a good idea to always
// // // name a callback function for the added benefits
// // printHello();
//
//
//
//
//
// // It's best to use named function expression in IIFE (Immediately Invoked Function Expression)
// (function init() {
//     console.log("initializing app...");
// })();


















// Example 122 - IIFE can be used in other ways as well
    // NOTE: works on browser only
var message = "I am in global scope";

(function init(global) {
    var message = "I am inside IIFE";
    console.log(message);
    console.log(global.message);
})(window);





// this example can also be written in UMD pattern as follows
var message2 = "I am in global scope";

(function defineWindow(callback) {
    callback(window);
})(function init(global) {
    var message2 = "I am in defineWindow->init";

    console.log(message2);
    console.log(global.message2);
});