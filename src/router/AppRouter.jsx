import React from 'react';

import { Switch, Route } from 'wouter';
import { LoginScreen } from '../components/auth/LoginScreen';
import { CalendarScreen } from '../components/calendar/CalendarScreen';

import errorImg from '../assets/images/404_Error.svg';

export const AppRouter = () => {
  return (
    <>
      <Switch>
        <Route path='/login' component={LoginScreen} />
        <Route path='/' component={CalendarScreen} />

        <Route>
          <div className='container' style={{ textAlign: 'center' }}>
            <img src={errorImg} alt='404 Not found' width='300px' />
          </div>
        </Route>
      </Switch>
    </>
  );
};
