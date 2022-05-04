import React from "react";

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

import { useCollectionData } from 'react-firebase-hooks/firestore';

export var room = "_start";
export var roomDisplayName = "";

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

const firestore = firebase.firestore();

export var roomButtonNamed = "Rooms"

function RoomSelect() {

    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get('room');
    console.log(id);
    room = id;

    return (
        <div id="overlay">
            <div id="overlayText"><RoomList/></div>
        </div>
    );
}

function RoomList() {
    const messagesRef = firestore.collection("rooms");
    const query = messagesRef.orderBy('createdAt');

    const [messages] = useCollectionData(query, { idField: 'id' });

    return (<>
        <div className="roomList">
            <div className="overlaytex">Select a room</div>
            {messages && messages.map(msg => <RoomButton key={msg.id} message={msg} />)}

        </div>
    </>)
}

function RoomButton(props) {
    const { roomName, roomSysName } = props.message;

    function SetRoom() {
        room = roomSysName;
        roomDisplayName = roomName;

        window.location.replace('/p-chat/?room='+roomSysName);
    }

    return (<>
        <div>
            <button onClick={SetRoom}>{roomName}</button>
        </div>
    </>)
}

export function switchRoom({onUpdate}) {
    if (document.getElementById("overlay").style !== "flex") {
        document.getElementById("overlay").style.display = "flex";
    } 
    if (document.getElementById("overlay").style === "flex") {
        document.getElementById("overlay").style.display = "none";

        var rng = Math.floor(Math.random() * 9567444) + 1; 
        onUpdate(rng, room);
    }
}

export default RoomSelect;