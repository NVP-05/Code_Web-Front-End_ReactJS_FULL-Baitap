// Union type
// Union Types cho phép biến có thể chứa giá trị từ nhiều kiểu dữ liệu khác nhau
let myVar: string | number;

myVar = 'Hello'; // Hợp lệ
myVar = 123; // Hợp lệ
myVar = true; // Lỗi, vì kiểu boolean không được định nghĩa trong Union Types


// Intersection Types
// Intersection Types kết hợp các kiểu dữ liệu thành một kiểu mới
type Printable = { print: () => void };
type Loggable = { log: () => void };

function logAndPrint(obj: Printable & Loggable) {
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
