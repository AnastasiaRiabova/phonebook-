import phonebookTypes from './phonebook-types';
import { v4 as uuidv4 } from 'uuid';

const createNewPhoneNumber = data => ({
  type: phonebookTypes.CREATENUMBER,
  payload: {
    id: uuidv4(),
    name: data.name,
    number: data.number,
  },
});

const filterContacts = value => ({
  type: phonebookTypes.FILTER,
  payload: value,
});

const removeContact = id => ({
  type: phonebookTypes.REMOVE,
  payload: id,
});

const setContacts = value => ({
  type: phonebookTypes.SET,
  payload: value,
});

export default {
  createNewPhoneNumber,
  filterContacts,
  removeContact,
  setContacts,
};
