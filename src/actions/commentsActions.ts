export const GET_COMMENTS = 'GET COMMENTS';
export const GET_COMMENTS_SUCCESS = 'GET_COMMENTS_SUCCESS';
export const GET_COMMENTS_FAILURE = 'GET_COMMENTS_FAILURE';

export const getComments = (): CommentsAction => ({ type: GET_COMMENTS });

export const getCommentsSuccess = (comments: Array<IComment>): CommentsAction => ({
  type: GET_COMMENTS_SUCCESS,
  payload: comments
});

export const getCommentsFailure = (): CommentsAction => ({ type: GET_COMMENTS_FAILURE });

export const fetchComments = (postId: number) => async (dispatch: DispatchCommentsType) => {
  dispatch(getComments());

  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    );
    const data = await response.json();

    dispatch(getCommentsSuccess(data));
  } catch (error) {
    dispatch(getCommentsFailure());
  }
};
