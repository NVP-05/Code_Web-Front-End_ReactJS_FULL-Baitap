"use strict";
function swapElements(arr, index1, index2) {
    if (index1 < 0 || index1 >= arr.length || index2 < 0 || index2 >= arr.length) {
        throw new Error('Invalid index');
    }
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
}
const arr1 = [1, 2, 3, 4, 5];
const swappedArr1 = swapElements(arr1, 1, 3);
console.log(swappedArr1);
const arr2 = ['a', 'b', 'c', 'd', 'e'];
const swappedArr2 = swapElements(arr2, 0, 4);
console.log(swappedArr2);
