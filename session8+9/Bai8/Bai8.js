"use strict";
function combineObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}
const persons1 = { name: 'John' };
const persons2 = { age: 30 };
const combinedPerson = combineObjects(persons1, persons2);
console.log(combinedPerson);
