"use strict";
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    getTitle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
}
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    displayBooks() {
        this.books.forEach(book => {
            console.log("Title: " + book.getTitle() + ", Author: " + book.getAuthor());
        });
    }
}
let book1 = new Book("Conan", "Shinichi");
let book2 = new Book("One Pice", "Luffy");
let library = new Library();
library.addBook(book1);
library.addBook(book2);
library.displayBooks();
