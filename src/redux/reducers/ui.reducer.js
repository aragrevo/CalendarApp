import { types } from '../types/types';

const initialState = {
  modalOpen: false,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.uiOpenModal:
      document.querySelector('#root').classList.add('is-clipped');
      document.querySelector('#modal').classList.add('is-active');
      return {
        ...state,
        modalOpen: true,
      };

    case types.uiCloseModal:
      document.querySelector('#root').classList.remove('is-clipped');
      document.querySelector('#modal').classList.remove('is-active');
      return {
        ...state,
        modalOpen: false,
      };

    default:
      return state;
  }
};
