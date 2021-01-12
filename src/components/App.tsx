import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Layout } from './layout/Layout';
import { AdminBooksView } from './views/AdminBooksView';
import { UserBooksPage } from './books/UserBooksPage';
import { BookProvider } from '../context/BookContext';
import { UserProvider } from '../context/UserContext';

export const App: FC = () => {
  return (
    <UserProvider>
      <BookProvider>
        <Layout>
          <Switch>
            <Route exact path = '/books/manage' component = { AdminBooksView } />
            <Route exact path = '/books' component = { UserBooksPage } />
            <Redirect exact to = '/books' />
          </Switch>
        </Layout>
      </BookProvider>
    </UserProvider>
    );
};