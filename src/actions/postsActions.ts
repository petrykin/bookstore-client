export const GET_POSTS = 'GET_POSTS';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE';

export const getPosts = (): PostAction => ({
	type: GET_POSTS
})

export const getPostsSuccess = ( posts: Array<IPost> ): PostAction => ({
 	type: GET_POSTS_SUCCESS,
 	payload: posts
})

export const getPostsFailure = (): PostAction => ({
 	type: GET_POSTS_FAILURE
})

export const fetchPosts = () => async (dispatch: DispatchType) => {
	dispatch(getPosts());
	
	try {
  		const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  		const data = await response.json();

  		dispatch(getPostsSuccess(data));
	} catch (error) {
  		dispatch(getPostsFailure());
	}
}