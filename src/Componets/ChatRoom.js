import React, { useEffect, useRef, useState } from 'react';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

import { useCollectionData } from 'react-firebase-hooks/firestore';

import UploadButton, { imageToAttach, ClearImgAttach } from './FileUpload';

import ChatMessage from './ChatMessage'

import RoomSelect from './RoomList';

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
const firestore = firebase.firestore();

function ChatRoom() {
    const queryParams = new URLSearchParams(window.location.search);
    var id = queryParams.get('room');
    console.log(id);

    if (id === "" || id === null) {
        id = "_start"    
    }

    const dummy = useRef();
    const messagesRef = firestore.collection(id);
    const query = messagesRef.orderBy('createdAt').limitToLast(50);

    const [messages] = useCollectionData(query, { idField: 'id' });

    const [RAND, setRAND] = useState(0);
    console.log(RAND);

    const sendMessage = async (e) => {
        console.log(e);
        e.preventDefault();

        const { uid, photoURL } = auth.currentUser;
        var username = auth.currentUser.displayName;
        var imgurl = imageToAttach;
  
        var tex = document.getElementById("MSGINPUT").value;
        document.getElementById("MSGINPUT").value = "";

        if (tex === "") {
            return;
        }

        ClearImgAttach();

        await messagesRef.add({
            text: tex,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL,
            name: username,
            attatchment: imgurl
        })
    }

    useEffect(() => {
        dummy.current.scrollIntoView();
        const listener = event => {
            if (event.code === "Enter" && event.shiftKey) {
                event.preventDefault();
                sendMessage(event);
            }
        };
        document.addEventListener("keydown", listener);
    })

    function inputInteracted () {
        dummy.current.scrollIntoView();
    }

    function update(rngtoset, roomtoset) {
        setRAND(rngtoset);
    }

    return (<>
        <main>
            <RoomSelect onUpdate={update} />
            {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
            <div className='messageBar'>
                <form onInputCapture={inputInteracted}>
                <textarea id="MSGINPUT" onSubmit={sendMessage} placeholder={"Shift + enter to message\n2x Enter for new line"} autoComplete="none" />
                <button onClick={sendMessage} type="submit"><span role="img" aria-label='Send Message'>📤</span></button>
                </form>
                <UploadButton />
            </div>
        </main>
        <span ref={dummy}></span>
    </>)
}
export default ChatRoom;