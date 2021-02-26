import firebase from 'firebase';

export const LoginWithGoogle = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firestore = getFirebase().firestore();
        const auth = getFirebase().auth();
        const provider = new firebase.auth.GoogleAuthProvider();
        
        auth.signInWithPopup(provider).then((res) => {
            const isNewUser = res.additionalUserInfo.isNewUser;
            const uid = res.user.uid;
            const name = res.user.displayName;
            const photoURL = res.user.photoURL;

            if(isNewUser) {
                firestore.collection('users').doc(uid).set({
                    name: name,
                    photoURL: photoURL,
                    createdAt: firebase.firestore.Timestamp.fromDate(new Date())
                }).then(() => {
                    dispatch({ type: 'USER_SIGN_IN_SUCCESS' });
                });
            }
            
            dispatch({ type: 'USER_SIGN_IN_SUCCESS' });
        })
        .catch((error) => {
            dispatch({ type: 'USER_SIGN_IN_FAILED' })
        });
    }
}

export const SignOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase.auth().signOut().then(() => {
            dispatch({ type: 'LOGOUT_SUCCESS'})
        })
        .catch((error) => {
            dispatch({ type: 'LOGOUT_ERROR', error});
        });
    }
}