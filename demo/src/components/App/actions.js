import * as actionTypes from './actionTypes';

// redux-actions is highly recommended

export const add = num => ({
    type: actionTypes.ADD,
    payload: {
        num
    }
});
