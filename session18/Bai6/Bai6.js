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
function typeCheckDecorator(expectedTypes) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            args.forEach((arg, index) => {
                const expectedType = expectedTypes[index];
                if (typeof arg !== expectedType) {
                    throw new Error(`Lỗi: Tham số tại vị trí ${index} trong hàm "${propertyKey}" phải là kiểu ${expectedType}, nhưng nhận được kiểu ${typeof arg}.`);
                }
            });
            return originalMethod.apply(this, args);
        };
        return descriptor;
    };
}
class Calculatora {
    add(a, b) {
        return a + b;
    }
    concat(a, b) {
        return a + b;
    }
}
__decorate([
    typeCheckDecorator(['number', 'number']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Number)
], Calculatora.prototype, "add", null);
__decorate([
    typeCheckDecorator(['string', 'string']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", String)
], Calculatora.prototype, "concat", null);
const calculatora = new Calculatora();
console.log(calculatora.add(2, 3));
try {
    calculatora.add(2, "3");
}
catch (e) {
    console.error(e.message);
}
console.log(calculatora.concat("Hello", "World"));
try {
    calculatora.concat("Hello", 123);
}
catch (e) {
    console.error(e.message);
}
