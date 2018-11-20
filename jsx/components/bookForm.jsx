import React from 'react';

class BookForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    this.props.onSubmit(data);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div class="form-group row">
          <label for="title" class="col-sm-2 col-form-label">Title</label>
          <div class="col-sm-10">
            <input type="text" class="form-control-plaintext" id="title" name="title" />
          </div>
        </div>
        <div class="form-group row">
          <label for="author" class="col-sm-2 col-form-label">Author</label>
          <div class="col-sm-10">
            <input type="text" class="form-control-plaintext" id="author" name="author" />
          </div>
        </div>
        <div class="form-group row">
          <label for="isbn" class="col-sm-2 col-form-label">ISBN</label>
          <div class="col-sm-10">
            <input type="text" class="form-control-plaintext" id="isbn" name="isbn" />
          </div>
        </div>
        <button type="submit" class="btn btn-primary mb-2">Create book</button>
      </form>
    );
  }
}

export default BookForm;
