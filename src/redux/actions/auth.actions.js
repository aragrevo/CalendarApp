import { toast } from 'bulma-toast';
// import { eventLogout } from './events';

import { fetchWithoutToken, fetchWithToken } from '../../helpers/fetch';
import { types } from '../types/types';

export const startLogin = (email, password) => {
  return async (dispatch) => {
    const resp = await fetchWithoutToken('auth', { email, password }, 'POST');
    const body = await resp.json();

    if (!body.ok) {
      return toast({
        message: body.msg,
        type: 'is-danger',
        position: 'center',
        closeOnClick: true,
        dismissible: true,
        pauseOnHover: true,
      });
    }

    const { user } = body;
    localStorage.setItem('token', user.token);
    localStorage.setItem('token-init-date', new Date().getTime());

    dispatch(
      login({
        uid: user.uid,
        name: user.name,
      })
    );
  };
};

export const startRegister = ({ email, password, name }) => {
  return async (dispatch) => {
    const resp = await fetchWithoutToken(
      'auth/new',
      { email, password, name },
      'POST'
    );
    const body = await resp.json();

    if (!body.ok) {
      return toast({
        message: body.msg,
        type: 'is-danger',
        position: 'center',
        closeOnClick: true,
        dismissible: true,
        pauseOnHover: true,
      });
    }

    localStorage.setItem('token', body.token);
    localStorage.setItem('token-init-date', new Date().getTime());

    dispatch(
      login({
        uid: body.uid,
        name: body.name,
      })
    );
  };
};

export const startChecking = () => {
  return async (dispatch) => {
    const resp = await fetchWithToken('auth/renew');
    const body = await resp.json();

    if (!body.ok) {
      dispatch(checkingFinish());
      return;
    }
    localStorage.setItem('token', body.token);
    localStorage.setItem('token-init-date', new Date().getTime());

    dispatch(
      login({
        uid: body.uid,
        name: body.name,
      })
    );
  };
};

const checkingFinish = () => ({ type: types.authCheckingFinish });

const login = (user) => ({
  type: types.authLogin,
  payload: user,
});

export const startLogout = () => {
  return (dispatch) => {
    localStorage.clear();
    // dispatch( eventLogout() );
    dispatch(logout());
  };
};

const logout = () => ({ type: types.authLogout });
