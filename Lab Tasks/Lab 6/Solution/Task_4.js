class LMS
{
    constructor() {
        this.books = [];
    }

    addBook(title, authors, language) 
    {
        const book = { title, authors, language };

        this.books.push(book);
        
        console.log(`"${title}" added to library`);
    }

    listBooks() 
    {
        if (this.books.length === 0) 
        {
            console.log("No books available.");
            return;
        }

        console.log("List of Books:");
        let i = 0;
        while (i < this.books.length) 
        {
            const book = this.books[i];
            console.log(`Title: ${book.title}, Language: ${book.language}`);
            i++;
        }
    }

    searchBookByAuthor(author) 
    {
        const foundBooks = [];

        for (let i = 0; i < this.books.length; i++) 
        {
            const book = this.books[i];

            if (book.authors.includes(author)) 
            {
                foundBooks.push(book);
            }
        }

        if (foundBooks.length === 0) 
        {
            console.log(`No books found for : "${author}".`);
            return;
        }

        console.log(`Books by Author "${author}":`);

        for (let i = 0; i < foundBooks.length; i++) 
        {
            const book = foundBooks[i];
            console.log(`Title: ${book.title}, Language: ${book.language}`);
        }
    }
}

const library = new LMS();

library.addBook('Web Engineer', ['Waqas', 'Sami'], 'English');
library.addBook('OS', ['Umer'], 'English');
library.addBook('Javascript', ['Waqas'], 'Urdu');

library.listBooks(); 

library.searchBookByAuthor('Waqas'); 

library.searchBookByAuthor('Ali'); // No result as this does not exist 
