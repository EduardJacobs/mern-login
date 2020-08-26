import initialState from './initialState';

import {
  LOGIN_FORM_VALUES_R,
  LOGIN_SERVER_RESPONSE_R,
  LOGIN_FORM_CLEAR_R
} from '../constants/actionTypes';

// importing rehydrate constant from redux persist
import { REHYDRATE } from 'redux-persist/lib/constants'; 

// LOGIN_FORM_VALUES_R (R means invokes reducer directly) for
// populating login form with values
export default function reducer(state=initialState, action){
  switch(action.type){
    case REHYDRATE:
      return { ...state, persistedState: action.payload };
    case LOGIN_FORM_VALUES_R:
      return {
        ...state,  
        login: {
          ...state.login,
          form:{
            ...state.login.form,
            [action.payload.name]: action.payload.value
          }
        } 
      };  
    case LOGIN_FORM_CLEAR_R:
      return {
        ...state,  
        login: {
          ...state.login,
          errorMessage: '',
          form:{
            ...state.login.form,
            email: '',
            password: '',
          }
        } 
      };        
    case LOGIN_SERVER_RESPONSE_R:
      if(action.payload.error){
        return { 
          ...state, 
          login: {
            ...state.login,
            error: true,
            errorMessage: action.payload.message
          },
          user: {
            loggedIn: false
          }
        }
      } else {
        return {
          ...state,
          user: {
            ...state.user,
            loggedIn: true
          },
          login: {
            ...state.login,
            message: action.payload.message,
          }
        }
      }
		default:
		  return state;
	}
}