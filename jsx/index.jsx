import React from 'react';
import ReactDOM from 'react-dom';

import Books from './components/books.jsx';

class Root extends React.Component {
  render() {
    return (
      <div><Books /></div>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));
