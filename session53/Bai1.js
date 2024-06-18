"use strict";
function calculate(a, b, callback) {
    const sum = a + b;
    callback(sum);
}
const printResult = (result) => {
    console.log(`Kết quả của phép tính là: ${result}`);
};
calculate(5, 3, printResult);
