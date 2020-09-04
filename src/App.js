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

  render() {
    const { books, loading } = this.state;

    return (
      <div className="app">
        {!loading && (
          <Switch>
            {/* <Route exact path={"/"} component={Home} books={books} /> */}
            <Route exact path={"/"}>
              <Home books={books} />
            </Route>
            {/* <Route exact path={"/search"} component={Search} /> */}
            <Route exact path={"/search"}>
              <Search books={books} />
            </Route>
          </Switch>
        )}
        
      </div>
    );
  }
}

export default BooksApp;
