import React from 'react';

import { Link } from 'react-router-dom';

type PostProps = {
  post: IPost
};

export const Post: React.FC<PostProps> = ({ post }) => (
  <article className = 'post-excerpt'>
    <h2>{ post.title }</h2>
    <p>{ post.body.substring(0, 100) }</p>

    <Link to = { `/posts/${ post.id }` } className = 'button'>
      View Post
    </Link>
  </article>
);