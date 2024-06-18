"use strict";
class Song {
    constructor(id, name, lenght) {
        this.id = id;
        this.name = name;
        this.lenght = lenght;
    }
    setNameLenght(name, lenght) {
        this.name = name;
        this.lenght = lenght;
    }
    getNameLenght() {
        console.log("Name:", this.name);
        console.log("Lenght:", this.lenght);
    }
}
let song1 = new Song(1, "Hon Ca Yeu", "3p45s");
song1.getNameLenght();
song1.setNameLenght("Anh Nang Cua Anh", "4p15s");
song1.getNameLenght();
