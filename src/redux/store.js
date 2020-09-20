import contactsReducer from './phonebook-redusers';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

const defaultMiddleware = getDefaultMiddleware();
const store = configureStore({
  reducer: { contacts: contactsReducer },
  middleware: [...defaultMiddleware],
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
