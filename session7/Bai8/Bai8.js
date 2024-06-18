"use strict";
function printBook1() {
    console.log(book);
}
function printBook2() {
    console.log("Book");
    console.log("tilte : ", book.title);
    console.log("author : ", book.author);
    console.log("price : ", book.price);
    console.log("----------------------------------");
}
function updateBook(title, author, price) {
    book.title = title;
    book.author = author;
    book.price = price;
}
let book = {
    title: "Những người khốn khổ",
    author: "Phúc đz",
    price: 25
};
let library = [];
library.push(book);
printBook1();
printBook2();
updateBook("Toán Cao Cấp", "Bộ Giáo Dục", 200);
printBook2();
