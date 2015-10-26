import * as types from '../constants/ActionTypes';

export function someAction(source) {
  return (dispatch, getState) => {
    return dispatch(someActionIfNeeded(source));
  };
}

function updateSomeIfNeeded(source) {
  return (dispatch, getState) => {
    if (shouldUpdateSome(getState())) {
      return dispatch(updateSome(source));
    }
  };
}

function shouldUpdateSome(state) {
  return state.isFetching ? false : true;
}

function updateSome(source) {
  return dispatch => {
    dispatch(requestSome());
    return asyncMethod(source)
      .then(res => dispatch(receiveSome(res)));
  };
}

function requestSome() {
  return { type: types.REQUEST_SOME };
}

function receiveSome(res) {
  return {
    type: types.RECEIVE_SOME,
    res
  }
}

export function otherAction() {
  return { type: types.OTHER_ACTIOIN };
}
