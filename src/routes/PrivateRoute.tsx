import React from 'react';
import { Route, RouteProps } from 'react-router-dom';

type PrivateRouteProps = RouteProps & {
  component: React.FC;
  isSignedIn: boolean;
};

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest}>
      <Component {...rest}/>
    </Route>
  );
};
