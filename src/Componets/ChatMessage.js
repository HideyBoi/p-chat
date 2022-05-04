import React, { useEffect, useRef, useState } from 'react';

import ReactMarkdown from 'react-markdown';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import {noti, focused, messagesSinceLastOpen, incMsgOpen} from '../App'


export var prevMsgType = [];
export var prevMsgTime = [];
export var messageCount = 0;
export var prevMsgUUID = [];

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

function ChatMessage(props) {
  	const dummy = useRef();
  	const { text, uid, photoURL, createdAt, name, attatchment } = props.message;

  	const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  	const [alreadyPlayed, setPlayed] = useState(false);

  	var username;

  	var currentMsgPos = messageCount;

  	prevMsgType.push(messageClass);
  	prevMsgTime.push(createdAt);
  	prevMsgUUID.push(uid);
  	messageCount = messageCount + 1;

  	if (messageClass === "received") {
    	if (!alreadyPlayed) {
      	noti.play();
      	setPlayed(true);

      	if (!focused) {
        	incMsgOpen();
        	document.title = "(" + messagesSinceLastOpen + ") Planner";
        	const icon = document.getElementById("favicon")
        	icon.href = "/p-chat/favicon-unread.ico";
      	}
    	}
  	}

  	//eslint-disable-next-line
  	useEffect(function() {
    	if (currentMsgPos < 1 || timestamp === "Sending...") {
      	return;
    	}
    	if (createdAt !== undefined && prevMsgTime[currentMsgPos - 1] !== null && prevMsgTime[currentMsgPos - 1] !== undefined){
      	var minDiff = Math.floor((createdAt.toDate() - prevMsgTime[currentMsgPos - 1].toDate())/1000/60)
    	}

    	if (messageClass === prevMsgType[currentMsgPos - 1] && prevMsgUUID[currentMsgPos - 1] === uid && minDiff < 1) {
      	var e = document.getElementById("timestamp" + (currentMsgPos - 1));
      	try {
        	e.style.display = "none";
        	console.log("Changed");
      	} catch (error) {
      	}
    	}
  	});

  	if (name !== undefined){
    	if (name !== auth.currentUser.displayName)
    	{
      		username = name + " • ";
    	} else {
      		username = "You • "
      		if (name === "Ciara Lee") {
        		username = "You, aka the cutest person ever • "
      		}
    	}
  	} else {
    	username = "Name missing • ";
  	}

  	var timestamp = 'Sending...';
  	var timestampClass = '';

  	if (createdAt != null) {
    	timestamp = new Date(createdAt.toDate());
    	var tsTime = timestamp.toTimeString();

    	var tsTimeSplit = tsTime.split(':');

    	var pmAm = ' ';

    	if (tsTimeSplit[0] >= 13) {
      	var tsInt = parseInt(tsTimeSplit[0]);
      	tsInt = tsInt - 12;
      	tsTimeSplit[0] = tsInt.toString();
      	pmAm = 'PM';
    	} else {
      	pmAm = 'AM';
    	}

    	timestamp = `${timestamp.toDateString()}  ${tsTimeSplit[0]}:${tsTimeSplit[1]} ${pmAm}`
  	}

  	if (messageClass === 'sent'){
    	timestampClass = 'tssent';
  	} else {
    	timestampClass = 'tsreceived';
  	}

  	return (<>
    	<div className={`message ${messageClass}`}>
      	<img alt="Profile" src={photoURL || 'https://hideyboi.github.io/p-chat/missingProfilePicture.png'} />
        	{timestamp === "Sending..." ? 
				<img alt="sending" src='/p-chat/loading.gif'></img>
        	:
        		<>{text ? 
					<div className='MessageContainer'>
        				<div className="messageText"><ReactMarkdown>{text}</ReactMarkdown></div>
      				</div>
     			: 
				 	<span></span>
				}
       		</>}
    	</div>
    	{attatchment ? 
      		<div className={"attatchmentContainer " + messageClass}>
        	<a className="attatchment" href={attatchment} target="_empty" alt="Open Attatchment in new tab">
          		<img alt='attatchment' src={attatchment} />
        	</a> 
      		</div>
    	: 
      		<span></span>
    	}

    	<div id={"timestamp" + currentMsgPos} className={`timestamp ${timestampClass}`}>{username}{timestamp}</div>
    	<span ref={dummy}></span>
  	</>)
}

export default ChatMessage;