import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { search } from '../BooksAPI';
import Book from '../components/Book';

class Search extends Component {

    state = {
        query: '',
        allBooks: [],
        searchError: false
    }

    handleSearchChange = event => {
        const query = event.target.value;
        this.setState({query});

        if(query.trim()) {
            search(query.trim()).then(books => {
                books.length > 0
                    ? this.setState({allBooks: books, searchError: false})
                    : this.setState({allBooks: [], searchError: true});
            });
        } else {
            this.setState({allBooks: [], searchError: false})
        }
    }
    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <div className="close-search">
                        <Link to="/">Close Search</Link> 
                    </div> 
                    <div className="search-books-input-wrapper">
                        {/*
                        NOTES: The search from BooksAPI is limited to a particular set of search terms.
                        You can find these search terms here:
                        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                        you don't find a specific author or title. Every search is limited by search terms.
                        */}
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            onChange={this.handleSearchChange}
                            value={this.state.query}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    {this.state.allBooks.length > 0 && (
                        <div>
                            <h3>Search returned {this.state.allBooks.length} Books.</h3>
                            <ol className="books-grid">
                                {this.state.allBooks.map(book => (
                                    <Book
                                        book={book}
                                        books={this.props.books}
                                        key={book.id}
                                        changeShelf={this.props.changeShelf}
                                    />
                                ))}
                            </ol>
                         </div>  
                    )}
                    {this.state.searchError && (
                        <h3>Search did not return any books.</h3>
                    )}
                </div>
            </div>
        );
    }
}
export default Search;