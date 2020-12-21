import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import { BookRow } from '../components/Book/BookRow';

import { fetchBooks } from '../redux/actions/booksActions';

const AdminBooksPage: React.FC<AdminBooksPageProps> = ({ books, loading, hasErrors, fetchBooks }) => {

  useEffect(() => { books && books.length === 0 && fetchBooks(); }, []);

  const renderBooks = (): React.ReactNode | React.ReactNodeArray => {
    if (loading) return <p>Loading posts...</p>;
    if (hasErrors) return <p>Unable to display posts</p>;
    return books && books.map((book) => <BookRow key={ book.isbn } book={ book } />);
  };

  return (
    <section className='admin-page'>
      <h1>Admin Books</h1>
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