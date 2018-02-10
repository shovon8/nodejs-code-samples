// // Example 166 - Custom Plugin
//
// // function test(callback) {
// //     var x = 23;
// //     callback(x);
// // }
// //
// // test(function(x) {
// //     console.log(x);
// // });
//
//
//
//
//
//
// function Weber(callback) {
//     // console.log('Weber v1.0');
//
//     var Logger = function(msg) {
//         var now = (new Date()).toUTCString();
//         console.log("[" + now + "] " + msg);
//     };
//
//     var api = {
//         Logger: Logger
//     };
//
//     callback(api);
// }
//
// Weber(function ($) {
//     $.Logger('hello world');
// });