import { combineReducers } from 'redux';
import gists from '../components/gists/reducer';
import { error, loading } from '../services/reducer';

export default combineReducers({
  gists,
  loading,
  error
});