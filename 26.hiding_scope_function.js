// // 116 - problem
// function doSomething(a) {
//     b = a + doSomethingElse(a * 2);
//
//     console.log(b*3);
// }
//
// function doSomethingElse(a) {
//     return a - 1;
// }
//
// var b;
//
// doSomething(2);
// console.log(b); // b also changed outside which is not desirable


















// // 117 - so it is best to keep access to variables we don't need
// // in other places hidden
// // As it also saves the function from outside influences
// // it is a good software development practice
// function doSomething(a) {
//     function doSomethingElse(a) {
//         return a - 1;
//     }
//
//     var b = a + doSomethingElse(a * 2);
//
//     console.log(b * 3);
// }
//
//
// doSomething(2);













// // 118 - If variables are not hidden, collisions can occur
// function test1() {
//     b = 6;
// }
//
// var b = 2;
//
//
// console.log(b);
// test1();
// console.log(b); // b should be 2, but were modified from inside the function










// 119 - Hiding variables also gives you an ability to reuse the same variable name
// and you can avoid collisions
function test1() {
    var b = 2;

    console.log(b);
}


test1();