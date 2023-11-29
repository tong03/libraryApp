const myLibrary = [];

// constructor
function Library() {

}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayLibrary() {
    for (book in myLibrary) {
        console.log(book);
    }
}

const addButton = document.getElementById("addBook");
const addDialog = document.getElementById("addDialog");
const submitButton = document.getElementById("submitButton");
// const bookForm = document.getElementById("bookForm");

addDialog.addEventListener("click", (event) => {
    if (event.target == addDialog) {
        addDialog.close();
    }
    // console.log(event.target);
});

// bookForm.addEventListener("click", (event) => {
//     event.stopPropagation();
// });

addButton.addEventListener("click", () => {
    addDialog.showModal();
});

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    addDialog.close();
});