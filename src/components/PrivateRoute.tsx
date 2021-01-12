import React, { useContext } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

type PrivateRouteProps = RouteProps & {
  component: React.FC;
};

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {
  const {userState: { user } } = useContext(UserContext);

  return (
    <Route {...rest} render={(props) => (
      user?.email
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
  );
};
