import React from 'react';
import { connect } from 'react-redux';

import { BookRow } from '../components/Book/BookRow';

import { fetchBooks } from '../redux/actions/booksActions';

const AdminBooksPage: React.FC<AdminBooksPageProps> = ({ books, loading, hasErrors }) => {

  const renderBooks = (): React.ReactNode | React.ReactNodeArray => {
    if (loading) return <p>Loading posts...</p>;
    if (hasErrors) return <p>Unable to display posts</p>;
    return books && books.map((book) => <BookRow key={ book.isbn } book={ book } />);
  };

  return (
    <section className='page'>
      <h1>Books</h1>
      { renderBooks() }
    </section>
  );
};

const mapStateToProps = (state: { books: BooksState }): BooksState => ({
  books: state.books.books,
  loading: state.books.loading,
  hasErrors: state.books.hasErrors
});

const mapDispatchToProps = {
  fetchBooks
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminBooksPage);