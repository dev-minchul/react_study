import { createAction, handleActions } from 'redux-actions';

const SET_PREVIOUS_URL = "user/SET_PREVIOUS_URL";
const SET_USER = "user/SET_USER"
const SET_USER_STATUS = "user/SET_USER_STATUS"

export const setPrivousUrl = createAction(SET_PREVIOUS_URL);
export const setUser = createAction(SET_USER);
export const setUserStatus = createAction(SET_USER_STATUS);

const initailValue = {
  currentUser : {},
  isLogin : false,
  priviousUrl : ""
}

const user = handleActions({
  [SET_PREVIOUS_URL] : (state, action) => ({...state, priviousUrl : action.payload}),
  [SET_USER] : (state, action) => ({...state, currentUser : action.payload}),
  [SET_USER_STATUS] : (state, action) => ({...state, isLogin : action.payload}),
}, initailValue);

export default user;