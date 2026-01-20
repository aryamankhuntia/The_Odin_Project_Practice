function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read
    this.info = function() {
        temp = this.read ? "read" : "not read yet";
        return this.title + " by " + this.author + ", " + this.pages + " pages, " + temp;
    }
}

const book1 = new Book("The Hobbit", "J.R.R Tolkien", 297, false);
console.log(book1.info());
