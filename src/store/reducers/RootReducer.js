import { combineReducers  } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import { channelReducer } from './channelReducer';

export const RootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    channel: channelReducer
});