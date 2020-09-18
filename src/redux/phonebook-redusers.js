import { combineReducers } from 'redux';
import phonebookTypes from './phonebook-types';

const itemsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case phonebookTypes.CREATENUMBER:
      return [...state, payload];

    case phonebookTypes.REMOVE:
      return state.filter(item => item.id !== payload);

    case phonebookTypes.SET:
      return payload;

    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case phonebookTypes.FILTER:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
