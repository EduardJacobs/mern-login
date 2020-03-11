import { connect } from 'react-redux';
import Login from '../components/Login';

// importing action constants
import { 
  LOGIN_FORM_VALUES_R,
  LOGIN_SUBMIT_S,
  LOGIN_FORM_CLEAR_R
} from '../constants/actionTypes';

// state here is redux store state i.e. the result of store.getState()
// and this state will passed in as props from a container component 
// to the corresponding presentational component
function mapStateToProps(state){
  return {
    login: state.login,
    user: state.user
  }
}

// same as store.dispatch. mapping dispatch functions to props
// in the presentational component
function mapDispatchToProps(dispatch){
  return {
    loginFormValues(name, value){
      dispatch({
          type: LOGIN_FORM_VALUES_R,
          payload: { name, value }
      })
    },

    loginSubmit(email, password){
      dispatch({
        type: LOGIN_SUBMIT_S,
        payload: { 
          email,
          password
         }
      })
    },

    loginFormClear(){
      dispatch({
        type: LOGIN_FORM_CLEAR_R
      })
    }
  }
}

// connect will return a component
let LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;
