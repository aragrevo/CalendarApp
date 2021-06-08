import React from 'react';
import { Link } from 'wouter';
import calendarImg from '../../assets/images/Timeline-bro.svg';

export const Navbar = () => {
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
          <a className='navbar-item' href='#'>
            Home
          </a>

          {/* <a className="navbar-item" href="#">
        Documentation
      </a> */}
        </div>

        <div className='navbar-end'>
          <div className='navbar-item'>
            <div className='buttons'>
              <div className='button is-success is-outlined'>
                <Link to='/login'>
                  <strong>Log out</strong>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
