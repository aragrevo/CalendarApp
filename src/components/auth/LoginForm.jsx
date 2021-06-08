import React from 'react';
import { Link } from 'wouter';

import '../../styles/auth.css';

export const LoginForm = () => {
  return (
    <div className='card-content has-text-centered card-front'>
      <div class='center-wrap'>
        <h4 className='pb-5 has-text-primary-light title is-3'>Log In</h4>
        <div className='content'>
          <div className='field'>
            <p className='control has-icons-left has-icons-right'>
              <input className='input' type='email' placeholder='Email' />
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
              <input className='input' type='password' placeholder='Password' />
              <span className='icon is-small is-left'>
                <i className='fas fa-lock'></i>
              </span>
            </p>
          </div>
          <div className='field'>
            <p className='control'>
              <Link className='button is-success is-medium' to='/'>
                Submit
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
