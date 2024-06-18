class Song{
    readonly id:number
    private name:string
    private lenght:string
    constructor(id:number, name:string, lenght:string){
        this.id = id;
        this.name = name;
        this.lenght = lenght;
    }
    setNameLenght(name:string, lenght:string){
        this.name = name;
        this.lenght = lenght;
    }
    getNameLenght():void{
        console.log("Name:", this.name);
        console.log("Lenght:", this.lenght);
    }
}

let song1 = new Song(1, "Hon Ca Yeu", "3p45s");
song1.getNameLenght();

song1.setNameLenght("Anh Nang Cua Anh", "4p15s");
song1.getNameLenght();

