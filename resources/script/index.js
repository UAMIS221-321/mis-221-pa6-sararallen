function handleOnLoad(){
    populateList();
}

function handleOnChange(){
    const selectedId = document.getElementById("selectListBox").value;
    bookList.forEach((book)=> {
        if(book.id == selectedId){
            mybook = book;
        }
    });

populateForm();
}

function handleEditClick(){
    makeEditable();
    showButtons();
    var buttonHtml = "<button class=\"btn btn-primary btn-lg\" onclick=\"handleEditSave(" + mybook.id + ")\">Save</button>";
    buttonHtml += "<button class=\"btn btn-warning btn-lg btn-cancel\" onclick=\"handleCancelSave()\">Cancel</button>";
    document.getElementById("saveButton").innerHTML = buttonHtml;
    document.getElementById("saveButton").style.display = "inline-block";
}

function handleNewClick(){
    makeEditable();
    blankFields();
     buttonHtml = "<button class=\"btn btn-primary btn-lg\" onclick=\"handleNewSave()\">Save</button>";
    buttonHtml += "<button class=\"btn btn-warning btn-lg btn-cancel\" onclick=\"handleCancelSave()\">Cancel</button>";
    document.getElementById("saveButton").innerHTML = buttonHtml;
    document.getElementById("saveButton").style.display = "inline-block";
}

function handleRentClick(){
    mybook.numAvlb--;
    document.getElementById("bookAvlb").value = mybook.numAvlb;
    putBook(mybook.id);
}

function handleRenturnClick(){
    mybook.numAvlb++;
    document.getElementById("bookAvlb").value = mybook.numAvlb;
    putBook(mybook.id);
}

function handleDeleteClick(){
    deleteBook();
}

function handleCancelSave(){
    populateForm();
    makeReadOnly();
    showButtons(); // Show buttons after canceling save
}

function handleEditSave(id){
    putBook(mybook.id);
    makeReadOnly();
    showButtons(); // Show buttons after saving edit
}

function handleNewSave(){
    postBook();
    makeReadOnly();
    showButtons(); // Show buttons after saving new
    blankFields();
}

function populateForm(){
    document.getElementById("bookTitle").value = mybook.title;
    document.getElementById("bookAuthor").value = mybook.author;
    document.getElementById("bookGenre").value = mybook.genre;
    document.getElementById("bookAvlb").value = mybook.numAvlb;
    document.getElementById("bookIsbn").value = mybook.isbn;
    document.getElementById("bookLength").value = mybook.length;
    document.getElementById("bookCover").value = mybook.cover;

    var html = "<img class=\"coverArt\" src=\"" + mybook.cover + "\">";
    document.getElementById("picBox").innerHTML = html;
}

function hideButtons(){
    document.getElementById("newButton").style.display= "none";
    document.getElementById("editButton").style.display= "none";
    document.getElementById("deleteButton").style.display= "none";
    document.getElementById("rentButton").style.display= "none";
    document.getElementById("returnButton").style.display= "none";
}

function showButtons(){
    document.getElementById("newButton").style.display = "inline-block";
    document.getElementById("editButton").style.display = "inline-block";
    document.getElementById("deleteButton").style.display = "inline-block";
    document.getElementById("rentButton").style.display = "inline-block";
    document.getElementById("returnButton").style.display = "inline-block";
    document.getElementById("saveButton").style.display = "none";
}

function makeEditable(){
    document.getElementById("bookTitle").readOnly = false;
    document.getElementById("bookAuthor").readOnly = false;
    document.getElementById("bookGenre").readOnly = false;
    document.getElementById("bookAvlb").readOnly = false;
    document.getElementById("bookIsbn").readOnly = false;
    document.getElementById("bookLength").readOnly = false;
    document.getElementById("bookCover").readOnly = false;
}

function blankFields(){
    document.getElementById("bookTitle").value = "";
    document.getElementById("bookAuthor").value = "";
    document.getElementById("bookGenre").value = "";
    document.getElementById("bookAvlb").value = "";
    document.getElementById("bookIsbn").value = "";
    document.getElementById("bookLength").value = "";
    document.getElementById("bookCover").value = "";
}

function makeReadOnly(){
    document.getElementById("bookCover").readOnly = true;
    document.getElementById("bookAuthor").readOnly = true;
    document.getElementById("bookGenre").readOnly = true;
    document.getElementById("bookAvlb").readOnly = true;
    document.getElementById("bookIsbn").readOnly = true;
    document.getElementById("bookLength").readOnly = true;
    document.getElementById("bookCover").readOnly = true;
}
