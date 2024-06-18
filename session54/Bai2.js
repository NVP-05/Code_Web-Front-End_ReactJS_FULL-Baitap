"use strict";
function divideNumbers(a, b) {
    try {
        if (isNaN(a) || isNaN(b)) {
            throw new Error("Phải nhập vào 2 số.");
        }
        if (b === 0) {
            throw new Error("Không thể chia cho 0.");
        }
        let result = a / b;
        return result;
    }
    catch (error) {
        console.log("Kết thúc hàm divideNumbers.");
        return `Lỗi: ${error}`;
    }
}
console.log(divideNumbers(10, 2));
console.log(divideNumbers(10, 0));
console.log(divideNumbers("abc", 5));
