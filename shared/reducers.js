import { combineReducers } from 'redux-immutable';
import home from './containers/Home/reducer';

const rootReducer = combineReducers({
  home,
});

export default rootReducer;
