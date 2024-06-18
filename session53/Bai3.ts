type CallbackFunctions = (num: number) => void;
function processArray(arr: number[], callback: CallbackFunctions): void {
    arr.forEach((num, index) => {
        setTimeout(() => {
            callback(num);
        }, index * 1000);
    });
}
const printNumber: CallbackFunctions = (num: number) => {
    console.log("Phần tử thứ: ", num);
}
const numbers = [1, 2, 3, 4, 5];
processArray(numbers, printNumber);
