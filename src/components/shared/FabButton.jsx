import React from 'react';

export const FabButton = ({ color, handleAction, icon }) => {
  return (
    <button
      className={`button is-${color} is-large fab`}
      onClick={handleAction}
    >
      <span className='icon is-small'>
        <i className={`fas fa-${icon}`}></i>
      </span>
    </button>
  );
};
