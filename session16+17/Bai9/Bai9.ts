function flattenArray<T>(arr: (T | T[])[]): T[] {
    const flattenedArray: T[] = [];

    arr.forEach(item => {
        if (Array.isArray(item)) {
            flattenedArray.push(...flattenArray(item));
        } else {
            flattenedArray.push(item);
        }
    });

    return flattenedArray;
}

const inputArray = [1, [2, [3, 4], 5], 6];
const outputArray = flattenArray(inputArray);
console.log(outputArray);
