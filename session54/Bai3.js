"use strict";
function sumWithPromise(numbers) {
    return new Promise((resolve, reject) => {
        const sum = numbers.reduce((acc, curr) => acc + curr, 0);
        resolve(sum);
    });
}
sumWithPromise([1, 2, 3, 4, 5, 6, 7])
    .then(result => {
    console.log(result);
});
