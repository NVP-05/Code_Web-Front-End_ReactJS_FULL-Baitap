"use strict";
class Student {
    constructor(id, age, email) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
}
let std1 = new Student(1, 19, "Phuc@gmail.com");
console.log(std1);
let std2 = new Student(1, 10, "Minh@gmail.com");
console.log(std2);
