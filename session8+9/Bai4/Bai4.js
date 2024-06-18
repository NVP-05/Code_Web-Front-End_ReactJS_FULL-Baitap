"use strict";
function number(input) {
    if (typeof input === 'number') {
        return input * input;
    }
    else if (Array.isArray(input)) {
        return input.map(num => num * num);
    }
    else {
        throw new Error('Invalid input');
    }
}
// Sử dụng
console.log(number(5));
console.log(number([1, 2, 3, 4, 5]));
