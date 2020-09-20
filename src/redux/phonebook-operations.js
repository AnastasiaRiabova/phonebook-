import axios from 'axios';
import action from './actions';

const createNewPhoneNumber = contacts => dispatch => {
  dispatch(action.createNewPhoneNumberRequest());

  axios
    .post('http://localhost:3004/contacts', {
      name: contacts.name,
      number: contacts.number,
    })
    .then(response =>
      dispatch(action.createNewPhoneNumberSuccess(response.data)),
    )
    .catch(error => dispatch(action.createNewPhoneNumberError(error)));
};

const fetchContacts = () => dispatch => {
  dispatch(action.fetchContactsRequest());

  axios
    .get('http://localhost:3004/contacts')
    .then(response => dispatch(action.fetchContactsSuccess(response.data)))
    .catch(error => dispatch(action.fetchContactsError(error)));
};

const removeContact = id => dispatch => {
  dispatch(action.removeContactRequest());

  axios
    .delete(`http://localhost:3004/contacts/${id}`)
    .then(() => dispatch(action.removeContactSuccess(id)))
    .catch(error => dispatch(action.removeContactError(error)));
};
export default {
  createNewPhoneNumber,
  fetchContacts,
  removeContact,
};
