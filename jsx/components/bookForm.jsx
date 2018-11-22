import React from 'react';
import classNames from 'classnames';
import FormInputField from './formInputField.jsx';
import FormError from './formError.jsx';

class BookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book: {
        title: '',
        author: '',
        isbn: '',
      },
      feedback: [],
      formError: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleDismissError = this.handleDismissError.bind(this);
  }

  handleSuccesfulSubmit(data) {
    this.props.onSubmit(data);

    this.setState({
      book: { title: '', author: '', isbn: '' },
      feedback: []});
  }

  handleUnsuccessfulSubmit(error) {
    this.setState({ formError: error });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.formValid()) {
      fetch('http://localhost:9292/books', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state.book)
      })
        .then(response => {
          if (! response.ok) throw response;

          return(response.json());
        })
        .then(data => this.handleSuccesfulSubmit(data))
        .catch(error =>
          error.text().then(message => this.handleUnsuccessfulSubmit(message))
        )
    }
  }

  handleFormChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const book = this.state.book;
    const feedback = [...this.state.feedback];

    feedback.push(name);

    this.setState({
      book: Object.assign(book, { [name]: value }),
      feedback: feedback,
      formError: ''
    });
  }

  handleDismissError() {
    this.setState({ formError: '' });
  }

  isbnValid(isbn) {
    const regexp = /^[\d\-]{13,17}$/;
    return (isbn.match(regexp) !== null);
  }

  authorValid(author) {
    return (author.length != 0);
  }

  titleValid(title) {
    return (title.length != 0);
  }

  formValid() {
    const isbn = this.state.book.isbn;
    const title = this.state.book.title;
    const author = this.state.book.author;

    return(
      this.isbnValid(isbn) &&
      this.authorValid(author) &&
      this.titleValid(title)
    );
  }

  render() {
    const submitClasses = classNames(
      'btn',
      'btn-primary',
      'mb-2',
      { 'disabled': ! this.formValid() },
    );

    return (
      <>
      <FormError onDismiss={this.handleDismissError}>
        {this.state.formError}
      </FormError>
      <form className="m-3" onSubmit={this.handleSubmit}>
        <FormInputField
          name="title"
          value={this.state.book.title}
          onChange={this.handleFormChange}
          isValid={() => this.titleValid(this.state.book.title)}
          invalidReason="Title can't be empty."
          feedback={ this.state.feedback.includes('title') }
        >
          Title
        </FormInputField>
        <FormInputField
          name="author"
          value={this.state.book.author}
          onChange={this.handleFormChange}
          isValid={() => this.authorValid(this.state.book.author)}
          invalidReason="Author can't be empty."
          feedback={ this.state.feedback.includes('author') }
        >
          Author
        </FormInputField>
        <FormInputField
          name="isbn"
          isValid={() => this.isbnValid(this.state.book.isbn)}
          invalidReason="ISBN can only contain digits and '-' and has to be between 13 to 17 characters long"
          value={this.state.book.isbn}
          onChange={this.handleFormChange}
          feedback={ this.state.feedback.includes('isbn') }
        >
          ISBN
        </FormInputField>
        <button type="submit" className={submitClasses}>Create book</button>
      </form>
      </>
    );
  }
}

export default BookForm;
