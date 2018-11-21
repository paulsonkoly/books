import React from 'react';
import classNames from 'classnames';
import FormInputField from './formInputField.jsx';

class BookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book: {
        title: '',
        author: '',
        isbn: '',
      },
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.formValid()) {
      this.props.onSubmit(this.state.book);
      this.setState({book: { title: '', author: '', isbn: '' }})
      window.focus();
    }
  }

  handleFormChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const book = this.state.book;

    this.setState(
      { book: Object.assign(book, { [name]: value }) }
    );
  }

  isbnValid(isbn) {
    return (isbn.length != 0);
  }

  isbnInvalidReason() {
    return ("ISBN can't be empty");
  }

  formValid() {
    const isbn = this.state.book.isbn;
    return(this.isbnValid(isbn));
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
      <form className="m-3" onSubmit={this.handleSubmit}>
        <FormInputField
          name="title"
          value={this.state.book.title}
          onChange={this.handleFormChange}
        >
          Title
        </FormInputField>
        <FormInputField
          name="author"
          value={this.state.book.author}
          onChange={this.handleFormChange}
        >
          Author
        </FormInputField>
        <FormInputField
          name="isbn"
          isValid={() => this.isbnValid(this.state.book.isbn)}
          invalidReason={this.isbnInvalidReason}
          value={this.state.book.isbn}
          onChange={this.handleFormChange}
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
