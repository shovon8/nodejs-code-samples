// // Example 141 - Closure Modules
// function Person() {
//     var firstName = "Shahriar";
//     var lastName = "Shovon";
//     var country = "BD";
//
//
//     function printName() {
//         console.log(firstName, lastName);
//     }
//
//     function printCountry() {
//         console.log(country);
//     }
//
//
//     // exposes the inner scope to the outside using closures
//     return {
//         printName: printName,
//         printCountry: printCountry
//     };
// }
//
//
// var foo = Person();
//
// foo.printName();
// foo.printCountry();
























// // Example 142 - Closure Modules
// function Person() {
//     var firstName = "Shahriar";
//     var lastName = "Shovon";
//     var country = "BD";
//
//
//     function getName() {
//         return firstName + " " + lastName;
//     }
//
//     function getCountry() {
//         return country;
//     }
//
//     function setName(first, last) {
//         firstName = first;
//         lastName = last;
//     }
//
//     function setCountry(c2d) {
//         country = c2d;
//     }
//
//
//     // API
//     // exposes the inner scope to the outside using closures
//     return {
//         printName: function() {
//             console.log(getName());
//         },
//         printCountry: function() {
//             console.log(getCountry());
//         },
//         setName: setName,
//         setCountry: setCountry
//     };
// }
//
//
// var foo = Person();
// foo.setCountry("US");
// foo.setName("Sheldon", "Cooper");
//
// foo.printName();
// foo.printCountry();
























// // Example 142 - Closure Modules
// function Person(first, last, c2d) {
//     var firstName = first;
//     var lastName = last;
//     var country = c2d;
//
//
//     function getName() {
//         return firstName + " " + lastName;
//     }
//
//     function getCountry() {
//         return country;
//     }
//
//     function setName(first, last) {
//         firstName = first;
//         lastName = last;
//     }
//
//     function setCountry(c2d) {
//         country = c2d;
//     }
//
//
//     // API
//     // exposes the inner scope to the outside using closures
//     return {
//         printName: function() {
//             console.log(getName());
//         },
//         printCountry: function() {
//             console.log(getCountry());
//         },
//         setName: setName,
//         setCountry: setCountry
//     };
// }
//
//
// var foo = Person("Sheldon", "Cooper", "US");
//
// foo.printName();
// foo.printCountry();
//
// foo.setCountry("UK");
// foo.setName("Shelly", "Cooper");
//
// foo.printName();
// foo.printCountry();
//
//
//
// var bar = Person("Alex", "Cooper", "US");
// bar.printName();
// bar.printCountry();
//
//






































// // Example 143 - Closure Modules
// function Person(first, last, c2d) {
//     var firstName = first;
//     var lastName = last;
//     var country = c2d;
//
//
//     function getName() {
//         return firstName + " " + lastName;
//     }
//
//     function getCountry() {
//         return country;
//     }
//
//     function setName(first, last) {
//         firstName = first;
//         lastName = last;
//     }
//
//     function setCountry(c2d) {
//         country = c2d;
//     }
//
//
//     function API() {
//         return {
//             printName: function() {
//                 console.log(getName());
//             },
//             printCountry: function() {
//                 console.log(getCountry());
//             },
//             setName: setName,
//             setCountry: setCountry
//         };
//     }
//
//
//     // API
//     // exposes the inner scope to the outside using closures
//     return API();
// }
//
//
// var foo = Person("Sheldon", "Cooper", "US");
// foo.printName();
// foo.printCountry();
//
//
// var bar = Person("Alex", "Cooper", "UK");
// bar.printName();
// bar.printCountry();



























//
// // Example 144 - Closure Modules
// function Person(first, last, c2d) {
//     var firstName = first;
//     var lastName = last;
//     var country = c2d;
//
//
//     function getName() {
//         return firstName + " " + lastName;
//     }
//
//     function getCountry() {
//         return country;
//     }
//
//     function setName(first, last) {
//         firstName = first;
//         lastName = last;
//     }
//
//     function setCountry(c2d) {
//         country = c2d;
//     }
//
//
//     var publicAPI = {
//         printName: function() {
//             console.log(getName());
//         },
//         printCountry: function() {
//             console.log(getCountry());
//         },
//         setName: setName,
//         setCountry: setCountry
//     };
//
//
//     // API
//     // exposes the inner scope to the outside using closures
//     return publicAPI;
// }
//
//
// var foo = Person("Sheldon", "Cooper", "US");
// foo.printName();
// foo.printCountry();
//
//
// var bar = Person("Alex", "Cooper", "UK");
// bar.printName();
// bar.printCountry();
































