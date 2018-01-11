/*
* JDKJS:
* The easiest way to distinguish declaration vs. expression is the
position of the word function in the statement (not just a line,
but a distinct statement). If function is the very first thing in
the statement, then it’s a function declaration. Otherwise, it’s a
function expression
* */


// Example 120 - Function Declaration vs Expression

// this is a function declaration
function printHello() {
    console.log("Hello");
}



// this is a function expression, because 'function' is not the very first thing in the statement
(function printHelloWorld() {
    console.log("Hello World");
})();


