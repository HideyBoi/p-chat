(this["webpackJsonpreact-chat"]=this["webpackJsonpreact-chat"]||[]).push([[0],{143:function(e,t,a){},144:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(47),c=a.n(o),l=(a(58),a(4)),i=(a(59),a(1)),s=a.n(i),m=(a(12),a(20)),u="_start";s.a.apps.length?s.a.app():s.a.initializeApp({apiKey:"AIzaSyBpWmtGTqluiA1gC0CEFHrQcZncNRYtjbg",authDomain:"private-school-chat.firebaseapp.com",databaseURL:"https://private-school-chat.firebaseio.com",projectId:"private-school-chat",storageBucket:"private-school-chat.appspot.com",messagingSenderId:"113930891891",appId:"1:113930891891:web:88a3cb1a24e25b06017006"});var p=s.a.firestore();function d(){var e=p.collection("rooms").orderBy("createdAt"),t=Object(m.a)(e,{idField:"id"}),a=Object(l.a)(t,1)[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"roomList"},r.a.createElement("div",{className:"overlaytex"},"Select a room"),a&&a.map((function(e){return r.a.createElement(h,{key:e.id,message:e})}))))}function h(e){var t=e.message,a=t.roomName,n=t.roomSysName;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){u=n,a,window.location.replace("/p-chat/?room="+n)}},a)))}var g=function(){var e=new URLSearchParams(window.location.search).get("room");return console.log(e),u=e,r.a.createElement("div",{id:"overlay"},r.a.createElement("div",{id:"overlayText"},r.a.createElement(d,null)))};a(23);s.a.apps.length?s.a.app():s.a.initializeApp({apiKey:"AIzaSyBpWmtGTqluiA1gC0CEFHrQcZncNRYtjbg",authDomain:"private-school-chat.firebaseapp.com",databaseURL:"https://private-school-chat.firebaseio.com",projectId:"private-school-chat",storageBucket:"private-school-chat.appspot.com",messagingSenderId:"113930891891",appId:"1:113930891891:web:88a3cb1a24e25b06017006"});var f=s.a.auth();function v(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"sign-in",onClick:function(){var e=new s.a.auth.GoogleAuthProvider;f.signInWithPopup(e)}},"Sign In"),r.a.createElement("div",{className:"opening-text"},"If you cannot sign in, please check your pop-up blocker and internet connection."))}function E(){return f.currentUser&&r.a.createElement("button",{className:"sign-out",onClick:function(){f.signOut()}},"Sign Out")}var b=a(31),y=a.n(b),I=a(48);a(145);s.a.apps.length?s.a.app():s.a.initializeApp({apiKey:"AIzaSyBpWmtGTqluiA1gC0CEFHrQcZncNRYtjbg",authDomain:"private-school-chat.firebaseapp.com",databaseURL:"https://private-school-chat.firebaseio.com",projectId:"private-school-chat",storageBucket:"private-school-chat.appspot.com",messagingSenderId:"113930891891",appId:"1:113930891891:web:88a3cb1a24e25b06017006"});var w="";var S=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],o=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"imgurUpload"},r.a.createElement("div",{id:"imgurUploadInner"},r.a.createElement("h2",null,"Upload image"),r.a.createElement("form",null,r.a.createElement("input",{type:"file",className:"input-image",onChange:function(){var e=document.getElementsByClassName("input-image")[0].files[0],t=s.a.storage().ref();console.log(e.type);var a=Math.floor(69696969*Math.random()+1);o("Uploading!"),t.child("images/"+a).put(e).then((function(e){e.ref.getDownloadURL().then((function(e){w=e,o("File uploaded! The next message you send will have this attachment, refresh now to cancel!")}))}))}})),r.a.createElement("p",null,a),r.a.createElement("button",{onClick:function(){document.getElementById("imgurUpload").style.display="none"}},"Close"))),r.a.createElement("button",{onClick:function(){document.getElementById("imgurUpload").style.display="block"}},r.a.createElement("span",{role:"img","aria-label":"Attatch file"},"\u2b06")))},N=a(49),j=a.n(N),C=[],U=[],B=0,A=[];s.a.apps.length?s.a.app():s.a.initializeApp({apiKey:"AIzaSyBpWmtGTqluiA1gC0CEFHrQcZncNRYtjbg",authDomain:"private-school-chat.firebaseapp.com",databaseURL:"https://private-school-chat.firebaseio.com",projectId:"private-school-chat",storageBucket:"private-school-chat.appspot.com",messagingSenderId:"113930891891",appId:"1:113930891891:web:88a3cb1a24e25b06017006"});var k=s.a.auth();var R=function(e){var t,a=Object(n.useRef)(),o=e.message,c=o.text,i=o.uid,s=o.photoURL,m=o.createdAt,u=o.name,p=o.attatchment,d=i===k.currentUser.uid?"sent":"received",h=Object(n.useState)(!1),g=Object(l.a)(h,2),f=g[0],v=g[1],E=B;C.push(d),U.push(m),A.push(i),B+=1,"received"===d&&(f||(Q.play(),v(!0),Y||(W+=1,document.title="("+W+") Planner",document.getElementById("favicon").href="/p-chat/favicon-unread.ico"))),Object(n.useEffect)((function(){if(!(E<1||"Sending..."===b)){if(void 0!==m&&null!==U[E-1]&&void 0!==U[E-1])var e=Math.floor((m.toDate()-U[E-1].toDate())/1e3/60);if(d===C[E-1]&&A[E-1]===i&&e<1){var t=document.getElementById("timestamp"+(E-1));try{t.style.display="none",console.log("Changed")}catch(a){}}}})),void 0!==u?u!==k.currentUser.displayName?t=u+" \u2022 ":(t="You \u2022 ","Ciara Lee"===u&&(t="You, aka the cutest person ever \u2022 ")):t="Name missing \u2022 ";var b="Sending...",y="";if(null!=m){var I=(b=new Date(m.toDate())).toTimeString().split(":"),w=" ";if(I[0]>=13){var S=parseInt(I[0]);S-=12,I[0]=S.toString(),w="PM"}else w="AM";b="".concat(b.toDateString(),"  ").concat(I[0],":").concat(I[1]," ").concat(w)}return y="sent"===d?"tssent":"tsreceived",r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"message ".concat(d)},r.a.createElement("img",{alt:"Profile",src:s||"https://hideyboi.github.io/p-chat/missingProfilePicture.png"}),"Sending..."===b?r.a.createElement("img",{alt:"sending",src:"/p-chat/loading.gif"}):r.a.createElement(r.a.Fragment,null,c?r.a.createElement("div",{className:"MessageContainer"},r.a.createElement("div",{className:"messageText"},r.a.createElement(j.a,null,c))):r.a.createElement("span",null))),p?r.a.createElement("div",{className:"attatchmentContainer "+d},r.a.createElement("a",{className:"attatchment",href:p,target:"_empty",alt:"Open Attatchment in new tab"},r.a.createElement("img",{alt:"attatchment",src:p}))):r.a.createElement("span",null),r.a.createElement("div",{id:"timestamp"+E,className:"timestamp ".concat(y)},t,b),r.a.createElement("span",{ref:a}))};s.a.apps.length?s.a.app():s.a.initializeApp({apiKey:"AIzaSyBpWmtGTqluiA1gC0CEFHrQcZncNRYtjbg",authDomain:"private-school-chat.firebaseapp.com",databaseURL:"https://private-school-chat.firebaseio.com",projectId:"private-school-chat",storageBucket:"private-school-chat.appspot.com",messagingSenderId:"113930891891",appId:"1:113930891891:web:88a3cb1a24e25b06017006"});var L=s.a.auth(),O=s.a.firestore();var F=function(){var e=new URLSearchParams(window.location.search).get("room");console.log(e),""!==e&&null!==e||(e="_start");var t=Object(n.useRef)(),a=O.collection(e),o=a.orderBy("createdAt").limitToLast(50),c=Object(m.a)(o,{idField:"id"}),i=Object(l.a)(c,1)[0],u=Object(n.useState)(0),p=Object(l.a)(u,2),d=(p[0],p[1]),h=function(){var e=Object(I.a)(y.a.mark((function e(t){var n,r,o,c,l,i;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(t),t.preventDefault(),n=L.currentUser,r=n.uid,o=n.photoURL,c=L.currentUser.displayName,l=w,i=document.getElementById("MSGINPUT").value,document.getElementById("MSGINPUT").value="",""!==i){e.next=9;break}return e.abrupt("return");case 9:return w="",e.next=12,a.add({text:i,createdAt:s.a.firestore.FieldValue.serverTimestamp(),uid:r,photoURL:o,name:c,attatchment:l});case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){t.current.scrollIntoView();document.addEventListener("keydown",(function(e){"Enter"===e.code&&e.shiftKey&&(console.log("Enter key was pressed. Run your function."),e.preventDefault(),h(e))}))}),[i]),r.a.createElement(r.a.Fragment,null,r.a.createElement("main",null,r.a.createElement(g,{onUpdate:function(e,t){d(e)}}),i&&i.map((function(e){return r.a.createElement(R,{key:e.id,message:e})})),r.a.createElement("div",{className:"messageBar"},r.a.createElement("form",{onInputCapture:function(){t.current.scrollIntoView()}},r.a.createElement("textarea",{id:"MSGINPUT",onSubmit:h,placeholder:"Shift + enter or button to message\nDouble enter for new line",autoComplete:"none"}),r.a.createElement("button",{onClick:h,type:"submit"},r.a.createElement("span",{role:"img","aria-label":"Send Message"},"\ud83d\udce4"))),r.a.createElement(S,null))),r.a.createElement("span",{ref:t}))},x=a(50),T=a(51),D=a.n(T),M=a(52),P=a.n(M);a(143);var z=function(e){var t=e.userName;return"Ciara Lee"===t&&(t="Ciara Lee, the cutest person in the whole world!"),r.a.createElement("div",{id:"startRoom"},r.a.createElement("h1",null,"Welcome!"),r.a.createElement("p",null,"Signed in as ",t),r.a.createElement("h2",null,"Notice"),r.a.createElement("p",null,"By using this application, you grant it permission to use cookies.",r.a.createElement("br",null),"You can be banned from this application for any reason and might not be given and explaination."))};s.a.apps.length?s.a.app():s.a.initializeApp({apiKey:"AIzaSyBpWmtGTqluiA1gC0CEFHrQcZncNRYtjbg",authDomain:"private-school-chat.firebaseapp.com",databaseURL:"https://private-school-chat.firebaseio.com",projectId:"private-school-chat",storageBucket:"private-school-chat.appspot.com",messagingSenderId:"113930891891",appId:"1:113930891891:web:88a3cb1a24e25b06017006"});var G=s.a.auth(),Y=!0,W=0,K=function(){console.log("Tab is in focus"),Y=!0,W=0,document.getElementById("favicon").href="/p-chat/favicon.ico",document.title="Planner"},q=function(){console.log("Tab is blurred"),Y=!1},H=function(){return Object(n.useEffect)((function(){return window.addEventListener("focus",K),window.addEventListener("blur",q),K(),function(){window.removeEventListener("focus",K),window.removeEventListener("blur",q)}}),[]),r.a.createElement(r.a.Fragment,null)},Q=new D.a(P.a,{volume:1,throttleMs:100});function Z(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(z,{userName:G.currentUser.displayName}),r.a.createElement(F,null))}var V=function(){var e=Object(x.a)(G),t=Object(l.a)(e,1)[0],a=Object(n.useState)("Rooms"),o=Object(l.a)(a,2),c=o[0],i=o[1];function s(e,t){console.log(e,t)}var m=new URLSearchParams(window.location.search).get("room");return console.log(m),r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("h1",null,"Chat"),r.a.createElement("div",{className:"buttoncontainer"},t?r.a.createElement("button",{onClick:function(){i("Rooms"),function(e){var t=e.onUpdate;"flex"!==document.getElementById("overlay").style&&(document.getElementById("overlay").style.display="flex"),"flex"===document.getElementById("overlay").style&&(document.getElementById("overlay").style.display="none",t(Math.floor(9567444*Math.random())+1,u))}(s)},className:"sign-out"},c):null,r.a.createElement(E,null))),r.a.createElement("section",null,t?r.a.createElement(r.a.Fragment,null,null===m?r.a.createElement(Z,null):r.a.createElement(F,null)):r.a.createElement(v,null)),r.a.createElement(H,null))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(V,null)),document.getElementById("root"))},52:function(e,t,a){e.exports=a.p+"static/media/noti.bdc711f4.wav"},53:function(e,t,a){e.exports=a(144)},58:function(e,t,a){},59:function(e,t,a){}},[[53,1,2]]]);
//# sourceMappingURL=main.b5271fd6.chunk.js.map