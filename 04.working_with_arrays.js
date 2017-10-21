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


















