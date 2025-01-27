// myLibrary initiation, with dummy content
const myLibrary = [
    {
        title: "Holes",
        author: "Louis Sachar",
        pages: 233,
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        pages: 328,
    },
    {
        title: "The Eye of the World",
        author: "Robert Jordan",
        pages: 782,
    }
];

// Book constructor
function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(book){
    myLibrary.push(book)
}

// Add book list to the table
function updateTable(library){
    let table = document.getElementById("bookList")
    table.innerHTML = "";
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

const button = document.getElementById("addBookButton");

button.addEventListener("click", () => {


    // gather data from the fields
    let name = document.getElementById("nameField").value;
    let author = document.getElementById("authorField").value;
    let pages = document.getElementById("pagesField").value;

    
    // check for empty fields and prevent adding if any are missing
    if (!name || !author || !pages){
        
        // get angry
        let angry = document.getElementById("itemsRequired")
        angry.style.fontWeight = "bold";
        angry.style.color = "red";
        angry.style.fontSize = "300%";
        angry.style.textAlign = "center"
        return
    }
    
    // ensure pages is a number
    if (!name || !author || isNaN(pages)){
        alert("Please fill in all fields correctly")
        return
    }

    // create a new book object and add it to myLibrary[]
    let book = new Book(name, author, pages);
    myLibrary.push(book)

    updateTable(myLibrary)
})






// Start scripts
updateTable(myLibrary)