import React from 'react';
import Book from './book.jsx';

function Books(props) {
  return (
    <div>
      { props.data.map(book =>
        <dl>
          <Book
            title={book.title}
            author={book.author}
            isbn={book.isbn}
          />
        </dl>
      ) }
    </div>
  );
}

export default Books;
