import { put, call } from 'redux-saga/effects';

export function* apiCall(path, actionType, options){
  // retrieveing a token if any. used for login sessions
  let token = localStorage.getItem('reactlogin_tkn');
  let httpHeaders;

  // populating the headers object
  if(path === 'login-api'){
    httpHeaders = {
      'Authorization' : `Bearer ${token}`,
      'Content-Type' : 'application/x-www-form-urlencoded', 
      'Accept' : 'application/json'
    };
  } else {
    httpHeaders = {
      'Authorization' : `Bearer ${token}`
    };
  }

  options.headers = new Headers(httpHeaders);
  console.log(`in apiCall, http options below`);
  console.log(options);

  // Remove same-origin option in production
  options.credentials = 'same-origin';

  // making an API call using JS built in fetch
  try {
    const response = yield call(fetch, `http://35.164.214.160/${path}`, options);
    const data = yield call([response, response.json]);
    
    // if server returned a token, we will set it in the local storage
    // if there is no token, we trigger the same action but the payload from the
    // server will be different e.g. for incorrect email or password
    if(data.token){
      localStorage.setItem('reactlogin_tkn', data.token);
    } 
    
    yield put({type: actionType, payload: data});

  } catch (e) {
    // error fetching, display error Please try again later
    yield put({ type: actionType, 
                payload: { 
                           error: true,
                           message: 'Please try again later'
                         }});
  }
}
