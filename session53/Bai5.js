"use strict";
function checkCondition(condition, callback) {
    const delay = 1000;
    setTimeout(() => {
        callback(condition);
    }, delay);
}
const display = (result) => {
    console.log(`Điều kiện ${result ? "đúng" : "sai"}`);
};
checkCondition(true, display);
checkCondition(false, display);
