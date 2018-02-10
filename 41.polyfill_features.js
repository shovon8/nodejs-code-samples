// // Example 164 - workaround 1
//
// // toggle comment this function to see what atob2() function prints
// // in the end
// function atob2() {
//     console.log("Hello JavaScript");
// }
//
//
// if(typeof atob2 === "undefined") {
//     console.log('atob2 does not exist.');
//     atob2 = () => {
//         console.log("Hello Node.js");
//     };
// }
//
//
// atob2();












// // Example 165 - workaround 2
// // function Logger(msg) {
// //     var now = (new Date()).toUTCString();
// //     console.log("[" + now + "] " + msg);
// // }
// //
// // Logger('server started...');
//
//
//
// (function doSomethingCool() {
//     var helper = (typeof Logger !== "undefined") ? Logger : function (msg) {
//         console.log("[" + Date.now() + "] " + msg);
//     };
//
//
//     helper('server started...');
// })();


