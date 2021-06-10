import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { startLogin } from '../../redux/actions/auth.actions';

import '../../styles/auth.css';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [formValues, handleInputChange] = useForm({
    email: '',
    password: '',
  });

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLogin(email, password));
  };

  return (
    <div className='card-content has-text-centered card-front'>
      <div className='center-wrap'>
        <h4 className='pb-5 has-text-primary-light title is-3'>Log In</h4>
        <form className='content' onSubmit={handleLogin}>
          <div className='field'>
            <p className='control has-icons-left has-icons-right'>
              <input
                className='input'
                type='email'
                placeholder='Email'
                name='email'
                value={email}
                onChange={handleInputChange}
              />
              <span className='icon is-small is-left'>
                <i className='fas fa-envelope'></i>
              </span>
              <span className='icon is-small is-right'>
                <i className='fas fa-check'></i>
              </span>
            </p>
          </div>
          <div className='field'>
            <p className='control has-icons-left'>
              <input
                className='input'
                type='password'
                placeholder='Password'
                name='password'
                value={password}
                onChange={handleInputChange}
              />
              <span className='icon is-small is-left'>
                <i className='fas fa-lock'></i>
              </span>
            </p>
          </div>
          <div className='field'>
            <p className='control'>
              <button
                type='submit'
                className='button is-success is-medium'
                to='/'
              >
                Submit
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
