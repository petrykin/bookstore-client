import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';

import { Comment } from '../components/Comment/Comment';

import { fetchPost } from '../actions/postActions';
import { fetchComments } from '../actions/commentsActions';

type TParams =  { id: string };

type PostPageProps = PostCommentsState & RouteComponentProps<TParams> & {
    fetchPost: (id: number) => void,
    fetchComments: (id: number) => void
};

const SinglePostPage: React.FC<PostPageProps> = ({
                                                   match,
                                                   post,
                                                   comments,
                                                   loading,
                                                   hasErrors,
                                                   fetchPost,
                                                   fetchComments
                                                 }) => {
  useEffect(() => {
    const id: number = Number.parseInt(match.params.id, 10);
      fetchPost(id);
      fetchComments(id);
  }, [fetchPost, fetchComments]);

  const renderPost = () => {
    if (loading.post) return <p>Loading posts...</p>;
    if (hasErrors.post) return <p>Unable to display posts</p>;
    return post && (
      <>
        <h1>Single Post Page</h1>
        <h2>{ post.title }</h2>
        <p>{ post.body }</p>
      </>
    );
  };

  const renderComments = () => {
    if (loading.comments) return <p>Loading comments...</p>;
    if (hasErrors.comments) return <p>Unable to display comments</p>;
    return comments && comments.map(
      (comment: IComment) => <Comment key={ comment.id } comment={ comment } />);
  };

  return (
    <section>
      { renderPost() }
      <h2>Comments</h2>
      { renderComments() }
    </section>
  );
};

const mapStateToProps  = (state: { post: PostState, comments: CommentsState }): PostCommentsState => ({
    post: state.post.post,
    comments: state.comments.comments,
    loading: { post: state.post.loading, comments: state.comments.loading },
    hasErrors: { post: state.post.hasErrors, comments: state.comments.hasErrors }
});

const mapDispatchToProps = {
    fetchPost,
    fetchComments
};

export default connect(mapStateToProps, mapDispatchToProps)(SinglePostPage);