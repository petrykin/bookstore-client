import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Layout } from './layout/Layout';
import { AdminBooksView } from './views/AdminBooksView';
import { CartView } from './views/CartView';
import { UserBooksView } from './views/UserBooksView';
import { BookProvider } from '../context/BookContext';
import { UserProvider } from '../context/UserContext';
import { PrivateRoute } from './PrivateRoute';
import { LoginMock } from './mock/LoginMock';

export const App: FC = () => {
  return (
    <UserProvider>
      <BookProvider>
        <Layout>
          <Switch>
            <PrivateRoute exact path = '/books/manage' component = { AdminBooksView } />
            <PrivateRoute exact path = '/cart' component = { CartView } />
            <Route exact path = '/books' component = { UserBooksView } />
            <Route exact path = '/login' component = { LoginMock } />
            <Redirect exact to = '/books' />
          </Switch>
        </Layout>
      </BookProvider>
    </UserProvider>
    );
};