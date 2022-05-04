importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js')
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js')

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyBpWmtGTqluiA1gC0CEFHrQcZncNRYtjbg",
        authDomain: "private-school-chat.firebaseapp.com",
        databaseURL: "https://private-school-chat.firebaseio.com",
        projectId: "private-school-chat",
        storageBucket: "private-school-chat.appspot.com",
        messagingSenderId: "113930891891",
        appId: "1:113930891891:web:88a3cb1a24e25b06017006"
    })
} else {
    firebase.app(); // if already initialized, use that one
}

const messaging = firebase.messaging();