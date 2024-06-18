function calculateBMI(weight: number, height: any): number | string {
    try {
        if (isNaN(weight) || isNaN(height)) {
            throw new Error("Cân nặng không hợp lệ.");
        }
        if (weight <= 0 || height <= 0) {
            throw new Error("Cân nặng không hợp lệ.");
        }
        let bmi = weight / (height * height);
        return bmi;
    } catch (error) {
        return `Lỗi: ${error}`;
    }
}
console.log(calculateBMI(70, 1.75));
console.log(calculateBMI(-70, 1.75));
console.log(calculateBMI(70, "abc")); 
