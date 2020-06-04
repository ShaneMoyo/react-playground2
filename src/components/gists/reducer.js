import * as actions from '../../utils/constants';

export default function gists(state = [], { type, payload }) {
  switch(type) {
    case actions.LOAD_GISTS:
      return payload;
    default:
      return state;
  }
}
