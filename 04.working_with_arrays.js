// // Example 16 : Test whether some of the elements in the array meets a certain condition
// let array1 = [1, 5, 12, 44, 3];

// let isLessThan12 = (value, index, array) => {
//     return value < 12;
// };

// let isGreaterThan40 = (value, index, array) => {
//     return value > 40;
// };

// let isGreaterThan50 = (value, index, array) => {
//     return value > 50;
// };

// console.log(array1.some(isLessThan12));
// console.log(array1.some(isGreaterThan40));
// console.log(array1.some(isGreaterThan50));
















// // Example 17 : Check whether every element meets the criteria
// let array2 = [1, 2, 3, 4, 5, 7];

// let isLessThan10 = (value, index, array) => {
//     return value < 10;
// };

// let isGreaterThan10 = (value, index, array) => {
//     return value > 10;
// };

// console.log(array2.every(isLessThan10));
// console.log(array2.every(isGreaterThan10));









// // Example 18 : Merging 2 or more arrays
// let numbers = [1, 2, 3];
// let fruits = ['Apple', 'Orange'];
// let letters = ['a', 'b', 'c'];

// console.log(numbers);
// console.log(fruits);
// console.log(letters);

// // add the fruits array to the end of numbers
// let newArray1 = numbers.concat(fruits);
// console.log(newArray1);


// let newArray2 = numbers.concat(fruits, letters);
// console.log(newArray2);












// // Example 19 : Concatenate nested array
// let numbers = [1, 2, 3];
// let fruits = [['Apple', 'Orange']];
// let letters = [['a', 'b', 'c']];

// let newArray = numbers.concat(fruits, letters);
// console.log(newArray);













// // Example 20: Convert array to String
// let fruits = ['Apple', 'Orange', 'Pineapple', 'Grapes'];
// console.log(fruits);
// console.log(fruits.join('+'));
// console.log(fruits.join('/'));


// let filePaths = ['public', 'styles', 'css', 'default.css'];
// console.log(filePaths.join('/'));
















// // Example 21 : Changing every element of an array with Array Map
// let numbers = [1, 2, 3, 4, 5, 6];
// let multiplyBy2 = (number, index, array) => {
//     return number * 2;
// };
// let newNumbers = numbers.map(multiplyBy2);

// console.log(numbers);
// console.log(newNumbers);


// let sqaureRootNumbers = numbers.map(Math.sqrt);
// console.log(sqaureRootNumbers);


// let sqrt2DecimalPlaces = (number, index, array) => {
//     return Number.parseFloat(Math.sqrt(number).toFixed(2));
// };

// let squaredRootNumbers2 = numbers.map(sqrt2DecimalPlaces);
// console.log(squaredRootNumbers2);



















// // Example 22: Rearranging objects with Array.prototype.map and String.prototype.split
// // This is important, when you need to update APIs

// let peoples = [
//     {name: 'Kelly Clarkson', age: 26},
//     {name: 'Shahriar Shovon', age: 21},
//     {name: 'Taylor Swift', age: 30}
// ];

// let updatePeople = (obj, index, array) => {
//     let nObj = {};
//     let name = obj.name.split(' ');
    
//     nObj.firstName = name[0];
//     nObj.lastName = name[1];
//     nObj.age = obj.age;

//     return nObj;
// };

// let newPeoples = peoples.map(updatePeople);

// console.log('old API format:');
// console.log(peoples);

// console.log('new API format:');
// console.log(newPeoples);










// // Example 23: Map Operation on String - Encryption & Decryption
// let message = 'hello world. I love javascript';

// let encryptMessage = (c) => {
//     // convert the character code to hex
//     return c.charCodeAt(0).toString(16);
// };

// let decryptMessage = (hexC) => {
//     return String.fromCharCode(parseInt(hexC, 16));
// }

// let encryptedMessageArray = Array.prototype.map.call(message, encryptMessage);
// console.log(encryptedMessageArray.join(''));

// let decryptedMessageArray = encryptedMessageArray.map(decryptMessage);
// console.log(decryptedMessageArray.join(''));

















// // Example 24: Filter array elements
// let numbers = [1, 5, 1, 3, 4, 6, 8, 1, 4, 11, 1, 2, 45, 22, 10];

// let isLessThan10 = (value, index, array) => {
//     return value < 10;
// };

// let isGreaterThan10 = (value, index, array) => {
//     return value > 10;
// };

// let lessThan10Numbers = numbers.filter(isLessThan10);
// let greaterThan10Numbers = numbers.filter(isGreaterThan10);

// console.log(numbers);
// console.log(lessThan10Numbers);
// console.log(greaterThan10Numbers);

















// // Example 25: Sorting with Array.sort
//
// let numbers = [5, 2, 6, 9, 1, 4];
//
// let ascendingSort = (a, b) => {
//     if(a > b) {
//         return 1;
//     }
//
//     if(a < b) {
//         return -1;
//     }
//
//     return 0;
// };
//
// numbers.sort(ascendingSort);
// console.log(numbers);














// // Example 26: Object sorting with Array.sort()
// let peoples = [
//     {name: 'Avril', age: 31},
//     {name: 'Taylor', age: 21},
//     {name: 'Chelsea', age: 35},
//     {name: 'Britney', age: 15}
// ];
// console.log(peoples);
//
// let comparePeopleByAge = (a, b) => {
//     return a.age - b.age;
// };
//
//
// peoples.sort(comparePeopleByAge);
//
// console.log(peoples);












// // Example 27: Sorting string array
// let list = ['Delta', 'alpha', 'CHARLIE', 'bravo'];
// console.log(list);
//
// list.sort((a, b) => {
//     return a.toLowerCase().charCodeAt(0) - b.toLowerCase().charCodeAt(0);
// });
// console.log(list);










// // Example 28: reduce array to a value Array.prototype.reduce
// let numbers = [0, 1, 2, 3, 4, 5, 6];
//
// let cbAddAllNumbers = (accumulator, current, index, array) => {
//     return accumulator + current;
// };
//
// let result = numbers.reduce(cbAddAllNumbers);
//
// console.log(numbers);
// console.log(result);







// // Example 29: reduce obj to a value - Array.prototype.reduceRight example
// let transactions = [
//     {date: '2017-01-01', amount: 500},
//     {date: '2017-01-07', amount: -50},
//     {date: '2017-01-11', amount: -10},
//     {date: '2017-02-01', amount: 100},
//     {date: '2017-02-10', amount: -400},
//     {date: '2017-02-18', amount: 50},
//     {date: '2017-02-20', amount: -5},
//     {date: '2017-02-25', amount: 42}
// ];
//
// let currentBalance = transactions.reduceRight((prev, current) => {
//     return {amount: prev.amount + current.amount};
// });
//
// console.log(`You have ${currentBalance.amount}$ in your account`);













// // Example 30: The in operator - Test whether an object property exists
// let userObj = {
//     firstName: 'Shahriar',
//     lastName: 'Shovon',
//     country: 'BD'
// };

// console.log('firstName' in userObj);
// console.log('lastName' in userObj);
// console.log('fullName' in userObj);












// // Example 31: Array.prototype.map() initial value for the accumulator
// let numbers = [1, 1, 1, 1, 1];

// let reduceCallback = (accumulator, current) => {
//     console.log(accumulator + ' - ' + current);
//     return accumulator + current;
// };

// let total1 = numbers.reduce(reduceCallback);
// console.log(`total1 is ${total1}`);

// let total2 = numbers.reduce(reduceCallback, 5);
// console.log(`total is ${total2}`);












// // Example 32: Array.prototype.reduce() initial value for the accumulator
// // A provided default value prevents reduce() to take initial 2 elements from the
// // data set, instead, it takes 1 from the data set and uses the default value
// // as the accumulator.
// let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

// let reduceCallback = (accumulator, current) => {
//     console.log(accumulator + ' - ' + current);
//     return accumulator + ',' + current;
// };

// let total1 = names.reduce(reduceCallback);
// console.log(`total1 is ${total1}`);

// let total2 = names.reduce(reduceCallback, '');
// console.log(`total is ${total2}`);











// // Example 33 : Array.prototype.reduce() initial value for the accumulator
// let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

// let callbackNameReduce = (accumulator, current) => {
//     accumulator.push(current.toLowerCase());

//     return accumulator;
// };

// let modifiedNames = names.reduce(callbackNameReduce, []);

// console.log(names);
// console.log(modifiedNames);



















// // // Example 34: Counting number of instances with Array.prototype.reduce()
// let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];


// let callbackNameCounter = (allNames, name) => {
//     if(name in allNames) {
//         allNames[name]++;
//     } else {
//         allNames[name] = 1;
//     }

//     return allNames;
// };

// let countedNames = names.reduce(callbackNameCounter, {});


// console.log(names);
// console.log(countedNames);














// // Example 35: JavaScript ES6 spread syntax
// // Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator
// let numbers1 = [1, 2, 3];
// let numbers2 = [4, 5, 6];

// let result = [...numbers1, ...numbers2];
// console.log(result);



















// // Example 36: Merging object properties with Array.prototype.reduce();
// let friends = [{
//     name: 'Anna',
//     books: ['Bible', 'Harry Potter'],
//     age: 21
//   }, {
//     name: 'Bob',
//     books: ['War and peace', 'Romeo and Juliet'],
//     age: 26
//   }, {
//     name: 'Alice',
//     books: ['The Lord of the Rings', 'The Shining'],
//     age: 18
// }];

// let callbackBookCollector = (bookList, friend) => {
//     return [...bookList, ...friend.books];
// };

// let allBooks = friends.reduce(callbackBookCollector, []);

// console.log(allBooks);













// // Example 37: Searching for array element - Array.prototype.indexOf()
// let numbers = [1, 5, 8];

// // returns the position if found
// console.log(numbers.indexOf(5));
// console.log(numbers.indexOf(8));

// // returns -1 if not found
// console.log(numbers.indexOf(2)); 







// // Example 38: Searching for array element - Array.prototype.indexOf()
// // Start from a specific index
// let numbers = [1, 5, 8, 2, 3, 1, 4, 5, 3, 1];

// // finds the first 1
// console.log(numbers.indexOf(1));

// // finds 1 that occurs from the 2nd element
// console.log(numbers.indexOf(1, 1));

// // finds 1 that occurs from the 6th element
// console.log(numbers.indexOf(1, 6));











// // Example 39: Reverse Array elements: Array.prototype.reverse()
// let numbers = [1, 5, 8, 2];
// let friends = ['Alice', 'Bob', 'Lisa'];

// console.log(numbers);
// console.log(numbers.reverse());

// console.log(friends);
// console.log(friends.reverse());












// //  Example 40: Array.prototype.slice() - Copies a portion or all of the array into a new array
// // leaving the original array unchanged.
// // Array.slice(start, end)
// // NOTE: slice extracts up to but not including end.

// let a = ['zero', 'one', 'two', 'three'];
// let sliced = a.slice(1, 3);

// console.log(a);
// console.log(sliced);


// let last2 = a.slice(-2);
// console.log(last2);


// let allFrom1 = a.slice(1);
// console.log(allFrom1);















// // Example 41: Array.prototype.splice() - remove elements from Array
// //             0  1  2  3  4  5  6  7  8
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let removedNumbers = numbers.splice(4);

// console.log(numbers);
// console.log(removedNumbers);










// // Example 42: Array.prototype.splice() - remove elements from Array
// //             0  1  2  3  4  5  6  7  8
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // removes 2 element starting from index 4
// let removedNumbers = numbers.splice(4, 2);

// console.log(numbers);
// console.log(removedNumbers);









// // Example 43: Array.prototype.splice() - remove elements from Array
// //             0  1  2  3  4  5  6  7  8
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // removes 2 element from the end of the array
// let removedNumbers = numbers.splice(-2, 2);

// console.log(numbers);
// console.log(removedNumbers);










// // Example 44: Array.prototype.splice() - add element at any index
// //             0  1  2  3  4  5  6  7  8
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // add 1 number at index 2
// numbers.splice(2, 0, 10);

// console.log(numbers);













// // Example 45: Array.prototype.splice() - add element at any index
// //             0  1  2  3  4  5  6  7  8
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // add at index 2
// numbers.splice(2, 0, 10, 11);

// console.log(numbers);










// // Example 46: Array.prototype.splice() - add element at any index
// //             0  1  2  3  4  5  6  7  8
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // add at index 2
// // numbers.splice(2, 0, [10, 11]);
// numbers.splice(2, 0, {code: 65});

// console.log(numbers);


