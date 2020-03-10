// the initial state for our app
export default {
  user: {
    nickname: '',
    loggedIn: false
  },
  login: {
    form: {
      email: '',
      password: ''
    },
    message: '',
    error: false,
    errorMessage: ''
  },
  isFetching: false,
};