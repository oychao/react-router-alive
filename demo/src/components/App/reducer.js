import produce from 'immer';

import * as actionTypes from './actionTypes';

export default (
  state = {
    count: 0,
    text: ''
  }, {
    type,
    payload
  }
) => {
  return produce(state, draft => {
    switch (type) {
    case actionTypes.ADD:
      draft.count += payload.num;
      break;
    case actionTypes.INPUT:
      draft.text = payload.text;
      break;
    default:
    }
    return draft;
  });
};