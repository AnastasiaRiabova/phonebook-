import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './actions';
import authActions from '../AuthPhonebook/authActions';
// import phonebookTypes from './phonebook-types';

// const itemsReducer = (state = [], { type, payload }) => {
//   switch (type) {
//     case phonebookTypes.CREATENUMBER:
//       return [...state, payload];

//     case phonebookTypes.REMOVE:
//       return state.filter(item => item.id !== payload);

//     case phonebookTypes.SET:
//       return [...state, ...payload];

//     default:
//       return state;
//   }
// };

const itemsReducer = createReducer([], {
  [actions.createNewPhoneNumberSuccess]: (state, { type, payload }) => [
    ...state,
    payload,
  ],

  [actions.removeContactSuccess]: (state, { type, payload }) =>
    state.filter(item => item.id !== payload),

  [actions.fetchContactsSuccess]: (state, { type, payload }) => [
    // ...state,
    ...payload,
  ],
});

// const filterReducer = (state = '', { type, payload }) => {
//   switch (type) {
//     case phonebookTypes.FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

const loadingReducer = createReducer(false, {
  [actions.fetchContactsRequest]: () => true,
  [actions.fetchContactsSuccess]: () => false,
  [actions.fetchContactsError]: () => false,
  [actions.createNewPhoneNumberRequest]: () => true,
  [actions.createNewPhoneNumberSuccess]: () => false,
  [actions.createNewPhoneNumberError]: () => false,
  [actions.removeContactRequest]: () => true,
  [actions.removeContactSuccess]: () => false,
  [actions.removeContactError]: () => false,

  [authActions.loginRequest]: () => true,
  [authActions.loginSuccess]: () => false,
  [authActions.logoutError]: () => false,
  [authActions.registrationRequest]: () => true,
  [authActions.registrationSuccess]: () => false,
  [authActions.registrationError]: () => false,
});
const filterReducer = createReducer('', {
  [actions.filterContacts]: (state, { type, payload }) => payload,
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  loading: loadingReducer,
});
