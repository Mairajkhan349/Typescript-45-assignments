//Assignment No:- 21
//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
type Book = {
    title: string;
    author: string;
    year: number;
};
let book:Book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
};
console.log(`Book: ${book.title},
Author: ${book.author},
Year: ${book.year}`);