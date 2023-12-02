const myLibrary = [];

const addButton = document.getElementById("addBook");
const addDialog = document.getElementById("addDialog");
const submitButton = document.getElementById("submitButton");
const bookForm = document.getElementById("bookForm");
const bookDisplay = document.getElementById("bookDisplay");

let i = 0;

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

function updateIndex() {
    const bookCards = document.querySelectorAll('.book');
    
    bookCards.forEach((card) => {
        card.setAttribute("index", i++);
    });
}

function displayLibrary(myLibrary) {
    for (const book of myLibrary) {
        if (book == myLibrary[myLibrary.length - 1]){
            const bookCard = document.createElement("div");
            bookCard.classList.add("book");
            bookCard.setAttribute("index", i++);
            bookCard.setAttribute("id", book.title);
            const titleName = document.createElement("p");
            titleName.innerHTML = book.title;
            const authorName = document.createElement("p");
            authorName.innerHTML = book.author;
            const readBtn = document.createElement("button");
            readBtn.innerHTML = "Read";
            const removeBtn = document.createElement("button");
            removeBtn.classList.add("rmCard");
            removeBtn.innerHTML = "Remove";
            removeBtn.addEventListener("click", (e) => {
                const parentCard = e.target.closest('.book');
                if (parentCard){
                    // Remove the bookCard from the global book list
                    const rmIndex = parseInt(parentCard.getAttribute("index"), 10);
                    myLibrary.splice(rmIndex, 1);
                    // Reset index count to 0;
                    i = 0;
                    // Remove the bookCard from the DOM;
                    parentCard.remove();
                    // Update index of remaining bookCards in the book list
                    updateIndex();
                }
            });
            bookCard.appendChild(titleName);
            bookCard.appendChild(authorName);
            bookCard.appendChild(readBtn);
            bookCard.appendChild(removeBtn);
            bookDisplay.appendChild(bookCard);
        }
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
    displayLibrary(myLibrary);
    bookForm.reset();
    addDialog.close();
});