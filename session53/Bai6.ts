type CallbackFunction = () => void;
function task1(callback: CallbackFunction): void {
    setTimeout(() => {
        console.log("Task 1 được thực thi");
        callback();
    }, 1000);
}
function task2(callback: CallbackFunction): void {
    setTimeout(() => {
        console.log("Task 2 được thực thi");
        callback();
    }, 1500);
}
function task3(callback: CallbackFunction): void {
    setTimeout(() => {
        console.log("Task 3 được thực thi! Hoàn thành");
        callback();
    }, 2000);
}
function executeTasks(): void {
    task1(() => {
        task2(() => {
            task3(() => {
            });
        });
    });
}
executeTasks();
