"use strict";
class Circle {
    constructor(R) {
        this.R = R;
        this.S = R * R + "PI";
        this.P = 2 * R + "PI";
    }
    setCricle(R) {
        this.R = R;
        this.S = R * R + "PI";
        this.P = 2 * R + "PI";
    }
    getCricle() {
        console.log("Bán kính:", this.R);
        console.log("Chu vi:", this.P);
        console.log("Diện tích:", this.S);
    }
}
let crl = new Circle(3);
console.log(crl);
crl.setCricle(4);
crl.getCricle();
