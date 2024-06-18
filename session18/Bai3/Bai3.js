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
function cacheDecorator(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    const cache = {};
    descriptor.value = function (...args) {
        const key = JSON.stringify(args);
        if (key in cache) {
            console.log("Trả lại từ cache...");
            return cache[key];
        }
        console.log("Tính toán...");
        const result = originalMethod.apply(this, args);
        cache[key] = result;
        return result;
    };
    return descriptor;
}
class Calculatort {
    add(a, b) {
        return a + b;
    }
    multiply(a, b) {
        return a * b;
    }
}
__decorate([
    cacheDecorator,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Number)
], Calculatort.prototype, "add", null);
__decorate([
    cacheDecorator,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Number)
], Calculatort.prototype, "multiply", null);
const calculatort = new Calculatort();
console.log(calculatort.add(2, 3));
console.log(calculatort.add(2, 3));
console.log(calculatort.multiply(2, 3));
console.log(calculatort.multiply(2, 3));
