// // Example 167 - arrays can be pre-defined
// var a = [1, 2, [3]];
//
// console.log(a.length);
// console.log(a[0]);
// console.log(a[1]);
// console.log(a[2][0] === 3);












// // Example 168 - You don't need to presize an Array. Just declare one and add elements as you see fit
// var a = []; // empty aray
// console.log("Length", a.length);
//
//
// a[0] = 5;
// a[1] = "10";
// a[2] = [15];
//
//
// console.log("Length", a.length);
// console.log(a);















// // Example 169 - 'delete' operator deletes an element from an array
// // but it doesn't update the 'length' property
// var a = [1, 2, 3];
//
// console.log("Length", a.length);
// console.log(a);
//
// delete a[1];
// console.log("Length", a.length);
// console.log(a[1]);
// console.log(a);














// // Example 170 - Though 'delete' sets the array value to 'undefined', it's not the same as setting 'undefined'.
// var a = [1, 2, 3];
//
// delete a[1];
// console.log("Length", a.length);
// console.log(a[1]);
// console.log(a);
//
// console.log("\n");
//
// a[1] = undefined;
// console.log("Length", a.length);
// console.log(a[1]);
// console.log(a);













// // Example 171 - Creating Sparse Array
// // If an index is skipped, empty elements are still added in the excluded indices.
// var a = [];
//
// a[0] = 2;
// a[3] = 5;
// a[6] = 9;
//
// console.log("Length", a.length);
// console.log(a);












// // Example 172 - Named indices won't update the length of the Array.
// var a = [];
//
// a[0] = 2;
// a[1] = 5;
// a["name"] = "Shovon";
//
// console.log("Length", a.length);
// console.log(a);















// // Example 173 - Converting Array-like to Arrays - ES5
// function add() {
//     // arguments.push(4); // error, as it is Array-like, not Array
//
//     var a = Array.prototype.slice.call(arguments);
//     a.push('test');
//     console.log(a);
// }
//
//
// add(1, 2);













//
// // Example 174 - Converting Array-like to Arrays - ES6
// function add() {
//     var a = Array.from(arguments);
//     a.push('test');
//     console.log(a);
// }
//
//
// add(1, 2);
//














// // Example 175 - String and Array - same? no
// var a = "hello";
// var b = ['h', 'e', 'l', 'l', 'o'];
//
//
// console.log(a);
// console.log(b);
// console.log();
//
// console.log(a.length);
// console.log(b.length);
// console.log();
//
//
// console.log(a.indexOf('e'));
// console.log(b.indexOf('e'));
// console.log();
//
//
// var c = a.concat("-world");
// var d = b.concat(['-', 'w', 'o', 'r', 'l', 'd']);
//
// console.log(c);
// console.log(d);
// console.log();
//
//
// console.log(a); // no change
// console.log(b); // no change
// console.log();

















// // Example 176 - Strings are immutable, Arrays are mutable
// var a = 'hello';
// var b = ['h', 'e', 'l', 'l', 'o'];
//
// console.log(a);
// console.log(b);
// console.log();
//
//
// a[1] = 'E'; // won't change
// b[1] = 'E'; // will change
//
// console.log(a);
// console.log(b);









// // Example 177 - Attempting to modify Immutable String returns a new string
// // leaving the original string unmodified
// var a = 'hello';
// var b = a.toUpperCase();
//
// console.log(a);
// console.log(b);
















// // Example 178 - Converting String to Array - ES5
// var name = "Shovon";
// var nameArray = Array.prototype.slice.call(name);
// console.log(name);
// console.log(nameArray);









// // Example 179 - Converting String to Array - ES6
// var name = "Shovon";
// var nameArray = Array.from(name);
// console.log(name);
// console.log(nameArray);









// // Example 180 - Arrays are Mutable, so changes made are in place.
// // No new Array is created and returned
// var a = Array.from("hello");
// console.log(a);
//
// a[1] = 'E';
// console.log(a);














// // Example 181 - Converting Array to String
// var a = Array.from("Shovon");
// console.log(a);
//
// var s = a.join("");
// console.log(s);
















// // Example 182 - Reversing String
// // Strings dont have reverse() method - Array does
// // So you have to either convert string to array and reverse, then join
// // the array to get back string.
// // or use Array prototype method
// var s = "Shovon";
// var rs = Array.from(s).reverse().join("");
// console.log(s);
// console.log(rs);
















// // Example 183 - Applying Array.map() on String
// var s = "Shovon";
// var s_mapped = Array.prototype.map.call(s, (c) => {
//     return c.toUpperCase() + ".";
// }).join("");
//
// console.log(s);
// console.log(s_mapped);

















// // Example 184 - Applying Array.join() on String
// var s = "Shovon";
// var s_joined = Array.prototype.join.call(s, "/");
// console.log(s);
// console.log(s_joined);














// // Example 185 - Reversing String with Array.reverse()
// var s = "Shovon";
// var s_reverse = s.split("").reverse().join("");
// console.log(s);
// console.log(s_reverse);





















// // Example 186 - By default, very large or small numbers in Javascript is printed
// // in exponential form
// var a = 500000000000000000000000;
// var b = .000000000000000000000021554;
//
//
// console.log(a);
// console.log(b);
// console.log();
//
//
// // but Number.prototype.toExponential() can also be used to print in
// // exponential form
// var a = 545;
// var b = 0.001;
//
// console.log(a.toExponential());
// console.log(b.toExponential());

















// // Example 187 - Printing Numbers up to Fixed Digit:
// var mobilePrice = 255.2545; // USD
// var tvPrice = 1010.0540; //USD
//
// console.log(mobilePrice.toFixed(2) + "$");
// console.log(tvPrice.toFixed(2) + "$");












// // Example 188 - Some more example of fixed digit after decimal point
// var number = 5.42152454745345;
//
//
// console.log(number.toFixed(0));
// console.log(number.toFixed(1));
// console.log(number.toFixed(2));
// console.log(number.toFixed(3));













// // Example 189 - Fixed number of precision
// var number = 44.55478774;
// console.log(number.toPrecision(1));
// console.log(number.toPrecision(2));
// console.log(number.toPrecision(3));


















// // Example 190 - Extending Number through prototype
// Number.prototype.usd = function() {
//     return this.valueOf().toFixed(2) + "$";
// };
//
//
// console.log(42.2221.usd());
// console.log(85..usd());
// console.log(36["usd"]());
// console.log(36.245["usd"]());













// // Example 191 - Binary, Decimal, Octal, Hex numbers
// var bin = 0b11;
// var oct = 011;
// var decimal = 11;
// var hex = 0x11;
//
// console.log(bin, oct, decimal, hex);















// // Example 192 - floating point number equality
// var a = 0.1;
// var b = 0.2;
// var c = 0.3;
//
// console.log(a + b === c);
// console.log(Math.abs(a + b - c) < Number.EPSILON);

// // Number.EPSILON = 2^-52 in JavaScript









// // Example 193 - JavaScript Number range
// console.log(Number.MAX_VALUE, Number.MIN_VALUE);
// console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER); // ES6 only
















// // Example 194 - undefined variable
// // undefined can be used as a variable
// // but it is not a good practice
// function test() {
//     var undefined = false;
//     console.log(undefined);
// }
// test();












// // Example 195 - There are positive and negative zeroes in JS
// console.log(-0);
// console.log(0);
// console.log(-3 * 0);
// console.log(3 * 0);














// // Example 196 - Negative and Positive Infinities
// var positiveInf = 1 / 0;
// var negativeInf = 1 / -0;
//
// console.log(positiveInf);
// console.log(negativeInf);
















// // Example 197 - Negative zero is equal to positive Zero
// console.log(0 == -0);
// console.log(0 === -0);













// // Example 198 - Testing for negative zero
// function isNegativeZero(input) {
//     return input === input && 1 / input === -Infinity;
// }
//
// function isNegativeZero2(input) {
//     return input === input && (1 / input) === Number.NEGATIVE_INFINITY;
// }
//
// console.log(isNegativeZero(-0));
// console.log(isNegativeZero(0));
// console.log();
//
// console.log(isNegativeZero2(-0));
// console.log(isNegativeZero2(0));















// // Example 199 - NaN is never equal to NaN
// console.log(NaN == NaN);
// console.log(NaN === NaN);

















// // Example 200 - Checking for NaN
// console.log(Number.isNaN(NaN));
//
//
// // pollyfill
// // NaN is the only value/type in JavaScript that is not equal to itself
// function isNaN(input) {
//     // console.log('checking for NaN');
//     return input !== input;
// }
//
// console.log(isNaN(NaN));
// console.log(isNaN(5));



















// // Example 201 - JavaScript pass by reference and value is
// // determined by the type
// // There are no specific way to do it
// // Literals  are always copied
// // Objects, Arrays, Functions are referenced
// var a = 5;
// var b = a; // the value is copied
// b++;
// console.log(a, b);
//
//
//
//
//
// var c = [1, 2, 3];
// var d = c; // referenced
//
// d.push(4);
//
// console.log(c);
// console.log(d);












// // Example 202 - changing reference from inside function
// function addMore(input) {
//     input.push(6);
// }
//
// var a = [1, 2, 3];
//
// console.log(a);
//
// addMore(a);
// console.log(a);
















// // Example 203 - Changing the whole reference Array from inside of Function
// function changeArray(input) {
//     input.length = 0; // empty the array
//     input.push(6, 7, 8, 9);
// }
//
// var a = [1, 2, 3, 4];
// console.log(a);
//
// changeArray(a);
// console.log(a);












// // Example 204 - Array by default is referenced, but it is possible to
// // make a copy of it with Array.slice() method
// var a = [1, 2, 3];
// var b = a.slice();
//
// b.push(4);
// console.log(a);
// console.log(b);















// Example 205 - Objects can also be passed as reference
function incrementObjectKey(obj, key) {
    obj[key]++;
}


var a = {
    visitors: 10
};


console.log(a);

incrementObjectKey(a, 'visitors');
incrementObjectKey(a, 'visitors');
incrementObjectKey(a, 'visitors');
console.log(a);
