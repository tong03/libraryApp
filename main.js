const myLibrary = [];

const addButton = document.getElementById("addBook");
const addDialog = document.getElementById("addDialog");
const submitButton = document.getElementById("submitButton");
const bookForm = document.getElementById("bookForm");
const bookDisplay = document.getElementById("bookDisplay");

// constructor
class Book {
    constructor(author, title, pages){
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayLibrary(myLibrary) {
    for (const book of myLibrary) {
        console.log(book);
        const bookCard = document.createElement("div");
        bookCard.classList.add("book");
        bookCard.setAttribute("id", book.title);
        const titleName = document.createElement("p");
        titleName.innerHTML = book.title;
        const authorName = document.createElement("p");
        authorName.innerHTML = book.author;
        const readBtn = document.createElement("button");
        readBtn.innerHTML = "Read";
        const removeBtn = document.createElement("button");
        removeBtn.innerHTML = "Remove";
        bookCard.appendChild(titleName);
        bookCard.appendChild(authorName);
        bookCard.appendChild(readBtn);
        bookCard.appendChild(removeBtn);
        bookDisplay.appendChild(bookCard);
    }
}

addDialog.addEventListener("click", (event) => {
    if (event.target == addDialog) {
        addDialog.close();
    }
});

addButton.addEventListener("click", () => {
    addDialog.showModal();
});

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    // const formData = new FormData(bookForm);
    const title = bookForm.title.value;
    const author = (bookForm.author.value);
    const pages = bookForm.pages.value;
    const newBook = new Book(title, author, pages);
    addBookToLibrary(newBook);
    // for (const pair of formData.entries()){
    //     console.log(pair[0]);
    // }
    displayLibrary(myLibrary);
    addDialog.close();
});