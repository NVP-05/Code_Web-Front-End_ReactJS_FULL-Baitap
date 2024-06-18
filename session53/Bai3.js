"use strict";
function processArray(arr, callback) {
    arr.forEach((num, index) => {
        setTimeout(() => {
            callback(num);
        }, index * 1000);
    });
}
const printNumber = (num) => {
    console.log("Phần tử thứ: ", num);
};
const numbers = [1, 2, 3, 4, 5];
processArray(numbers, printNumber);
