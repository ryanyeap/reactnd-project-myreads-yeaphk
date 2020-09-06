import React, { Component } from 'react';

class Book extends Component {

    handleChange = e => {
        this.props.changeShelf(this.props.book, e.target.value);
    }

    render() {
        const { book } = this.props;
        let coverBook = '';
        if (book.imageLinks !== undefined) {
            coverBook = `url(${book.imageLinks.smallThumbnail})`;
        }
        return (
            <li key={book.id}>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" 
                            style={{ width: 128, height: 193, backgroundImage: coverBook }}>
                        </div>
                        <div className="book-shelf-changer">
                            <select value={book.shelf} onChange={this.handleChange}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                </div>
            </li>
        );
    }
    
}
export default Book;