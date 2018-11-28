import React from 'react';
import classNames from 'classnames';
import FormInputField from './formInputField.jsx';
import FormError from './formError.jsx';
import graphql_query from '../graphql.jsx';

class BookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book: {
        title: '',
        author: '',
        isbn: '',
      },
      feedback: new Set([]),
      formError: [],
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleDismissError = this.handleDismissError.bind(this);
  }

  handleSuccesfulSubmit(data) {
    this.props.onSubmit(data);

    this.setState({
      book: { title: '', author: '', isbn: '' },
      feedback: new Set([])});
  }

  handleUnsuccessfulSubmit(error) {
    this.setState({ formError: error });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.formValid()) {
      graphql_query(`
        mutation {
          add_book(
            title: "${ this.state.book.title }"
            author: "${ this.state.book.author }"
            isbn: "${ this.state.book.isbn }"
          ) {
            id
            title
            author
            isbn
          }
        }
      `)
        .catch(errors => this.handleUnsuccessfulSubmit(errors))
        .then(data => this.handleSuccesfulSubmit(data.add_book));
    }
  }

  handleFormChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const book = this.state.book;
    const feedback = new Set(this.state.feedback);

    feedback.add(name);

    this.setState({
      book: Object.assign(book, { [name]: value }),
      feedback: feedback,
      formError: []
    });
  }

  handleDismissError() {
    this.setState({ formError: [] });
  }

  isbnValid() {
    const isbn = this.state.book.isbn;
    const regexp = /^[\d-]{13,17}$/;

    return (isbn.match(regexp) !== null);
  }

  authorValid() {
    const author = this.state.book.author;

    return (author.length != 0);
  }

  titleValid() {
    const title = this.state.book.title;

    return (title.length != 0);
  }

  formValid() {
    return(this.isbnValid() && this.authorValid() && this.titleValid());
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
      <FormError
        errors={this.state.formError}
        onDismiss={this.handleDismissError} />
      <form className="m-3" onSubmit={this.handleSubmit}>
        <FormInputField
          name="title"
          value={this.state.book.title}
          onChange={this.handleFormChange}
          isValid={() => this.titleValid()}
          invalidReason="Title can't be empty."
          feedback={ this.state.feedback.has('title') }
        >
          Title
        </FormInputField>
        <FormInputField
          name="author"
          value={this.state.book.author}
          onChange={this.handleFormChange}
          isValid={this.authorValid}
          invalidReason="Author can't be empty."
          feedback={ this.state.feedback.has('author') }
        >
          Author
        </FormInputField>
        <FormInputField
          name="isbn"
          value={this.state.book.isbn}
          onChange={this.handleFormChange}
          isValid={this.isbnValid}
          invalidReason="ISBN can only contain digits and '-' and has to be between 13 to 17 characters long"
          feedback={ this.state.feedback.has('isbn') }
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
