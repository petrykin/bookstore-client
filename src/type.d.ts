interface IPost {
  userId: number | -1;
  id: number | -1;
  title: string | '';
  body: string | '';
}

interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

type PostsState = {
  posts: Array<IPost> | undefined,
  loading: boolean,
  hasErrors: boolean
};

type PostState = {
  post: IPost | undefined,
  loading: boolean,
  hasErrors: boolean
};

type CommentsState = {
  comments: Array<IComment> | undefined,
  loading: boolean,
  hasErrors: boolean
};

type PostCommentsState = {
  post: IPost | undefined,
  comments: Array<IComment> | undefined,
  loading: {post: boolean, comments: boolean},
  hasErrors: {post: boolean, comments: boolean}
};

type PostsAction = {
  type: string,
  payload?: Array<IPost>
};

type CommentsAction = {
  type: string,
  payload?: Array<IComment>
};

type PostAction = {
  type: string,
  payload?: IPost
};

type DispatchPostsType = (args: PostsAction) => PostsAction;

type DispatchPostType = (args: PostAction) => PostAction;

type DispatchCommentsType = (args: CommentsAction) => CommentsAction;