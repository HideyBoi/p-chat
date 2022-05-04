import React from "react";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

if (!firebase.apps.length) {
	firebase.initializeApp({
    	apiKey: "AIzaSyBpWmtGTqluiA1gC0CEFHrQcZncNRYtjbg",
    	authDomain: "private-school-chat.firebaseapp.com",
		databaseURL: "https://private-school-chat.firebaseio.com",
    	projectId: "private-school-chat",
    	storageBucket: "private-school-chat.appspot.com",
    	messagingSenderId: "113930891891",
    	appId: "1:113930891891:web:88a3cb1a24e25b06017006"
	});
} else {
	firebase.app(); // if already initialized, use that one
}

const auth = firebase.auth();

export function SignIn() {
    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    }

    return (
      <>
        <button className="sign-in" onClick={signInWithGoogle}>Sign In</button>
        <div className="opening-text">If you cannot sign in, please check your pop-up blocker and internet connection.</div>
  </>)
}

export function SignOut() {

    function RemoveAuth() {
        auth.signOut();
    }

    return auth.currentUser && (
      <button className="sign-out" onClick={RemoveAuth}>Sign Out</button>
    )
}