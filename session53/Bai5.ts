type CallbackFunction5 = (result: boolean) => void;
function checkCondition(condition: boolean, callback: CallbackFunction5): void {
    const delay = 1000;
    setTimeout(() => {
        callback(condition);
    }, delay);
}
const display: CallbackFunction = (result: boolean) => {
    console.log(`Điều kiện ${result ? "đúng" : "sai"}`);
}
checkCondition(true, display);
checkCondition(false, display);