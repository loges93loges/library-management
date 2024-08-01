import React from 'react';

const BookList = ({ books, onEdit, onDelete }) => {
  return (
    <ul className="list">
      {books.map((book) => (
        <li key={book.id}>
          {book.title} by {book.author} (ISBN: {book.isbn}, Published: {book.publicationDate})
          <button onClick={() => onEdit(book)}>Edit</button>
          <button onClick={() => onDelete(book.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default BookList;
