"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function validationDecorator(validationFunction, errorMessage) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            const isValid = validationFunction(args);
            if (!isValid) {
                throw new Error(errorMessage);
            }
            return originalMethod.apply(this, args);
        };
        return descriptor;
    };
}
function isAllNumbers(args) {
    return args.every(arg => typeof arg === "number");
}
class Calculators {
    add(a, b) {
        return a + b;
    }
    multiply(a, b) {
        return a * b;
    }
}
__decorate([
    validationDecorator(isAllNumbers, "Tất cả tham số phải là số."),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Number)
], Calculators.prototype, "add", null);
__decorate([
    validationDecorator(isAllNumbers, "Tất cả tham số phải là số."),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Number)
], Calculators.prototype, "multiply", null);
const calculators = new Calculators();
console.log(calculators.add(2, 3));
console.log(calculators.multiply(3, 4));
try {
    calculators.add(2, "b");
}
catch (e) {
    console.error(e.message);
}
try {
    calculators.multiply("a", 4);
}
catch (e) {
    console.error(e.message);
}
