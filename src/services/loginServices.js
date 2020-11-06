import firebase, { provider } from '../firebase';

export const signIn = (acc) => { firebase.auth().signInWithPopup(provider[acc]).catch(e => { console.log(e); }); };

export const signOut = () => { firebase.auth().signOut().catch(e => { console.log(e); }); };

export const watchUser = (setUser) =>
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  });
