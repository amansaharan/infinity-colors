import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDM4AnuPxiWAQ0bqNI7-qPNmYg9McxmLaE',
  authDomain: 'infinity-colors.firebaseapp.com',
  databaseURL: 'https://infinity-colors.firebaseio.com',
  projectId: 'infinity-colors',
  storageBucket: '',
  messagingSenderId: '763028310763',
  appId: '1:763028310763:web:29c1d1a0cc2bdfb70fccae'
};

export const createUserProfileDocument = async (userAuth, additionaldata) => {
  if (!userAuth) return;

  const userRefe = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRefe.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRefe.set({
        displayName,
        email,
        createdAt,
        ...additionaldata
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRefe;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
