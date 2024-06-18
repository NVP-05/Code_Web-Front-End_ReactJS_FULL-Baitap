"use strict";
function isPrimeWithPromise(number) {
    return new Promise((resolve, reject) => {
        if (number <= 1) {
            return resolve(false);
        }
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                return resolve(false);
            }
        }
        return resolve(true);
    });
}
isPrimeWithPromise(2)
    .then(result => {
    console.log(result);
})
    .catch(error => {
    console.error(`Lỗi: ${error}`);
});
isPrimeWithPromise(3)
    .then(result => {
    console.log(result);
})
    .catch(error => {
    console.error(`Lỗi: ${error}`);
});
isPrimeWithPromise(4)
    .then(result => {
    console.log(result);
})
    .catch(error => {
    console.error(`Lỗi: ${error}`);
});
