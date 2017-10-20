// Example 12
let User = () => {
    let user = {};
    
    user.setFirstName = (firstname) => {
        user.firstName = firstname;
    };
    
    user.setLastName = (lastname) => {
        user.lastName = lastname;
    };
    
    user.getName = () => {
        return user.firstName + ' ' + user.lastName;
    };

    user.print = (verbose) => {
        if(verbose) {
            console.log('My name is ' + user.getName());
            return;
        }

        console.log(user.getName());
    }

    return user;
};


module.exports = User;