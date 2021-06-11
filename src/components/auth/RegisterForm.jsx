import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { startRegister } from '../../redux/actions/auth.actions';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [formValues, handleInputChange] = useForm({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
  });

  const [samePasswords, setSamePasswords] = useState(true);

  const { email, password, name, confirmPassword } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return setSamePasswords(false);
    }
    setSamePasswords(true);

    dispatch(startRegister({ email, password, name }));
  };

  return (
    <div className='card-content has-text-centered card-back'>
      <div className='center-wrap'>
        <h4 className='pb-5 has-text-primary-light title is-3'>Sign Up</h4>
        <form className='content' onSubmit={handleRegister}>
          <div className='field'>
            <p className='control has-icons-left'>
              <input
                className='input'
                type='text'
                placeholder='Name'
                name='name'
                value={name}
                onChange={handleInputChange}
              />
              <span className='icon is-small is-left'>
                <i className='fas fa-user'></i>
              </span>
            </p>
          </div>
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
            <p className='control has-icons-left'>
              <input
                className='input'
                type='password'
                placeholder='Confirm Password'
                name='confirmPassword'
                value={confirmPassword}
                onChange={handleInputChange}
              />
              <span className='icon is-small is-left'>
                <i className='fas fa-lock'></i>
              </span>
            </p>
          </div>
          {!samePasswords && (
            <div className='notification is-danger'>
              <button
                className='delete'
                onClick={() => setSamePasswords(true)}
              ></button>
              <p className='help'>The two passwords must be equals</p>
            </div>
          )}
          <div className='field'>
            <p className='control'>
              <button className='button is-success is-medium'>Submit</button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
