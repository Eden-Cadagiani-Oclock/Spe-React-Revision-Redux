import { combineReducers } from 'redux';

import formUserReducer from './formUserReducer';
import loggedUserReducer from './loggedUserReducer';

const rootReducer = combineReducers({
  formUser: formUserReducer,
  loggedUser: loggedUserReducer,
});

export default rootReducer;
