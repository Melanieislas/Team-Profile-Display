const Employee = require('./Classes/Employee');

class Engineer extends Employee {
    constructor(github) {
        this.github = github;
    }
    getGithub() {
        console.log(`Github: ${this.github}`);
    }
    getRole() {
        console.log(`This employee is an Engineer`);
    }
}