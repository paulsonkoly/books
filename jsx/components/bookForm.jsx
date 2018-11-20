import React from 'react';

class BookForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const newBook = {
      title: data.get('title'),
      author: data.get('author'),
      isbn: data.get('isbn'),
    };

    this.props.onSubmit(newBook);
  }

  render() {
    return (
      <form className="m-3" onSubmit={this.handleSubmit}>
        <div className="form-group row">
          <label for="title" className="col-sm-2 col-form-label">Title</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="title" name="title" />
          </div>
        </div>
        <div className="form-group row">
          <label for="author" className="col-sm-2 col-form-label">Author</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="author" name="author" />
          </div>
        </div>
        <div className="form-group row">
          <label for="isbn" className="col-sm-2 col-form-label">ISBN</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="isbn" name="isbn" />
          </div>
        </div>
        <button type="submit" className="btn btn-primary mb-2">Create book</button>
      </form>
    );
  }
}

export default BookForm;
