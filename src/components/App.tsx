import React from 'react';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import DashboardPage from '../pages/DashboardPage';
import PostsPage from '../pages/PostsPage';
import SinglePostPage from '../pages/SinglePostPage';
import Navbar from './Navbar/Navbar';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path = '/' component = { DashboardPage } />
        <Route exact path = '/posts' component = { PostsPage } />
        <Route exact path = '/posts/:id' component = { SinglePostPage } />
        <Redirect to = '/' />
      </Switch>
    </>
  );
};

export default App;
