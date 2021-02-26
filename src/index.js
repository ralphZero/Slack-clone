import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Splashscreen from './components/Splashscreen/Splashscreen';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from 'redux';
import { getFirebase, ReactReduxFirebaseProvider, isLoaded } from 'react-redux-firebase';
import { RootReducer } from './store/reducers/RootReducer';
import { createFirestoreInstance } from 'redux-firestore';
import { Provider, useSelector } from 'react-redux';
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

const AuthIsLoaded = ({ children }) => {
  const auth = useSelector(state => state.firebase.auth);
  if (!isLoaded(auth)) return <Splashscreen />;
  return children;
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <AuthIsLoaded>
          <App />
        </AuthIsLoaded>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
