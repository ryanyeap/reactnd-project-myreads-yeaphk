import React, { Component } from 'react';
import Book from './Book';

class BookShelf extends Component {
    render() {
        const { title, type, books } = this.props;
        console.log("BooksShelf", books);
        const booksArray = books.filter(book => book.shelf === type);
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {booksArray.map(book => (
                            <Book book={book} />
                        ))}
                    </ol>
                </div>
            </div>
        );
    }
}
export default BookShelf;