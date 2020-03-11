import 'regenerator-runtime/runtime';
import { all } from 'redux-saga/effects';
import { watchLoginSubmit } from './loginSubmit';

export default function* rootSaga(){
  yield all([
    watchLoginSubmit(),
  ])
}
