import React from "react";
/*
import { AuthContext } from "./index";
*/
import * as firebase from 'firebase'

const SignIn = () => {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
    /*setPersistence = refreshing won't log out user*/
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        firebase.auth()
          .signInWithPopup(provider)
          .then(result => {
            console.log(result)
            /*
                        Auth.setLoggedIn(true)
            */
          }).catch(error => alert(error))
      })
  };

  return (
    <></>
  );
};

export default SignIn;