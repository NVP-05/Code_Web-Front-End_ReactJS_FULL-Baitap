"use strict";
function checkFalsely(obj) {
    for (let key in obj) {
        if (!obj[key]) {
            delete obj[key];
        }
    }
    console.log(obj);
}
let objB = {
    d: 123,
    a: null,
    b: true,
    c: "a"
};
checkFalsely(objB);
