// // Example 349 - Object Oriented - OO model of an example
// function Task(id) {
//     this.id = id;
// }
//
//
// Task.prototype.outputId = function() {
//     console.log(this.id);
// };
//
//
// function XYZ(id, label) {
//     Task.call(this, id);
//     this.label = label;
// }
//
//
// // ES6+ - inheritance
// Object.setPrototypeOf(XYZ.prototype, Task.prototype);
//
// // // ES5- inheritance
// // XYZ.prototype = Object.create(Task.prototype);
//
//
// XYZ.prototype.outputTaskDetails = function() {
//     this.outputId();
//     console.log(this.label);
//     console.log();
// };
//
//
//
// function ABC(id, type, msg) {
//     Task.call(this, id);
//     this.type = type;
//     this.msg = msg;
// }
//
//
// // ES6+ inheritance
// Object.setPrototypeOf(ABC.prototype, Task.prototype);
//
// // // ES5- inheritance
// // ABC.prototype = Object.create(Task.prototype);
//
//
// ABC.prototype.outputTaskDetails = function() {
//     this.outputId();
//     console.log("[", this.type, "]", this.msg);
//     console.log();
// };
//
//
//
//
// var t1 = new XYZ(4, 'hello-world');
// t1.outputTaskDetails();
//
// var t2 = new XYZ(5, 'printing-queue');
// t2.outputTaskDetails();
//
// var t3 = new ABC(8, 'system', 'connect printer');
// t3.outputTaskDetails();
//
// var t4 = new ABC(9, 'printer', 'printer is ready');
// t4.outputTaskDetails();






















// // Example 350 - OLOO (Object Linked to Other Object) or Delegate model of Example 349
// var Task = {
//     setId: function(id) {
//         this.id = id;
//     },
//     outputId: function() {
//         console.log(this.id);
//     }
// };
//
//
// // Object linking inheritance equivalent
// var XYZ = Object.create(Task);
//
// XYZ.prepareTask = function(id, label) {
//     this.setId(id);
//     this.label = label;
// };
//
// XYZ.outputTaskDetails = function() {
//     this.outputId();
//     console.log(this.label);
//     console.log();
// };
//
//
// // Object linking inheritance equivalent
// var ABC = Object.create(Task);
// ABC.prepareTask = function(id, type, msg) {
//     this.setId(id);
//     this.type = type;
//     this.msg = msg;
// };
//
// ABC.outputTaskDetails = function() {
//     this.outputId();
//     console.log("[ " + this.type + " ]", this.msg);
//     console.log();
// };
//
//
//
// var t1 = Object.create(XYZ);
// t1.prepareTask(5, 'hello-world');
// t1.outputTaskDetails();
//
// var t2 = Object.create(XYZ);
// t2.prepareTask(9, 'printer');
// t2.outputTaskDetails();
//
//
//
// var t3 = Object.create(ABC);
// t3.prepareTask(5, 'system', 'connect usb');
// t3.outputTaskDetails();
//
// var t4 = Object.create(ABC);
// t4.prepareTask(9, 'printer', 'print document');
// t4.outputTaskDetails();






















// // Example 351 - Another example of Object Oriented - OO model
// function Foo(who) {
//     this.me = who;
// }
//
// Foo.prototype.identify = function() {
//     return "I am " + this.me;
// };
//
//
// function Bar(who) {
//     Foo.call(this, who);
// }
//
// Bar.prototype = Object.create(Foo.prototype);
//
// Bar.prototype.speak = function() {
//     console.log("Hello", this.identify() + ".");
// };
//
//
// var b1 = new Bar('Shovon');
// var b2 = new Bar('Sharmin');
//
// b1.speak();
// b2.speak();












// // Example 352 - Implementing Example 351 with Object Linked to Other Object - OLOO model
// Foo = {
//     init: function(who) {
//         this.me = who;
//     },
//     identify: function() {
//         return "I am " + this.me;
//     }
// };
//
// Bar = Object.create(Foo);
//
// Bar.speak = function() {
//     console.log("Hello", this.identify() + ".");
// };
//
//
// var b1 = Object.create(Bar);
// b1.init('Shovon');
//
// var b2 = Object.create(Bar);
// b2.init('Sharmin');
//
//
// b1.speak();
// b2.speak();


























// // 353 - Implementing Example 351 with Object Linked to Other Object - OLOO model
// Foo = {
//     init: function(who) {
//         this.me = who;
//         return this;
//     },
//     identify: function() {
//         return "I am " + this.me;
//     }
// };
//
// Bar = Object.create(Foo);
//
// Bar.speak = function() {
//     console.log("Hello", this.identify() + ".");
//
//     return this;
// };
//
//
// var b1 = Object.create(Bar).init('Shovon').speak();
// var b2 = Object.create(Bar).init('Sharmin').speak();
//
//
// console.log();
// b1.speak();
// b2.speak();

















// Example 354 - 357 in '51.oo_oloo_model_examples.html' file


























// // Example 358 - OLOO style object declaration shorthand
// var GEO_2D = {
//     geometry: [],
//     add: function(x, y) {
//         this.x = x;
//         this.y = y;
//         this.geometry.push([this.x, this.y]);
//     },
//     print: function() {
//         console.log(this.x, this.y);
//     }
// };
//
//
// GEO_2D.add(5, 6);
// GEO_2D.add(9, 2);
// GEO_2D.print();
// console.log(GEO_2D.geometry);
// console.log();
//
//
//
//
// // shorthand of OLOO object declaration
// var GEO = {
//     geometry: [],
//     add(x, y) {
//         this.x = x;
//         this.y = y;
//         this.geometry.push([this.x, this.y]);
//     },
//     print() {
//         console.log(this.x, this.y);
//     }
// };
//
//
// GEO.add(15, 60);
// GEO.add(3, 1);
// GEO.print();
// console.log(GEO.geometry);

























// // Example 359 - Testing prototype links before calling function in OO style
// function Widget(width, height) {
//     this.width = width;
//     this.height = height;
// }
//
//
// Widget.prototype.render = function() {
//     console.log('rendering Widget');
// };
//
//
// function Button(label, width, height) {
//     Widget.call(this, width, height);
//     this.label = label;
// }
//
// Object.setPrototypeOf(Button.prototype, Widget.prototype);
//
// Button.prototype.render = function() {
//     console.log('rendering Button');
// };
//
//
// Button.prototype.onClick = function() {
//     console.log('Button onClick handler');
// };
//
//
// var b1 = new Button('Default', 100, 30);
//
// console.log();
// console.log(b1 instanceof Button);                              // true
// console.log(b1 instanceof Widget);                              // true
// console.log(Object.getPrototypeOf(b1) === Button.prototype);    // true
// console.log(Object.getPrototypeOf(b1) === Widget.prototype);    // false
// console.log(Widget.prototype.isPrototypeOf(b1));                // true
// console.log(Button.prototype.isPrototypeOf(b1));                // true
// console.log();
//
// // checking before calling certain method
// if(b1 instanceof Button) {
//     b1.render();
// }
//
// if(b1 instanceof Widget) {
//     b1.render();
// }
//
// if(Object.getPrototypeOf(b1) === Button.prototype) {
//     b1.render();
// }



































// // Example 360 - Testing before calling function in OLOO style
// // Simplified in OLOO than OO style
// var Widget = {
//     init(width, height) {
//         this.width = width;
//         this.height = height;
//     },
//     render() {
//         console.log('rendering Widget');
//     }
// };
//
//
// var Button = Object.create(Widget);
//
// Button.setup = function(label, width, height) {
//     this.init(width, height);
//     this.label = label;
// };
//
// Button.build = function() {
//     console.log('rendering Button "' + this.label + '"');
// };
//
//
// var b1 = Object.create(Button);
//
// // checking and calling methods
// if(b1.setup) {
//     b1.setup('Click Here', 100, 50);
// }
//
// if(b1.build) {
//     b1.build();
// }































// Example 361 - ES6 class problem - No way to add static class property
// If you want to add a class property, you will have to go back to prototype
class Test {
    constructor() {
        Test.prototype.count++;
        console.log("Test " + Test.prototype.count);
    }
}

// defining property
Test.prototype.count = 0;

var c1 = new Test();
var c2 = new Test();

console.log(c1.count, c2.count);














