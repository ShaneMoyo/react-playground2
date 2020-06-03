import * as actions from '../../utils/constants';
import api from '../../services/api';


export function fetchGist(username){
console.log('reducin')
  return dispatch => {
    dispatch({ type: actions.LOADING });
    dispatch({
      type: actions.LOAD_GISTS,
      payload: api.getGistByUsername(username)
    })
    .then(() => dispatch({ type: actions.DONE_LOADING}))
    .catch(error => dispatch({ type: actions.ERROR , payload: error }));
  };
}
