const getNamebyLogIn = state => state.auth.user.name;

const isAuthenticated = state => state.auth.token;

export default {
  getNamebyLogIn,
  isAuthenticated,
};
