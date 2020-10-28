export const GET_BOOKS = 'GET_BOOKS';
export const GET_BOOKS_SUCCESS = 'GET_BOOKS_SUCCESS';
export const GET_BOOKS_FAILURE = 'GET_BOOKS_FAILURE';

export const getBooks = (): BooksAction => ({
  type: GET_BOOKS
});

export const getBooksSuccess = ( books: IBook[] ): BooksAction => ({
  type: GET_BOOKS_SUCCESS,
  payload: books
});

export const getBooksFailure = (): BooksAction => ({
  type: GET_BOOKS_FAILURE
});

export const fetchBooks = () => async (dispatch: DispatchBooksType) => {
  dispatch(getBooks());

  try {
    const response = await fetch('');
    const data = await response.json();

    dispatch(getBooksSuccess(data));
  } catch (error) {
    dispatch(getBooksFailure());
  }
};