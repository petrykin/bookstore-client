import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions/postsActions';
import { Post } from '../components/Post/Post';

type PostsPageProps = PostState & {
  fetchPosts: () => void
};

const PostsPage: React.FC<PostsPageProps> = ({ posts, loading, hasErrors, fetchPosts }) => {
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const renderPosts = () => {
    if (loading) return <p>Loading posts...</p>;
    if (hasErrors) return <p>Unable to display posts</p>;
    return posts && posts.map((post) => <Post key={ post.id } post={ post } />);
  };

  return (
    <section>
      <h1>Posts</h1>
      { renderPosts() }
    </section>
  );
};

const mapStateToProps = (state: { posts: PostState }): PostState => ({
  posts: state.posts.posts,
  loading: state.posts.loading,
  hasErrors: state.posts.hasErrors
});

const mapDispatchToProps = {
  fetchPosts
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsPage);