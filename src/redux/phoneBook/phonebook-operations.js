import axios from 'axios';
import action from './actions';
axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const createNewPhoneNumber = contacts => dispatch => {
  dispatch(action.createNewPhoneNumberRequest());

  axios
    .post('/contacts', {
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
    .get('/contacts')
    .then(response => dispatch(action.fetchContactsSuccess(response.data)))
    .catch(error => dispatch(action.fetchContactsError(error)));
};

const removeContact = id => dispatch => {
  dispatch(action.removeContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(action.removeContactSuccess(id)))
    .catch(error => dispatch(action.removeContactError(error)));
};
export default {
  createNewPhoneNumber,
  fetchContacts,
  removeContact,
};
