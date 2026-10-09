const books = [
{ title: "Книга А", pages: 120 },
{ title: "Книга B", pages: 250 },
{ title: "Книга C", pages: 300 },
];

const minPages = 250;

const longBooks = books.filter(
    (book) => book.pages >= minPages
);

console.log(longBooks)