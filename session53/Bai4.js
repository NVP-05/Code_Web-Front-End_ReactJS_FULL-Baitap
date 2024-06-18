"use strict";
function displayNumbers(callback, delay) {
    let num = 1;
    function printNextNumber() {
        callback(num);
        num++;
        setTimeout(printNextNumber, delay);
    }
    setTimeout(printNextNumber, delay);
}
const printNumbers = (num) => {
    console.log("Số thứ tự: ", num);
};
displayNumbers(printNumbers, 1000);
