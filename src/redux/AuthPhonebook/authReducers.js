import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './authActions';

const initialUserState = { name: null, email: null };

const userReducer = createReducer(initialUserState, {
  [actions.registrationSuccess]: (state, { type, payload }) => ({
    ...payload.user,
  }),
  [actions.loginSuccess]: (state, { type, payload }) => ({
    ...payload.user,
  }),
  [actions.logoutSuccess]: (state, { type, payload }) => ({
    name: null,
    email: null,
  }),
  [actions.getCurrentUserSuccess]: (state, { type, payload }) => ({
    ...payload,
  }),
});

const tokenReducer = createReducer(null, {
  [actions.registrationSuccess]: (state, { type, payload }) => payload.token,
  [actions.loginSuccess]: (state, { type, payload }) => payload.token,
  [actions.logoutSuccess]: (state, { type, payload }) => null,
});

// const errorReducer = createReducer();

export default combineReducers({
  user: userReducer,
  token: tokenReducer,
  //   error: errorReducer,
});
//
