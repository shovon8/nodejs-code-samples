// // Example 88 - write a file
// let fs = require('fs');
//
// fs.writeFile('./data.txt', (() => {
//     return 'hello world';
// })(), (err) => {
//     if(err) {
//         console.log("Can't write to file.");
//         return;
//     }
//
//     console.log('file write successful.');
// });





// Example 89 - Reading a file
let fs = require('fs');

fs.readFile('./data.txt', {encoding: 'utf8'}, (err, data) => {
    if(err) {
        console.log("Can't read file.");
        return;
    }

    console.log('file read successful.');
    console.log('contents:');
    console.log(data);
});