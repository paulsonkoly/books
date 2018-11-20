import React from 'react';
import Book from './book.jsx';

function Books(props) {
  return (
    <>
      { props.data.map(book =>
        <Book
          title={book.title}
          author={book.author}
          isbn={book.isbn}
        />
      ) }
    </>
  );
}

export default Books;
