"use strict";
class Department {
    constructor(id, name, employee) {
        this.id = id;
        this.name = name;
        this.employee = employee;
    }
    describe() {
        console.log("ID:", this.id);
        console.log("Name:", this.name);
    }
}
let dpm = new Department(1, "PTIT", ["Phuc", "Minh", "Luong"]);
dpm.describe();
