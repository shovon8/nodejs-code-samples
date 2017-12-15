// Lexical Operation:
// It is the ability to acess the variables defined
// outside of function
// "YDKJS: Up and Running" -> "Lexical scope rules say that code in one scope can access variables of either that scope or any scope outside of it"





// // Example 92 - Lexical operation in JS
// let a = 1
//
// function one() {
//     let b = 2;
//
//     console.log(a);
//     console.log(b);
// };
//
// one();









// Example 93
(function one() {
    let a = 1;

    (function two() {
        let b = 2;

        console.log('Inside two:');
        console.log(a);
        console.log(b);
    })();


    console.log('Outside two:');
    console.log(a);
    // console.log(b); // cant access b here
})();



