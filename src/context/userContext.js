import React, { createContext, useState, useEffect } from 'react';
import firebase, { provider } from '../firebase';

export const UserContext = createContext({});

export const UserProvider = (props) => {
  const signIn = (acc) => { firebase.auth().signInWithPopup(provider[acc]).catch(e => { console.log(e); }); };

  const signOut = () => { firebase.auth().signOut().catch(e => { console.log(e); }); };

  const watchUser = (setUser) =>
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = watchUser(setUser);
    return () => unsubscribe();
  }, []);

  return (
    <UserContext.Provider value={{ user, signIn, signOut }}>
      {props.children}
    </UserContext.Provider>
  );
};
