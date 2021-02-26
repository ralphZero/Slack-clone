import firebase from 'firebase';

export const SaveMessage = (message, currentId) => {
    return (dispatch, getState, { getFirebase }) => {

        const firestore = getFirebase().firestore();
        const roomId = currentId;
        const name = getState().firebase.profile.name;
        const photoUrl = getState().firebase.profile.photoURL;

        firestore.collection('rooms').doc(roomId).collection('messages').add({
            name,
            photoUrl,
            message,
            createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
            updateAt: firebase.firestore.Timestamp.fromDate(new Date())
        }).then(() => dispatch({ type: 'MESSAGE_SEND_SUCCESS' }))
        .catch((error) => dispatch({ type: 'MESSAGE_SEND_FAILED' }));
    }
}