const numbers:number[] = [1, 2, 3, 4, 5];
const callback = (element: number | null): void => {
    if (element !== null) {
        console.log(element);
    } else {
        console.log("null");
    }
};
function myFind<T>(array: T[], searchValue: T, callback: (element: T | null) => void): void {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === searchValue) {
            callback(array[i]);
            return;
        }
    }
    callback(null);
}
myFind(numbers, 2, callback);
myFind(numbers, 9, callback);
