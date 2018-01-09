// Example 115: 'with' leaks variable to the global scope. that is why you shouldn't use it and it is deprecated
// anyway. This example is to demonstrate that a variable is leaked to the global scope.

let user = {
    firstName: "Shahriar",
    lastName: "Shovon"
};


// no problem here
with(user) {
    console.log(firstName);
    console.log(lastName);
}



with(user) {
    country = 'BD'; // creates a global variable because 'country' property does not exists.
    firstName = 'Al-Shahriar'; // changes the value of the property 'firstName'
}


console.log("User data:");
console.log(user);

// can access the 'country' variable in global scope (very bad)
console.log("country =", country);
