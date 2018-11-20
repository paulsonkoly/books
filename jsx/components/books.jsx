import React from 'react';
import Book from './book.jsx';

function Books(props) {
  return (
    <>
      { props.data.map(book =>
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
          isbn={book.isbn}
          onDelete={() => props.onBookDelete(book.id)}
        />
      ) }
    </>
  );
}

export default Books;
