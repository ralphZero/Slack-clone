import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from 'redux';
import { getFirebase, ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { RootReducer } from './store/reducers/RootReducer';
import { createFirestoreInstance  } from 'redux-firestore';
import firebase from './config/firebase';
import thunk from 'redux-thunk';

const store = createStore(RootReducer, applyMiddleware(thunk.withExtraArgument({ getFirebase })));

/* const rrfConfig = {
  userProfile: 'users', 
  useFirestoreForProfile: true
} */

const rrfProps = {
  firebase,
  config: {},
  dispatch: store.dispatch,
  createFirestoreInstance
}

ReactDOM.render(
  <React.StrictMode>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
