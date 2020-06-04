import * as actions from '../../utils/constants';
import api from '../../services/api';


export function fetchGist(username){
  return dispatch => {   
    dispatch({
      type: actions.LOAD_GISTS,
      payload: api.getGistByUsername(username)
    })
  };
}
