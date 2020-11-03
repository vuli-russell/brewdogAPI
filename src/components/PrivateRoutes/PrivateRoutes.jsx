import React, { useEffect, useState } from "react";
// import styles from "./PrivateRoutes.module.scss";
import firebase from "../../firebase";

const PrivateRoutes = (props) => {

  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        setIsSignedIn(true)
      }else{
        setIsSignedIn(false)
      }
    })
  },[])

  return (
    <>
      {isSignedIn ? props.children : <h1>Please log in to view profile</h1>}
    </>
  );
};

export default PrivateRoutes;
