class Rectangle{
    private dai:number
    private rong:number
    S:number
    P:number
    constructor(dai:number, rong:number){
        this.dai = dai;
        this.rong = rong;
        this.P = 2*(dai+rong);
        this.S = dai*rong;
    }
    setRectangle(dai:number, rong:number){
        this.dai = dai;
        this.rong = rong;
        this.P = 2*(dai+rong);
        this.S = dai*rong;
    }
    getRectangle():void{
        console.log("Chiều dài:", this.dai);
        console.log("Chiều rộng:", this.rong);
        console.log("Chu vi:", this.P);
        console.log("Diện tích:", this.S);
    }
}

let rtl = new Rectangle(4, 2);
console.log(rtl);

rtl.setRectangle(6, 4);
rtl.getRectangle();

