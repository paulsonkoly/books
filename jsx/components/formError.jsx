import React from 'react';
import { IoMdCloseCircle } from 'react-icons/io';

function FormError(props) {
  const errors = props.errors;

  if (errors.length == 0) {
    return(<></>);
  }
  else {
    const messages = errors.map(error => <li>{error.message}</li>);
    return(
      <div className="alert alert-warning m-3" role="alert">
        <IoMdCloseCircle
          className="float-sm-right c-pointer"
          onClick={props.onDismiss}
        />
        <ul>{messages}</ul>
      </div>
    );
  }
}

export default FormError;
