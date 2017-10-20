// Example 13: Printing current working directory
console.log(process.cwd());






// Example 14: Printing the directory where the script that is executed is
console.log(__dirname);








// Example 15: Joining paths [Cross Platform]
let path = require('path');
console.log(path.join(__dirname, 'public', 'css', 'style.css'));
