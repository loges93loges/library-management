import React from 'react';

const AuthorList = ({ authors, onEdit, onDelete }) => {
  return (
    <ul className="list">
      {authors.map((author) => (
        <li key={author.id}>
          {author.name} (Born: {author.birthDate})
          <button className='move' onClick={() => onEdit(author)}>Edit</button>
          <button  className='move'onClick={() => onDelete(author.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default AuthorList;
