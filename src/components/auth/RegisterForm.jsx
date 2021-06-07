import React from 'react';

export const RegisterForm = () => {
  return (
    <div className='card-content has-text-centered card-back'>
      <div class='center-wrap'>
        <h4 className='pb-5 has-text-primary-light title is-3'>Sign Up</h4>
        <div className='content'>
          <div className='field'>
            <p className='control has-icons-left'>
              <input className='input' type='text' placeholder='Name' />
              <span className='icon is-small is-left'>
                <i className='fas fa-user'></i>
              </span>
            </p>
          </div>
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
            <p className='control has-icons-left'>
              <input
                className='input'
                type='password'
                placeholder='Confirm Password'
              />
              <span className='icon is-small is-left'>
                <i className='fas fa-lock'></i>
              </span>
            </p>
          </div>
          <div className='field'>
            <p className='control'>
              <button className='button is-success is-medium'>Submit</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
