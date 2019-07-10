import { combineReducers } from 'redux';

import auth from './user';
import utils from './utils';

const rootReducer = combineReducers({
  auth,
  utils
});

export default rootReducer;
