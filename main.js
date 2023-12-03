const myLibrary = [];

const addButton = document.getElementById("addBook");
const addDialog = document.getElementById("addDialog");
const submitButton = document.getElementById("submitButton");
const bookForm = document.getElementById("bookForm");
const bookDisplay = document.getElementById("bookDisplay");

let i = 0;

// constructor
class Book {
    constructor(title, author, pages, readStatus){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readStatus = readStatus;
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
            titleName.innerHTML = `"${book.title}"`;
            const authorName = document.createElement("p");
            authorName.innerHTML = book.author;
            const pageNumber = document.createElement("p");
            pageNumber.innerHTML = book.pages;
            const readBtn = document.createElement("button");
            readBtn.classList.add('readCard');
            readBtn.innerHTML = book.readStatus;
            if(book.readStatus == "Read"){
                readBtn.classList.add("done");
            }
            readBtn.addEventListener('click', (e) => {
                e.target.classList.toggle('done');
                // change readBtn textcontent to Read
                if(e.target.classList.contains('done')){
                    e.target.innerHTML = document.getElementById('readCheck').value;
                    book.readStatus = document.getElementById('readCheck').value;
                }
                // change readBtn textcontent to Not read
                else{
                    e.target.innerHTML = document.getElementById('readCheckHidden').value;
                    book.readStatus = document.getElementById('readCheckHidden').value;
                }
            });
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
            bookCard.appendChild(pageNumber);
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
    const author = bookForm.author.value;
    const pages = bookForm.pages.value;
    var readStatus='';
    if (document.getElementById('readCheck').checked){
        document.getElementById('readCheckHidden').disabled = true;
        readStatus = document.getElementById('readCheck').value;
    }
    else{
        readStatus = document.getElementById('readCheckHidden').value;
    }
    console.log("Title: ", title);
    console.log("Author: ", author);
    console.log("Pages: ", pages);
    console.log("Status: ", readStatus);
    
    const newBook = new Book(title, author, pages, readStatus);
    addBookToLibrary(newBook);
    displayLibrary(myLibrary);
    bookForm.reset();
    addDialog.close();
});