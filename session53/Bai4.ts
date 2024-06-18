type CallbackFunctionss = (num: number) => void;
function displayNumbers(callback: CallbackFunctionss, delay: number): void {
    let num = 1;
    function printNextNumber() {
        callback(num);
        num++;
        setTimeout(printNextNumber, delay);
    }
    setTimeout(printNextNumber, delay);
}
const printNumbers: CallbackFunctionss = (num: number) => {
    console.log("Số thứ tự: ", num);
}
displayNumbers(printNumbers, 1000);
