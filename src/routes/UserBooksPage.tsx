import React from 'react';
import { connect } from 'react-redux';

import { BookCard } from '../components/Book/BookCard/BookCard';

import { fetchBooks } from '../redux/actions/booksActions';

const UserBooksPage: React.FC<UserBooksPageProps> = ({ books, loading, hasErrors }) => {

  const renderBooks = (): React.ReactNode | React.ReactNodeArray => {
    if (loading) return <p>Loading posts...</p>;
    if (hasErrors) return <p>Unable to display posts</p>;
    return books && books.map((book) => <BookCard key={ book.isbn } book={ book } />);
  };

  return (
    <section className='page'>
      <h1>User Books</h1>
      <div className='wrapper display-flex'>
        { renderBooks() }
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserBooksPage);