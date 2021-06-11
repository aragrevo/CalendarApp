import React, { useEffect } from 'react';

import { Switch, Route } from 'wouter';
import { LoginScreen } from '../components/auth/LoginScreen';
import { CalendarScreen } from '../components/calendar/CalendarScreen';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

import errorImg from '../assets/images/404_Error.svg';
import { useDispatch, useSelector } from 'react-redux';
import { startChecking } from '../redux/actions/auth.actions';

export const AppRouter = () => {
  const dispatch = useDispatch();
  const { checking, uid } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(startChecking());
  }, [dispatch]);

  if (checking) {
    return (
      <div
        style={{ width: '100vw', height: '100vh' }}
        className='button is-success is-loading'
      ></div>
    );
  }

  return (
    <>
      <Switch>
        <PublicRoute
          path='/login'
          component={LoginScreen}
          isAuthenticated={!!uid}
        />
        <PrivateRoute
          path='/'
          component={CalendarScreen}
          isAuthenticated={!!uid}
        />

        <Route>
          <div className='container' style={{ textAlign: 'center' }}>
            <img src={errorImg} alt='404 Not found' width='300px' />
          </div>
        </Route>
      </Switch>
    </>
  );
};
