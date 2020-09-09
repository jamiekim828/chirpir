export const SET_AUTHED_USER = 'SET_AUTHED_USER';

// set authed user action creator
// make action creator first and then reducer
// reducers
// (previousState, action) => newState
// initializeing state
// const store = createStore (
//   rootReducer,
//   { tweets: {} }
// );
export function setAuthedUser(id) {
  return {
    type: SET_AUTHED_USER,
    id,
  };
}
