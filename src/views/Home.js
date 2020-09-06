import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BookShelf from '../components/BookShelf';

const Home = props => {

    const { books, changeShelf } = props;

    // const handleShowSearchPage = () => {
    //     changeShowSearchPage(true);
    // }

    return (
        <div className="list-books">
            <div className="list-books-title">
            <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <BookShelf title='Want to Read' type='wantToRead' books={books} changeShelf={changeShelf} />
                    <BookShelf title='Currently Reading' type='currentlyReading' books={books} changeShelf={changeShelf} />
                    <BookShelf title='Read' type='read' books={books} changeShelf={changeShelf} />
                </div>
            </div>
            <div className="open-search">
                <Link to="/search">Search</Link>
            </div>
    </div>
    );
}
export default Home;