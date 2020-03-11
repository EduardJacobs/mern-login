import { call, takeEvery } from 'redux-saga/effects';
import { apiCall } from './apiCall';
import { LOGIN_SERVER_RESPONSE_R } from '../constants/actionTypes';

// submitting our login form values to the server using
// our apicall.js function
function* loginSubmit(request){
  let urlEncodedDataPairs = [];
  let name = '';
  let path = 'login-api';
  let actionType = LOGIN_SERVER_RESPONSE_R;
  let body = '';
  
  // Turn the data object into an array of URL-encoded key/value pairs.
  for(name in request.payload) {
    urlEncodedDataPairs.push(encodeURIComponent(name) + '=' 
      + encodeURIComponent(request.payload[name]));
  }

  // Combine the pairs into a single string and replace all %-encoded spaces with 
  // the '+' character; matches the behaviour of browser form submissions.
  body = urlEncodedDataPairs.join('&').replace(/%20/g, '+');

  let options = {
    method: 'POST',
    body: body
  };

  yield call(apiCall, path, actionType, options);

}

// watch for every LOGIN_SUBMIT_S (S means it is sent to a saga) and
// call loginSubmit function
export function* watchLoginSubmit(){
  yield takeEvery('LOGIN_SUBMIT_S', loginSubmit);
}