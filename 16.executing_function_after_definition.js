// Example 91

// we can do this
function test() {
    console.log('test');
}

test();


// but we can also do this
(function test2() {
    console.log('test 2')
})();



// we can also use ES6 arrow operator
(() => {
    console.log('test 3');
})();