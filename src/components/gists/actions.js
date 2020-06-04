import * as actions from '../../utils/constants';
import todosApi from '../../services/todosApi';

export function fetchGists(){
  return dispatch => {
    return todosApi.getMy()
      .then( todos => dispatch({type: actions.LOAD_TODOS, payload: todos}))
      .then(() => dispatch({ type: actions.DONE_LOADING}))
      .catch(error => dispatch({ type: actions.ERROR , payload: error }));
  }
}



