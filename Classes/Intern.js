const Employee = require('./Classes/Employee');

class Intern extends Employee {
    constructor(school) {
        this.school = school;
    }
    getSchool(){
        console.log(`This intern attends ${this.school}`);
    }
    getRole() {
        console.log(`This employee is an Intern`)
    }
}