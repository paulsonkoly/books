import React from 'react';

function Book(props) {
  return(
    <>
      <dt>Title</dt>
      <dd>{ props.title }</dd>
      <dt>Author</dt>
      <dd>{ props.author }</dd>
      <dt>ISBN</dt>
      <dd>{ props.isbn }</dd>
    </>
  );
}

export default Book;
