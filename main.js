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