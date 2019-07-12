import { combineReducers } from 'redux';

import auth from './user';
import utils from './utils';
import idea from './idea';

const rootReducer = combineReducers({
  auth,
  idea,
  utils
});

export default rootReducer;
