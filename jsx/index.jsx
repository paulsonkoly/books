import React from 'react';
import ReactDOM from 'react-dom';

import Books from './components/books.jsx';
import BookForm from './components/bookForm.jsx';

class Root extends React.Component {
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
        <Books />
      </div>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));
