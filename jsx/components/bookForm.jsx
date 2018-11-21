import React from 'react';

class BookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      isbn: '',
      isbnValid: false,
      formErrors: { isbn: 'Please fill in the ISBN' }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ title: '', author: '', isbn: '' })
    window.focus();
  }

  handleFormChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState(
      { [name]: value },
      () => { this.validateField(name, value) }
    );
  }

  validateField(name, value) {
    let isbnValid = this.state.isbnValid;
    let formErrors = this.state.formErrors;

    switch (name) {
      case 'isbn':
        isbnValid = (value.length != 0);
        formErrors.isbn = isbnValid ? '' : "ISBN can't be empty";
        break;
    }

    this.setState({
      isbnValid: isbnValid,
      formErrors: formErrors,
    });
  }

  render() {
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
              value={this.state.title}
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
              value={this.state.author}
              onChange={this.handleFormChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="isbn" className="col-sm-2 col-form-label">ISBN</label>
          <div className="col-sm-10">
            <input
              type="text"
              className={ "form-control " + (this.state.isbnValid ? 'is-valid' : 'is-invalid') }
              id="isbn"
              name="isbn"
              value={this.state.isbn}
              onChange={this.handleFormChange}
            />
            {
              (this.state.isbnValid ? '' :
                <div className="invalid-feedback">{this.state.formErrors.isbn}</div>
              )
            }
          </div>
        </div>
        <button type="submit" className="btn btn-primary mb-2">Create book</button>
      </form>
      </>
    );
  }
}

export default BookForm;
