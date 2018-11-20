import React from 'react';
import { GoTrashcan } from 'react-icons/go';

function Book(props) {
  return(
    <div className="card m-3">
      <div className="card-header">
        {props.title}
        <GoTrashcan
          className="text-danger float-sm-right c-pointer"
          onClick={props.onDelete}
        />
      </div>
      <div className="card-body">
        <div className="card-title">{props.author}</div>
        <div className="card-text">
          <dl className="row">
            <dt className="col-sm-3">isbn</dt>
            <dd className="col-sm-9">{props.isbn}</dd>
          </dl>
        </div>
      </div>
    </div>
  );
}

export default Book;
