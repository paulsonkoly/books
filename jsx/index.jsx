import React from 'react';
import ReactDOM from 'react-dom';

import Books from './components/books.jsx';
import BookForm from './components/bookForm.jsx';

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = { books: [] };
  }

  componentWillMount() {
    fetch('http://localhost:9292/books')
      .then(response => response.json())
      .then(data => this.setState({ books: data }));
  }

  handleBookSubmit(data) {
    console.log({
      title: data.get('title'),
      author: data.get('author'),
      isbn: data.get('isbn')
    });
  }

  render() {
    return (
      <div>
        <BookForm onSubmit={this.handleBookSubmit}/>
        <Books data={this.state.books}/>
      </div>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));
