type CallbackFunction = (result: number) => void;
function calculate(a: number, b: number, callback: CallbackFunction): void {
    const sum = a + b;
    callback(sum);
}
const printResult: CallbackFunction = (result: number) => {
    console.log(`Kết quả của phép tính là: ${result}`);
}
calculate(5, 3, printResult);
