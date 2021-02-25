import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from 'redux';
import { getFirebase, ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { RootReducer } from './store/reducers/RootReducer';
import { createFirestoreInstance  } from 'redux-firestore';
import { Provider } from 'react-redux';
import firebase from './config/firebase';
import thunk from 'redux-thunk';

const store = createStore(RootReducer, applyMiddleware(thunk.withExtraArgument({ getFirebase })));

const rrfConfig = {
  userProfile: 'users', 
  useFirestoreForProfile: true
}

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
