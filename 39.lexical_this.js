// // Example 153 - works on browser
// var obj = {
//     id: "Awesome",
//     print: function printFunction() {
//         console.log(this.id);
//     }
// };
//
//
// var id = "Not Awesome!";
//
//
// obj.print(); // "Awesome"
//
// setTimeout(obj.print, 1000); // "Not Awesome!"




















// // Example 154 - works on browser
// var obj = {
//     id: "Awesome",
//     print: function printFunction() {
//         var self = this;
//         setTimeout(function timer() {
//             console.log(self.id);
//         }, 100);
//     }
// };
//
//
// var id = "Not Awesome!";
//
//
// obj.print(); // "Awesome"



















// // Example 155 - works on browser
// var obj = {
//     id: "Awesome",
//     count: 0,
//     print: function printFunction() {
//         var self = this;
//         self.count++;
//         setTimeout(function timer() {
//             console.log(self.id);
//         }, 100);
//     }
// };
//
// obj.print(); // "Awesome"
// obj.print(); // "Awesome"
// obj.print(); // "Awesome"
// obj.print(); // "Awesome"
// obj.print(); // "Awesome"
//
// console.log(obj.count);

















// // Example 156 - lexical this - arrow function - works on browser
// var obj = {
//     id: "Awesome",
//     count: 0,
//     print: function printFunction() {
//         this.count++;
//
//         setTimeout(() => {
//             console.log(this.id);
//         }, 100);
//     }
// };
//
// obj.print(); // "Awesome"
// obj.print(); // "Awesome"
// obj.print(); // "Awesome"
// obj.print(); // "Awesome"
// obj.print(); // "Awesome"
//
// console.log(obj.count);



















// // Example 157 - bind() for binding this
// var obj = {
//     count: 0,
//     print: function printFunction() {
//         setTimeout(function timer() {
//             this.count++;
//             console.log(this.count);
//         }.bind(this), 10);
//     }
// };
//
// obj.print();
// obj.print();
// obj.print();
// obj.print();
// obj.print();












// Example 158 - lexical this - arrow function - works on browser
var obj = {
    count: 0,
    print: function printFunction() {
        setTimeout(() => {
            this.count++;
            console.log(this.count);
        }, 10);
    }
};

obj.print();
obj.print();
obj.print();
obj.print();
obj.print();