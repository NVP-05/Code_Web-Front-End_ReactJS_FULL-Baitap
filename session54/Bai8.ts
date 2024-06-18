function countDown(n: number): Promise<void> {
    return new Promise((resolve, reject) => {
        if (typeof n !== 'number' || !Number.isInteger(n) || n <= 0) {
            return reject(new Error("Tham số truyền vào phải là một số nguyên dương."));
        }

        const intervalId = setInterval(() => {
            console.log(n);
            n -= 1;

            if (n === 0) {
                clearInterval(intervalId);
                console.log("Hoàn thành quá trình đếm");
                resolve();
            }
        }, 1000);
    });
}

countDown(5)
    .catch((error: Error) => {
        console.error(`Lỗi: ${error.message}`);
    });
