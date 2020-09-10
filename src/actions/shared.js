import { getInitialData } from '../utils/api';
import { receiveUsers } from './users';
import { receiveTweets } from './tweets';
import { setAuthedUser } from '../actions/authedUser';
import { showLoading, hideLoading } from 'react-redux-loading';

const AUTHED_ID = 'tylermcginnis';

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({ users, tweets }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveTweets(tweets));
      dispatch(setAuthedUser(AUTHED_ID));
      dispatch(hideLoading());
    });
  };
}

// action creator will go through thunk middleware

// function createThunkMiddleware(extraArgument) {
//   return ({ dispatch, getState }) => next => action => {
//     if (typeof action === 'function') {
//       return action(dispatch, getState, extraArgument);
//     }
//     return next(action);
//   };
// }

// const thunk = createThunkMiddleware();
// thunk.withExtraArgument = createThunkMiddleware;

// like a tweet no only in the store but also in our database

// function handleToggleTweet (info) {
//   return (dispatch) => {
//     saveLikeToggle(info)
//     .then(() => {
//       dispatch(toggleTweet(info));
//       })
//     .catch((e) => {
//       console.warn('Error in handleToggleTweet: ', e);
//       alert('There was an error liking the tweet. Try again.');
//   });
// };
// }

// export default thunk;
