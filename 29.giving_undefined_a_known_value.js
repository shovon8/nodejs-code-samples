// Example 123 - With the help of IIFE, the identifier undefined can have a default
// value within a scope

(function init(undefined) {
    console.log("the value of undefined", undefined);


    let a = undefined;
    // let a = 5;

    let b = 2;

    if(a === undefined || b === undefined) {
        console.log("can't perform addition.");
    } else {
        console.log(a + b);
    }
})(false);
