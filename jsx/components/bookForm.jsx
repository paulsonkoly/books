import React from 'react';

class BookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      isbn: '',
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

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form className="m-3" onSubmit={this.handleSubmit}>
        <div className="form-group row">
          <label for="title" className="col-sm-2 col-form-label">Title</label>
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
          <label for="author" className="col-sm-2 col-form-label">Author</label>
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
          <label for="isbn" className="col-sm-2 col-form-label">ISBN</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="isbn"
              name="isbn"
              value={this.state.isbn}
              onChange={this.handleFormChange}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary mb-2">Create book</button>
      </form>
    );
  }
}

export default BookForm;
