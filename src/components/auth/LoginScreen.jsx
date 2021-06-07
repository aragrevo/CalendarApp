import React from 'react';
import { SwitchCheck } from '../shared/SwitchCheck';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';

export const LoginScreen = () => {
  return (
    <>
      <section className='hero is-success is-fullheight'>
        <div className='container mt-6'>
          <div className='columns is-mobile'>
            <div className='column is-half is-offset-one-quarter has-text-centered'>
              <h6 className='mb-0 pb-3'>
                <span>Log In </span>
                <span>Sign Up</span>
              </h6>
              <SwitchCheck />
              <div className='card-3d-wrap'>
                <div className='card-3d-wrapper mt-6 card has-background-dark has-text-primary-light'>
                  <LoginForm />
                  <RegisterForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
