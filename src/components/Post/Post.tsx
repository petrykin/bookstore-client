import React from 'react';

type PostProps = {
	post: IPost
}

export const Post: React.FC<PostProps> = ({ post }) => (
	<article className="post-excerpt">
		<h2>{ post.title }</h2>
		<p>{ post.body.substring(0, 100) }</p>
	</article>
)