import * as types from '../constants/ActionTypes';
import initialState from '../constants/initialState';

export default function otherReducer(state = initialState.other, action) {
  switch (action.type) {

  case types.OTHER_ACTIOIN:
    return Object.assign({}, state, { otherSate: 'val' });

  case types.FUGA_ACTIOIN:
    return Object.assign({}, state, { fugaSate: 'val' });

  default:
    return state;

  }
}
