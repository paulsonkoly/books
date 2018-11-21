import React from 'react';
import classNames from 'classnames';

function FormInputField(props) {
  const name = props.name;
  const children = props.children;
  const valid = props.isValid && props.isValid();
  const invalid = props.isValid && ! props.isValid();
  const value = props.value;
  const classes = classNames(
    'form-control',
    { 'is-valid': valid },
    { 'is-invalid': invalid });


  return(
    <div className="form-group row">
      <label htmlFor={name} className="col-sm-2 col-form-label">{children}</label>
      <div className="col-sm-10">
        <input
          type="text"
          className={classes}
          id={name}
          name={name}
          value={value}
          onChange={props.onChange}
        />
        { (invalid ? <div className="invalid-feedback">{props.invalidReason()}</div> : '') }
      </div>
    </div>
  );
}

export default FormInputField;
