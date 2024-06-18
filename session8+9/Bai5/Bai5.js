"use strict";
// Union type
// Union Types cho phép biến có thể chứa giá trị từ nhiều kiểu dữ liệu khác nhau
let myVar;
myVar = 'Hello'; // Hợp lệ
myVar = 123; // Hợp lệ
myVar = true; // Lỗi, vì kiểu boolean không được định nghĩa trong Union Types
function logAndPrint(obj) {
    obj.log();
    obj.print();
}
const myObject = {
    print() {
        console.log('Print');
    },
    log() {
        console.log('Log');
    }
};
logAndPrint(myObject); // Hợp lệ, vì myObject có cả phương thức print và log
