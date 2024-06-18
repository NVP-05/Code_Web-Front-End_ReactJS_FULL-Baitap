"use strict";
class Vehicle {
    constructor(name, year, company) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
}
let vhc1 = new Vehicle("R8", 2020, "Audi");
console.log(vhc1.name);
console.log(vhc1.year);
console.log(vhc1.company);
