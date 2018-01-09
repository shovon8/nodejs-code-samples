// Example 114 - this identifier basics
// does not point to the function/object this is in.
// what this resolves to depends on how the function was called.
function test() {
    console.log(this.title);
}


test(); // undefined



title = "test title";
test(); // prints the title from the global scope


let myObj1 = {
    title: "I love Node.js",
    test: test
};

myObj1.test(); // prints "I love Node.js"


let myObj2 = {
    title: "I love JavaScript"
};

test.call(myObj2); // prints "I love JavaScript"


new test(); // prints undefined - as this is a new empty object


