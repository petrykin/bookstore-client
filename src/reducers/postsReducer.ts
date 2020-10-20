import * as actions from '../actions/postsActions';

export const initialState: PostState = {
  posts: [],
  loading: false,
  hasErrors: false,
};

const postsReducer = (state: PostState = initialState, action: PostAction): PostState => {
  switch (action.type) {
    case actions.GET_POSTS:
      return {
      	...state, 
      	loading: true
      }
    
    case actions.GET_POSTS_SUCCESS:
      return {
      	posts: action.payload, 
      	loading: false, 
      	hasErrors: false
      }

    case actions.GET_POSTS_FAILURE:
      return {
      	...state, 
      	loading: false, 
      	hasErrors: true
      }
    
    default:
      return state
  }
};

export default postsReducer;