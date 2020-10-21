import React from 'react';

type CommentProps = {
  comment: IComment
};

export const Comment: React.FC<CommentProps> = ({ comment }) => {
  return (
    <aside className = 'comment'>
      <h3>{ comment.email }</h3>
      <p>{ comment.body }</p>
    </aside>
  );
};