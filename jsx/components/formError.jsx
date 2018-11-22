import React from 'react';
import { IoMdCloseCircle } from 'react-icons/io';

function FormError(props) {
  const message = props.children;

  if (message.length == 0) {
    return(<></>);
  }
  else {
    return(
      <div className="alert alert-warning m-3" role="alert">
        <IoMdCloseCircle
          className="float-sm-right c-pointer"
          onClick={props.onDismiss}
        />
        There was an error on the server with the data you provided: { message }
      </div>
    );
  }
}

export default FormError;
