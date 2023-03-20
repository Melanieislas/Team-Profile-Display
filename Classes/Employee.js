

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        console.log(`Employee name: ${this.name}`);
    }
    getEmail() {
        console.log(`Employee email: ${this.email}`)
    }
    getRole() {
        console.log(`Employee`);
    }
}

module.exports = Employee;
