class Department{
    readonly id:number
    private name:string
    private employee:object
    constructor(id:number, name:string, employee:object){
        this.id = id;
        this.name = name;
        this.employee = employee;
    }
    describe():void{
        console.log("ID:", this.id);
        console.log("Name:", this.name);
    }
}
let dpm = new Department(1, "PTIT", ["Phuc", "Minh", "Luong"]);
dpm.describe();