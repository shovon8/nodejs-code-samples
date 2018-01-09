// // Example 112 - basic of closures
// // According to YDKJS
// // "a way to remember and continue to access a function’s scope (its variables) even once the function has finished running."
//
//
// function makeAdder(x) {
//     function add(y) {
//         return x + y;
//     }
//
//     return add;
// }
//
//
// let addOne = makeAdder(1);
// let addTen = makeAdder(10);
//
// console.log(addOne(10)); // 11
// console.log(addOne(20)); // 21
// console.log(addTen(30)); // 40
// console.log(addTen(40)); // 50
// console.log(addOne(50)); // 51












// Example 113 - javascript module with closures
// dummy user database
const DATABASE = [{
    username: 'alex',
    password: '123'
}, {
    username: 'shovon',
    password: 'abc'
}];



function User() {
    let username, password;

    function doLogin(user, pass) {
        username = user;
        password = pass;

        let loggedIn = false;

        DATABASE.forEach(function loop(data) {
            if(loop.stop) {
                return;
            }

            if(data.username === username && data.password === password) {
                loggedIn = true;
                loop.stop = true;
            }
        });

        console.log(username + " login status = " + loggedIn);
    }

    let publicAPI = {
        login: doLogin
    };

    return publicAPI;
}



let alex = User();
alex.login('alex', '123');

let shovon = User();
shovon.login('shovon', 'abcd');


// wrong password test
// let alex = User();
// alex.login('alex', '123b');