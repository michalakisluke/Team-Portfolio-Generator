const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.school = school;
    }

    getRole() {
        return "Student"
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern;