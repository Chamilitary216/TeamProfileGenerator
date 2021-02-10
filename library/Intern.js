const Employee = require("./Employee");

class intern extends Employee {
    constructor (nsme, email, id, school) {
        super (name, email, id);
        this.school = school;
    }
    getPosition() {
        return "Intern";
    }
    getSchool() {
        return this.school;
    }
}

module.exports = Intern;