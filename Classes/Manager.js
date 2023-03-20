const Employee = require('./Classes/Employee');

class Manager extends Employee {
    constructor(officeNumber) {
        this.officeNumber = officeNumber;
    }
    getRole() {
        console.log(`This employee is a Manager`)
    }
}