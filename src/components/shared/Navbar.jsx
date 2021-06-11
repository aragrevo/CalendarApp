import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import calendarImg from '../../assets/images/Timeline-bro.svg';
import { startLogout } from '../../redux/actions/auth.actions';

export const Navbar = () => {
  const { name } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <nav
      className='navbar is-dark'
      role='navigation'
      aria-label='main navigation'
    >
      <div className='navbar-brand'>
        <img src={calendarImg} width='60' />

        <a
          role='button'
          className='navbar-burger'
          aria-label='menu'
          aria-expanded='false'
          data-target='navbarBasicExample'
          href='#'
        >
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </a>
      </div>

      <div id='navbarBasicExample' className='navbar-menu'>
        <div className='navbar-start'>
          <span className='navbar-item'>{name}</span>
        </div>

        <div className='navbar-end'>
          <div className='navbar-item'>
            <div className='buttons'>
              <button
                className='button is-success is-outlined'
                onClick={handleLogout}
              >
                <strong>Log out</strong>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
