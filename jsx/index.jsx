import React from 'react';
import ReactDOM from 'react-dom';

import Books from './components/books.jsx';
import BookForm from './components/bookForm.jsx';

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = { books: [] };
    this.handleBookSubmit = this.handleBookSubmit.bind(this);
    this.handleBookDelete = this.handleBookDelete.bind(this);
  }

  componentWillMount() {
    fetch('http://localhost:9292/books')
      .then(response => response.json())
      .then(data => this.setState({ books: data }));
  }

  handleBookSubmit(newBook) {
    const books = this.state.books;
    fetch('http://localhost:9292/books', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBook)
    })
      .then(response => response.json())
      .then(data => this.setState({ books: [data].concat(books) }));
  }

  handleBookDelete(book_id) {
    const books = this.state.books.filter(book => book.id !== book_id);
    this.setState({ books: books });

    fetch(`http://localhost:9292/books/${book_id}`, {
      method: 'DELETE'
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <Books data={this.state.books} onBookDelete={this.handleBookDelete} />
          </div>
          <div className="col-sm">
            <BookForm onSubmit={this.handleBookSubmit}/>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));
