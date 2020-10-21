export const GET_POST = 'GET_POST';
export const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
export const GET_POST_FAILURE = 'GET_POST_FAILURE';

export const getPost = (): PostAction => ({
  type: GET_POST
});

export const getPostSuccess = ( post: IPost): PostAction => ({
  type: GET_POST_SUCCESS,
  payload: post
});

export const getPostFailure = (): PostAction => ({
  type: GET_POST_FAILURE
});

export const fetchPost = (id: number) => async (dispatch: DispatchPostType) => {
  dispatch(getPost());

  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await response.json();

    dispatch(getPostSuccess(data));
  } catch (error) {
    dispatch(getPostFailure());
  }
};