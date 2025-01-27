const myLibrary = [];

function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(book){
    myLibrary.push(book)
}

function populateList(library){
    let table = document.getElementById("bookList")
    console.log(table)
    for (let i = 0; i < library.length; i++){
        let row = document.createElement("tr");
        let book = library[i];
        for (let key in book){
            let cell = document.createElement("td");
            cell.textContent = book[key];
            row.appendChild(cell);
            console.log(book[key])
        }
        table.appendChild(row);
    }
};




// Dummy Content

const book1 = new Book("Holes", "Louis Sachar", 233);
const book2 = new Book("The Hobbit", "J. R. R. Tolkien", 328);
addBookToLibrary(book1);
addBookToLibrary(book2);

populateList(myLibrary);