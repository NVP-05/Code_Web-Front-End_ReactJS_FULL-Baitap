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
function chainDecorator(...funcs) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            let result = originalMethod.apply(this, args);
            for (const func of funcs) {
                result = func(result);
            }
            return result;
        };
        return descriptor;
    };
}
function double(value) {
    return value * 2;
}
function square(value) {
    return value * value;
}
class Calculatorss {
    add(a, b) {
        return a + b;
    }
    multiply(a, b) {
        return a * b;
    }
}
__decorate([
    chainDecorator(double, square),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Number)
], Calculatorss.prototype, "add", null);
__decorate([
    chainDecorator(square, double),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Number)
], Calculatorss.prototype, "multiply", null);
const calculatorss = new Calculatorss();
console.log(calculatorss.add(2, 3));
console.log(calculatorss.multiply(3, 4));
