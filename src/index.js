import React from 'react';
import ReactDom from 'react-dom';

import Book from './Book';
import { data } from './books';

import './index.css';

function BookList() {
  return (
    <section className="booklist">
      {data.map(book => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById('root'));
