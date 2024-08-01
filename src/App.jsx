import React, { useState } from 'react';
import BookList from './components/BookList';
import AuthorList from './components/AuthorList';
import BookForm from './components/BookForm';
import AuthorForm from './components/AuthorForm';
import './App.css';

const App = () => {
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);

  const addBook = (book) => setBooks([...books, book]);
  const editBook = (updatedBook) => {
    setBooks(books.map(book => book.id === updatedBook.id ? updatedBook : book));
  };
  const deleteBook = (id) => setBooks(books.filter(book => book.id !== id));

  const addAuthor = (author) => setAuthors([...authors, author]);
  const editAuthor = (updatedAuthor) => {
    setAuthors(authors.map(author => author.id === updatedAuthor.id ? updatedAuthor : author));
  };
  const deleteAuthor = (id) => setAuthors(authors.filter(author => author.id !== id));

  return (
    <div className="App">
      <h1>Library Management Dashboard</h1>
      <div className="section">
        <h2>Manage Books</h2>
        <BookForm onSubmit={addBook} />
        <BookList books={books} onEdit={editBook} onDelete={deleteBook} />
      </div>
      <div className="section">
        <h2>Manage Authors</h2>
        <AuthorForm onSubmit={addAuthor} />
        <AuthorList authors={authors} onEdit={editAuthor} onDelete={deleteAuthor} />
      </div>
    </div>
  );
};

export default App;
