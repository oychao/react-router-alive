import * as actionTypes from './actionTypes';

// redux-actions is highly recommended

export const add = num => ({
  type: actionTypes.ADD,
  payload: {
    num
  }
});

export const input = text => ({
  type: actionTypes.INPUT,
  payload: {
    text
  }
});