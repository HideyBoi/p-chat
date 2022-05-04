import React, { useState } from 'react';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

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


export var imageToAttach = ""

function UploadButton () {
    const [uploadStatus, setUploadStatus] = useState("");

    function showUpload() {
      document.getElementById("imgurUpload").style.display = "block"
    }

    function closeUpload() {
      document.getElementById("imgurUpload").style.display = "none"
    }

    function upload() {
      const e = document.getElementsByClassName('input-image')[0].files[0]

        var storageRef = firebase.storage().ref();

        console.log(e.type);

        var rng = Math.floor(Math.random() * 69696969 + 1);

        setUploadStatus("Uploading!")

        storageRef.child("images/" + rng).put(e).then(function(snapshot) {
            snapshot.ref.getDownloadURL().then(function(url) {
              imageToAttach = url;
              setUploadStatus("File uploaded! The next message you send will have this attachment, refresh now to cancel!");
            })
        });
    }

    return(<>
        <div id='imgurUpload'>
            <div id='imgurUploadInner'>
                <h2>Upload image</h2>
                <form>
                  <input type="file" className='input-image' onChange={upload}/>
                </form>
                <p>{uploadStatus}</p>
                <button onClick={closeUpload}>Close</button>
            </div>
        </div>
        <button onClick={showUpload}><span role="img" aria-label='Attatch file'>⬆</span></button>
    </>)
}

export function ClearImgAttach () {
    imageToAttach = "";
}

export default UploadButton;