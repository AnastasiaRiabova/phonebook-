import axios from 'axios';
import actions from '../../redux/AuthPhonebook/authActions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const setToken = token =>
  (axios.defaults.headers.common.Authorization = `Bearer ${token}`);
const clearToken = token => (axios.defaults.headers.common.Authorization = '');

const Registation = user => dispatch => {
  dispatch(actions.registrationRequest());

  axios
    .post('/users/signup', user)
    .then(response => {
      setToken(response.data.token);
      dispatch(actions.registrationSuccess(response.data));
    })

    .catch(error => dispatch(actions.registrationError(error.message)));
};

const Login = user => dispatch => {
  dispatch(actions.loginRequest());

  axios
    .post('/users/login', user)
    .then(response => {
      setToken(response.data.token);
      dispatch(actions.loginSuccess(response.data));
      console.log(response.data.token);
    })
    .catch(error => dispatch(actions.loginError(error.message)));
};

const LogOut = () => dispatch => {
  dispatch(actions.logoutRequest());

  axios
    .post('/users/logout')
    .then(response => {
      clearToken();
      dispatch(actions.logoutSuccess());
    })
    .catch(error => dispatch(actions.logoutError(error.message)));
};

const getCurrentUser = () => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();
  if (persistedToken === '') {
    return;
  }

  setToken(persistedToken);
  dispatch(actions.getCurrentUserRequest());

  axios
    .get('/users/current')
    .then(({ data }) => dispatch(actions.getCurrentUserSuccess(data)))
    .catch(error => dispatch(actions.getCurrentUserError(error.message)));
};

export default {
  Registation,
  Login,
  LogOut,
  getCurrentUser,
};
