import React from 'react';
import * as BooksAPI from './BooksAPI';
import { Switch, Route } from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
import Home from './views/Home';
import Search from './views/Search';
import './App.css';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
    showSearchPage: false,
    loading: true
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books: books,
          loading: false
        }));
      });
  }

  changeShelf = (changedBook, shelf) => {
    // BooksAPI.update(changedBook, shelf)
    //   .then(response => {
    //     // Setting the shelf for the updated book
    //     changedBook.shelf = shelf;
    //     // Updating state with the changed book
    //     this.setState(prevState => ({
    //       books: prevState.books
    //         .filter(book => book.id !== changedBook.id) // Creating new array without old book
    //           .concat(changedBook) // Adding updated book into the array
    //     }));
    //   });
    BooksAPI.update(changedBook, shelf);
    changedBook.shelf = shelf;
    const newBookArray = this.state.books.filter(book => book.id !== changedBook.id)
      .concat(changedBook);

    this.setState({books: newBookArray});
  };

  // changeShowSearchPage = isShowSearch => {
  //   this.setState({showSearchPage: isShowSearch});
  // } 

  render() {
    const { books, loading } = this.state;

    return (
      <div className="app">
        {!loading && (
          <Switch>
            <Route exact path={"/"}>
              <Home books={books} changeShelf={this.changeShelf} />
            </Route>
            <Route exact path={"/search"}>
              <Search books={books} changeShelf={this.changeShelf} />
            </Route>
          </Switch>
        )}
      </div>
    );
  }
}

export default BooksApp;
