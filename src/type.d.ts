interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

type PostState = {
  posts: Array<IPost> | undefined,
  loading: boolean,
  hasErrors: boolean
};

type PostAction = {
  type: string,
  payload?: Array<IPost>
};

type DispatchType = (args: PostAction) => PostAction;