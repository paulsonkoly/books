import React from 'react';
import classNames from 'classnames';

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

  isbnValid() {
    const isbn = this.state.book.isbn;
    return (isbn.length != 0);
  }

  isbnInvalidReason() {
    return ("ISBN can't be empty");
  }

  formValid() {
    return(this.isbnValid());
  }

  render() {
    let submitClasses = classNames(
      'btn',
      'btn-primary',
      'mb-2',
      { 'disabled': ! this.formValid() },
    );

    return (
      <>
      <form className="m-3" onSubmit={this.handleSubmit}>
        <div className="form-group row">
          <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={this.state.book.title}
              onChange={this.handleFormChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="author" className="col-sm-2 col-form-label">Author</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="author"
              name="author"
              value={this.state.book.author}
              onChange={this.handleFormChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="isbn" className="col-sm-2 col-form-label">ISBN</label>
          <div className="col-sm-10">
            <input
              type="text"
              className={ "form-control " + (this.isbnValid() ? 'is-valid' : 'is-invalid') }
              id="isbn"
              name="isbn"
              value={this.state.book.isbn}
              onChange={this.handleFormChange}
            />
            {
              (this.isbnValid() ? '' :
                <div className="invalid-feedback">{this.isbnInvalidReason()}</div>
              )
            }
          </div>
        </div>
        <button type="submit" className={submitClasses}>Create book</button>
      </form>
      </>
    );
  }
}

export default BookForm;
