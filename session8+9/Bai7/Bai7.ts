function isArray(variable: any): variable is any[] {
    return Array.isArray(variable);
}

function isObject(variable: any): variable is object {
    return typeof variable === 'object' && variable !== null && !Array.isArray(variable);
}

function printType(variable: any): void {
    if (typeof variable === 'number') {
        console.log('Số');
    } else if (isArray(variable)) {
        console.log('Mảng');
    } else if (isObject(variable)) {
        console.log('Đối tượng');
    } else {
        console.log('Không xác định');
    }
}

printType(10);
printType([1, 2, 3]);
printType({ name: 'John', age: 30 });
printType('Hello');
