// Example 11 : exports User
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

    user.print = () => {
        console.log(user.getName());
    }

    return user;
};



exports.User = User;