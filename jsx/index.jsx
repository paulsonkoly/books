import React from 'react';
import ReactDOM from 'react-dom';

import Books from './components/books.jsx';
import BookForm from './components/bookForm.jsx';

import graphql_query from './graphql.jsx';

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = { books: [] };
    this.handleBookSubmit = this.handleBookSubmit.bind(this);
    this.handleBookDelete = this.handleBookDelete.bind(this);
  }

  componentWillMount() {
    graphql_query(`
    {
      books {
        id
        title
        author
        isbn
      }
    }`).then(data => this.setState({ books: data.books }));
  }

  handleBookSubmit(newBook) {
    const books = this.state.books;

    this.setState({ books: [newBook].concat(books) });
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
