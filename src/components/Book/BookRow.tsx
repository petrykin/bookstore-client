import React from 'react';
import { Link } from 'react-router-dom';

type BookRowProps = {
  book: IBook
};

export const BookRow: React.FC<BookRowProps> = ({ book }) => {
  return (
    <article className = 'post-excerpt display-flex'>
      <img src={ book.coverUrl } alt='book cover'/>
      <div className='book-row-content'>
        <h2>{ book.title }</h2>
        <h3>Author: { book.author.name }</h3>
        <h3>ISBN: { book.isbn }</h3>
        <h3>Available count: { book.quantity }</h3>
        <h2>${ book.price }</h2>
        <div className='btn-group'>
          <Link to='/books' className='button btn-success'>Edit</Link>
        </div>
      </div>
    </article>
  );
};