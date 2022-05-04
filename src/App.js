import React, { useEffect, useState } from 'react';
import './App.css';

import {switchRoom} from './Componets/RoomList'
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
	document.getElementById("startRoom").style.display = "flex";
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
		if (roomButtonName === "Rooms") {
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
        	{user ? <>{id === null ? <Start /> : <>{id === "kimi" ? <SusRoomBlock /> : <ChatRoom />}</>}</> : <SignIn />}
      	</section>
      	<WindowFocusHandler />
    	</div>
  	);
}


function Start() {

  	return(
	 	<>
			<StartScreen userName={auth.currentUser.displayName} />
	  		<ChatRoom />
		</>
	);
}

function SusRoomBlock() {

	const [code, setCode] = useState("");

	function grow(e) {
		if (e === "CLEAR") {
			setCode("");
		} else if (e === "BACK") {
			if (e !== "") {
				setCode(code.slice(0, -1))
			}
		} else {
			if (code.length < 8) {
				setCode(code + e);
			}
		}
	}

	function submit() {
		if (code === "69694420") {
			setCode("");
			document.getElementById("startRoom").style.display = "none";
		} else {
			setCode("Incorrect Pin, system locked, contact head admin.");
		}
	}

	return(<>
		<div id='startRoom'>
			<h1>CRITICAL ERROR</h1>
			<p>Your login token expired.</p>
			<p>Switch to another room or refresh to reset your token.
				<br />
			Or, if you're an admin, input your login code to run tests.<br />{code}</p>
			<div className='startRoomButtonContainer'>
				<button onClick={() => grow("1")}>1</button>
				<button onClick={() => grow("2")}>2</button>
				<button onClick={() => grow("3")}>3</button>
				<button onClick={() => grow("4")}>4</button>
				<button onClick={() => grow("5")}>5</button>
				<button onClick={() => grow("6")}>6</button>
				<button onClick={() => grow("7")}>7</button>
				<button onClick={() => grow("8")}>8</button>
				<button onClick={() => grow("9")}>9</button>
				<button onClick={() => grow("CLEAR")}>C</button>
				<button onClick={() => grow("0")}>0</button>
				<button onClick={() => grow("BACK")}>⇐</button>
			</div>
			<button onClick={submit}>Submit</button>
		</div>
		<ChatRoom />
	</>);
}

export function incMsgOpen() {
	messagesSinceLastOpen += 1;
}

export default App;
