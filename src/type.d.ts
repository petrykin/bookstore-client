interface IPost {
	userId: number,
	id: number,
	title: string,
	body: string
};

type PostState = {
	posts: Array<IPost>,
	loading: boolean,
	hasError: boolean,
};

type PostAction = {
	type: string,
	payload?: IPost | Array<IPost>
};

type DispatchType = (args: PostAction) => PostAction;