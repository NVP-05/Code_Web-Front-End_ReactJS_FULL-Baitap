type CallbackFunctionn = () => void;
function delayedCallback(callback: CallbackFunctionn, delay: number): void {
    setTimeout(callback, delay);
}

const exampleCallback: CallbackFunctionn = () => {
    console.log("Callback function đã được gọi sau một khoảng thời gian delay!");
}

delayedCallback(exampleCallback, 3000);
