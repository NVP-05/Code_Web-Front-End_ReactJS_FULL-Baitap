"use strict";
function delayedCallback(callback, delay) {
    setTimeout(callback, delay);
}
const exampleCallback = () => {
    console.log("Callback function đã được gọi sau một khoảng thời gian delay!");
};
delayedCallback(exampleCallback, 3000);
