type MyForEachCallback<T> = (element: T, index: number, array: T[]) => void;
function myForEach<T>(array: T[], callback: MyForEachCallback<T>): void {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}
const printElement = <T>(element: T, index: number, array: T[]): void => {
    console.log(`Vị trí: ${index} | Phần tử: ${element} | Mảng: ${array}`);
}
const numbers = [1, 2, 3, 4, 5, 6];
myForEach(numbers, printElement);
