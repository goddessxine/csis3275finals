// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import FrontPage from './components/FrontPage'; // Import your front page component
import BookList from './components/FrontPage_BookList'; // Your BookList component
import AddBook from './components/Add_Book'; // Your AddBook component

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/" className="header-link">
            <h1>Book List App</h1>
          </Link>
        </header>
        <main>
          <Route exact path="/" component={FrontPage} />
          <Route exact path="/book-list" component={BookList} />
          <Route exact path="/add-book" component={AddBook} />
          {/* Other routes go here */}
        </main>
        <footer>
          <Link to="/add-book" className="btn btn-info float-right">
            + Add New Book
          </Link>
        </footer>
      </div>
    </Router>
  );
}

export default App;
