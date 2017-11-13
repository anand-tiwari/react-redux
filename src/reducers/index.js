import { combineReducers } from 'redux';
import course from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  course,
  authors,
  ajaxCallsInProgress
});

export default rootReducer;
