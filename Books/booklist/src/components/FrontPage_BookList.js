import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:3001/');
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const bookList =
    books.length === 0 ? (
      <p>There are no books!</p>
    ) : (
      books.map((book, index) => (
        <div className="card-container" key={index}>
          <img src={book.imageURL} alt={book.title} height="200" />
          <div className="desc">
            <h2>
              <a href={`/show-book/${book._id}`}>{book.title}</a>
            </h2>
            <h3>{book.author}</h3>
            <p>{book.description}</p>
          </div>
        </div>
      ))
    );

  return (
    <div className="BookList">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <br />
            <h2 className="display-4 text-center">Books List</h2>
          </div>

          <div className="col-md-11">
            <a href="/create-book" className="btn btn-outline-warning float-right">
              + Add New Book
            </a>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className="list">{bookList}</div>
      </div>
    </div>
  );
}

export default BookList;
