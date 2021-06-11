import React from 'react';

import { Redirect, Route } from 'wouter';

export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthenticated ? <Redirect to='/' /> : <Component {...props} />
      }
    />
  );
};
