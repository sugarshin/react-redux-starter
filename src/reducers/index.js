import { combineReducers } from 'redux';

import someReducer from './someReducer';
import otherReducer from './otherReducer';

export default combineReducers({
  someReducer,
  otherReducer
});
