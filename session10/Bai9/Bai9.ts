class Book {
    private title: string;
    private author: string;

    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }

    getTitle(): string {
        return this.title;
    }

    getAuthor(): string {
        return this.author;
    }
}

class Library {
    private books: Book[];

    constructor() {
        this.books = [];
    }

    addBook(book: Book): void {
        this.books.push(book);
    }

    displayBooks(): void {
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
