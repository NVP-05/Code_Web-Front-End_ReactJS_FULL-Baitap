"use strict";
class Vehiclee {
    constructor(name, year, company, id) {
        this.name = name;
        this.year = year;
        this.company = company;
        this.id = id;
    }
    displayInfo() {
        console.log("Name:", this.name);
        console.log("Year:", this.year);
        console.log("Company:", this.company);
        console.log("ID:", this.id);
    }
}
let newCar = new Vehiclee("Toyota Camry", 2020, "Toyota", 2024);
newCar.displayInfo();
