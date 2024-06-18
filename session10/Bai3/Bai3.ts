class Employee{
    name:string
    protected company:string
    private phone:number
    constructor(name:string, company:string, phone:number){
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printfInfo(){
        console.log(this.name, this.company, this.phone);
    }
}
let epe1 = new Employee("Phúc", "Rikkei", 84962854080);
epe1.printfInfo();
