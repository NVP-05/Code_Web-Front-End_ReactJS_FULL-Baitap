"use strict";
const numbers = [1, 2, 3, 4, 5];
const callback = (element) => {
    if (element !== null) {
        console.log(element);
    }
    else {
        console.log("null");
    }
};
function myFind(array, searchValue, callback) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === searchValue) {
            callback(array[i]);
            return;
        }
    }
    callback(null);
}
myFind(numbers, 2, callback);
myFind(numbers, 9, callback);
