import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function authourReducer(state = initialState.authors, action) {
  switch (action.type) {
    case types.actionTypes.LOAD_AUTHORS_SUCCESS:
      return action.authors;
    default:
      return state;
  }
}
