// // Example 11: Test
// let User = require('./user.model.exports_demo').User();
// let User2 = require('./user.model.exports_demo').User();

// User.setFirstName('Shahriar');
// User.setLastName('Shovon');

// User2.setFirstName('Alex');
// User2.setLastName('Cooper');

// User.print();
// User2.print();











// Example 12: Test
let User = require('./user.model.module_exports.demo');

let user1 = User();
let user2 = User();

user1.setFirstName('Shahriar');
user1.setLastName('Shovon');

user2.setFirstName('Alex');
user2.setLastName('Cooper');

user1.print();
user2.print();

user1.print(true);
user2.print(true);

