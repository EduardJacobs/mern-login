import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';

export default function App (){
  return (
    <div className="appjs">
      <Route exact path='/' component={ Home }/>
      <Route path="/login" component={ Login }/>
    </div>
  )
}