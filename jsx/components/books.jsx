import React from 'react';
import Book from './book.jsx';

class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = { books: [] };
  }

  componentWillMount() {
    fetch('http://localhost:9292/books')
      .then(response => response.json())
      .then(data => this.setState({ books: data }));
  }

  render() {
    return (
      <div>
        { this.state.books.map(book =>
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
}

export default Books;
