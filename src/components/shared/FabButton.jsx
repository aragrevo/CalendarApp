import React from 'react';
import { useDispatch } from 'react-redux';
import { uiOpenModal } from '../../redux/actions/ui.actions';
import { types } from '../../redux/types/types';

export const FabButton = () => {
  const dispatch = useDispatch();

  const handleNew = () => {
    dispatch(uiOpenModal());
  };

  return (
    <button className='button is-success is-large fab' onClick={handleNew}>
      <span className='icon is-small'>
        <i className='fas fa-plus'></i>
      </span>
    </button>
  );
};
