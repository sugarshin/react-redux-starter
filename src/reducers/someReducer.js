import * as types from '../constants/ActionTypes';
import initialState from '../constants/initialState';

export default function someReducer(state = initialState.some, action) {
  switch (action.type) {

  case types.SOME_ACTIOIN:
    return Object.assign({}, state, { someSate: 'val' });

  case types.HOGE_ACTIOIN:
    return Object.assign({}, state, { hogeSate: 'val' });

  default:
    return state;

  }
}
