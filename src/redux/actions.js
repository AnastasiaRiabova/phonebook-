// import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

// const createNewPhoneNumber = data => ({
//   type: phonebookTypes.CREATENUMBER,
//   payload: {
//     id: uuidv4(),
//     name: data.name,
//     number: data.number,
//   },
// });
// const createNewPhoneNumber = createAction(
//   'phonebook/createNewPhoneNumber',
//   data => ({
//     payload: { id: uuidv4(), name: data.name, number: data.number },
//   }),
// );

// const filterContacts = value => ({
//   type: phonebookTypes.FILTER,
//   payload: value,
// });
const filterContacts = createAction('phonebook/filterContacts');

// const removeContact = id => ({
//   type: phonebookTypes.REMOVE,
//   payload: id,
// });

const removeContact = createAction('phonebook/removeContact');

// const setContacts = value => ({
//   type: phonebookTypes.SET,
//   payload: value,
// });

// const setContacts = createAction('phonebook/setContacts');

const createNewPhoneNumberRequest = createAction(
  'phonebook/createNewPhoneNumberRequest',
);

const createNewPhoneNumberSuccess = createAction(
  'phonebook/createNewPhoneNumberSuccess',
);

const createNewPhoneNumberError = createAction(
  'phonebook/createNewPhoneNumberError',
);
const fetchContactsRequest = createAction('phonebook/fetchContactsRequest');

const fetchContactsSuccess = createAction('phonebook/fetchContactsSuccess');

const fetchContactsError = createAction('phonebook/fetchContactsError');

const removeContactRequest = createAction('phonebook/removeContactRequest');

const removeContactSuccess = createAction('phonebook/removeContactSuccess');

const removeContactError = createAction('phonebook/removeContactError');
export default {
  filterContacts,
  removeContact,
  createNewPhoneNumberRequest,
  createNewPhoneNumberSuccess,
  createNewPhoneNumberError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
};
