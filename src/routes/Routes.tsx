import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Layout } from '../layout/Layout';
import DashboardPage from './DashboardPage';
import AdminBooksPage from './AdminBooksPage';
import UserBooksPage from './UserBooksPage';

export const Routes: React.FC = () => (
  <Layout>
    <Switch>
      <Route exact path = '/' component = { DashboardPage } />
      <Route exact path = '/books' component = { UserBooksPage } />
      <Route exact path = '/admin/books' component = { AdminBooksPage } />
      <Redirect to = '/' />
    </Switch>
  </Layout>
);