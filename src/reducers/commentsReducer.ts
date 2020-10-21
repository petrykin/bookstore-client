import * as actions from '../actions/commentsActions';

export const initialState: CommentsState = {
  comments: [],
  loading: false,
  hasErrors: false
};

const commentsReducer = (state: CommentsState = initialState, action: CommentsAction): CommentsState => {
  switch (action.type) {
    case actions.GET_COMMENTS:
      return {
        ...state,
        loading: true
      };

    case actions.GET_COMMENTS_SUCCESS:
      return {
        comments: action.payload,
        loading: false,
        hasErrors: false
      };

    case actions.GET_COMMENTS_FAILURE:
      return {
        ...state,
        loading: false,
        hasErrors: true
      };

    default:
      return state;
  }
};

export default commentsReducer;