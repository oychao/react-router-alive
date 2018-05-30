import produce from 'immer';

import * as actionTypes from './actionTypes';

export default (
    state = {
        count: 0
    },
    action
) => {
    const { type, payload } = action;
    return produce(state, draft => {
        switch (type) {
        case actionTypes.ADD:
            draft.count += payload.num;
        default:
        }
        return draft;
    });
};
