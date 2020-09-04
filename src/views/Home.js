import React from 'react';
// import PropTypes from 'prop-types';
import BookShelf from '../components/BookShelf';

const Home = props => {

    const { books } = props;
    console.log("Books@Home", books);
    return (
        <div className="list-books">
            <div className="list-books-title">
            <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
            <div>
                <BookShelf title='Want to Read' type='wantToRead' books={books} />
                <BookShelf title='Currently Reading' type='currentlyReading' books={books} />
                <BookShelf title='Read' type='read' books={books} />
            </div>
            </div>
            <div className="open-search">
            <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
    </div>
    );
}
export default Home;