// // Example 146 - Function.prototype.call() vs Function.prototype.apply()
// // .call() accepts function parameters as seperate variables
// // .apply() accepts the function parameters as an array
// function printName(firstName, lastName) {
//     console.log(firstName, lastName);
// }
//
// printName.apply(undefined, ["Shahriar", "Shovon"]);
// printName.call(undefined, "Shahriar", "Shovon");












// // Example 147 - Function.prototype.call()
// function Product(name, price) {
//     this.name = name;
//     this.price = price;
// }
//
// function Food(name, price) {
//     Product.call(this, name, price);
//     this.category = "food";
// }
//
// function Toy(name, price) {
//     Product.call(this, name, price);
//     this.category = "toy";
// }
//
// var laptop = new Toy("Raspberry Pi Car", 54);
// var fries = new Food("Chicken Fry", 24);
//
// console.log(laptop);
// console.log(fries);









// Example 148 - Creating a simple Module Manager
var MyModules = (function Manager() {
    var modules = {};

    function define(name, deps, impl) {
        for(var i = 0; i < deps.length; i++) {
            deps[i] = modules[deps[i]];
        }

        modules[name] = impl.apply(impl, deps);
    }

    function get(name) {
        return modules[name];
    }

    return {
        define: define,
        get: get
    };
})();


MyModules.define("bar", [], function () {
    function hello(who) {
        return "Let me introduce: " + who;
    }

    return {
        hello: hello
    };
});

MyModules.define("foo", ["bar"], function (bar) {
    var hungry = "hippo";

    function awesome() {
        console.log(bar.hello(hungry).toUpperCase());
    }

    return {
        awesome: awesome
    };
});



var bar = MyModules.get("bar");
var foo = MyModules.get("foo");


console.log(bar.hello("hippo"));
foo.awesome();


