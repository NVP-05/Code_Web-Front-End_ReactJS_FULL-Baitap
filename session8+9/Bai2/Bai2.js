"use strict";
function validatePerson(obj) {
    return (typeof obj === 'object' &&
        'name' in obj && typeof obj.name === 'string' &&
        'age' in obj && typeof obj.age === 'number' &&
        'address' in obj && typeof obj.address === 'object');
}
const person1 = { name: 'John', age: 30, address: { city: 'New York', country: 'USA' } };
const person2 = { name: 'Jane', age: 25, address: { city: 'London', country: 'UK' } };
const invalidPerson = { name: 'Smith', age: 'unknown', address: '123 Main St' };
console.log(validatePerson(person1));
console.log(validatePerson(person2));
console.log(validatePerson(invalidPerson));
