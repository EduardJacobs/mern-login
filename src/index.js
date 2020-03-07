import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor, sagaMiddleware } from './store/configureStore';
import rootSaga from './sagas'
import App from './components/App';
import { PersistGate } from 'redux-persist/integration/react';

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={ store }>
      <PersistGate loading={null} persistor={persistor}>	  
        <App/>
      </PersistGate>	  
    </Provider>
  </BrowserRouter>, document.getElementById('root')
);
