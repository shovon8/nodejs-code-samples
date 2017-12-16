// Example 103 - Function Hositing
// Calling a function before it is declared/defined
let a = 2;


test();

function test() {
    let a = 3;
    console.log(a);
}

console.log(a);