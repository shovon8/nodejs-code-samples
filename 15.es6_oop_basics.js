// Example 90 - ES6 Class demo
class Human {
    constructor(firstName, lastName, age, country) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.country = country;
    }


    toString() {
        return `${this.firstName} ${this.lastName} (${this.age}, ${this.country})`;
    }


    print() {
        console.log(this.toString());
    }
}





let shovon = new Human('Shahriar', 'Shovon', 21, 'BD');
let alex = new Human('Alex', 'Cooper', 24, 'USA');


shovon.print();
alex.print();


console.log("\n--------------------------------");
console.log(shovon.toString());
console.log(alex.toString());