import { combineReducers } from 'redux';
import gists from '../components/gists/reducer';
import { error, loading } from '../services/reducer';

export default combineReducers({
  error,
  loading,
  gists
});
