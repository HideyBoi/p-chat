import React, { useEffect, useState } from 'react';
import './App.css';

import {room, switchRoom} from './Componets/RoomList'
import {SignIn, SignOut} from './Componets/Auth';
import ChatRoom from "./Componets/ChatRoom"

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import { useAuthState } from 'react-firebase-hooks/auth';


import UIfx from 'uifx';
import sound from './noti.wav';
import StartScreen from './Start'

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

export var focused = true;
export var messagesSinceLastOpen = 0;

//#region 
const onFocus = () => {
  	console.log("Tab is in focus");
  	focused = true;
 	messagesSinceLastOpen = 0;
 	const favicon = document.getElementById("favicon")
 	favicon.href = "/p-chat/favicon.ico";
	document.title = "Planner"
};
const onBlur = () => {
	console.log("Tab is blurred");
	focused = false;
};
const WindowFocusHandler = () => {
  	useEffect(() => {
    	window.addEventListener("focus", onFocus);
      	window.addEventListener("blur", onBlur);
      	onFocus();

      	return () => {
          	window.removeEventListener("focus", onFocus);
          	window.removeEventListener("blur", onBlur);
      	};
}, []);

  	return <></>;
};

export const noti = new UIfx(
  	sound,
  	{
    	volume: 1, // number between 0.0 ~ 1.0
    	throttleMs: 100
  	}
)
//#endregion

function App() {

  	const [user] = useAuthState(auth);

	const [roomButtonName, setButtonName] = useState("Rooms")

	function RoomButtonClicked() {
		if (roomButtonName == "Rooms") {
			setButtonName("Rooms");
		} else {
			setButtonName("Rooms")
		}
		switchRoom(update);
	}

	function update(rng, rom) {
		console.log(rng, rom);
	}

	const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get('room');
    console.log(id);

  	return (
    	<div className="App">
      	<header>
        	<h1>Chat</h1>
        	<div className='buttoncontainer'>
          	{user ? <button onClick={RoomButtonClicked}  className="sign-out">{roomButtonName}</button> : null}
          	<SignOut />
        	</div>
      	</header>

      	<section>
        	{user ? <>{id === null ? <Start /> : <ChatRoom />}</> : <SignIn />}
      	</section>
      	<WindowFocusHandler></WindowFocusHandler>
    	</div>
  	);
}

function Start() {
  	return(<>
    	<StartScreen userName={auth.currentUser.displayName} />
    	<ChatRoom />
  	</>)
}

export function incMsgOpen() {
	messagesSinceLastOpen += 1;
}

export default App;
