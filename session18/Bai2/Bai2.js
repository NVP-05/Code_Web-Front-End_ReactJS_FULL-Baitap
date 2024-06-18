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
function timingDecorator(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        const start = Date.now();
        const result = originalMethod.apply(this, args);
        const end = Date.now();
        const executionTime = end - start;
        console.log(`Hàm "${propertyKey}" được gọi với các tham số: ${JSON.stringify(args)}. Thời gian thực thi: ${executionTime} ms. Kết quả trả về: ${JSON.stringify(result)}`);
        return result;
    };
    return descriptor;
}
class Calculatorr {
    add(a, b) {
        return a + b;
    }
    multiply(a, b) {
        return a * b;
    }
}
__decorate([
    timingDecorator,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Number)
], Calculatorr.prototype, "add", null);
__decorate([
    timingDecorator,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Number)
], Calculatorr.prototype, "multiply", null);
const calculatorr = new Calculator();
calculatorr.add(10, 20);
calculatorr.multiply(5, 4);
