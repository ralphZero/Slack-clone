import firebase from 'firebase';

export const AddChannel = (title) => {
    return (dispatch, getState, { getFirebase }) => {
        let firestore = getFirebase().firestore();
        firestore.collection('rooms').add({
            title,
            createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
            updateAt: firebase.firestore.Timestamp.fromDate(new Date())
        })
        .then((doc) => {dispatch({ type: 'ADD_CHANNEL_SUCCESS' })})
        .catch((error) => {dispatch({ type: 'ADD_CHANNEL_FAILED' }) });
    }
}