(this["webpackJsonpreact-chat"]=this["webpackJsonpreact-chat"]||[]).push([[0],{145:function(e,t,a){},146:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(47),c=a.n(r),o=(a(58),a(30)),i=a.n(o),s=a(48),m=a(13),u=(a(60),a(49)),d=a.n(u),p=a(8),g=a.n(p),E=(a(139),a(143),a(147),a(148),a(149),a(50)),f=a(31),h=a(51),v=a.n(h),b=a(52),y=a.n(b);a(145);var N=function(e){var t=e.userName;return"Ciara Lee"===t&&(t="Ciara Lee, the cutest person in the whole world!"),l.a.createElement("div",{id:"startRoom"},l.a.createElement("h1",null,"Welcome!"),l.a.createElement("p",null,"Signed in as ",t),l.a.createElement("h2",null,"Notice"),l.a.createElement("p",null,"By using this application, you grant it permission to use cookies.",l.a.createElement("br",null),"You can be banned from this application for any reason and might not be given and explaination."))};g.a.apps.length?g.a.app():g.a.initializeApp({apiKey:"AIzaSyBpWmtGTqluiA1gC0CEFHrQcZncNRYtjbg",authDomain:"private-school-chat.firebaseapp.com",databaseURL:"https://private-school-chat.firebaseio.com",projectId:"private-school-chat",storageBucket:"private-school-chat.appspot.com",messagingSenderId:"113930891891",appId:"1:113930891891:web:88a3cb1a24e25b06017006"});var w=g.a.auth(),I=g.a.firestore(),C="_start",O="START",S=!0,j=0,U="",k=function(){console.log("Tab is in focus"),S=!0,j=0,document.getElementById("favicon").href="/p-chat/favicon.ico",document.title="Planner"},B=function(){console.log("Tab is blurred"),S=!1},M=function(){return Object(n.useEffect)((function(){return window.addEventListener("focus",k),window.addEventListener("blur",B),k(),function(){window.removeEventListener("focus",k),window.removeEventListener("blur",B)}}),[]),l.a.createElement(l.a.Fragment,null)},x=new v.a(y.a,{volume:1,throttleMs:100});function F(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(N,{userName:w.currentUser.displayName}),l.a.createElement(G,null))}function L(){return l.a.createElement("div",{id:"overlay"},l.a.createElement("div",{id:"overlayText"},l.a.createElement(T,null)))}function T(){var e=I.collection("rooms").orderBy("createdAt"),t=Object(f.a)(e,{idField:"id"}),a=Object(m.a)(t,1)[0];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"roomList"},l.a.createElement("div",{className:"roomtex"},"Close the room list by hitting the room button to apply changes."),a&&a.map((function(e){return l.a.createElement(A,{key:e.id,message:e})}))))}function A(e){var t=e.message,a=t.roomName,n=t.roomSysName;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("button",{onClick:function(){C=n,O=a}},a)))}function R(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{className:"sign-in",onClick:function(){var e=new g.a.auth.GoogleAuthProvider;w.signInWithPopup(e)}},"Sign In"),l.a.createElement("div",{className:"opening-text"},"If you cannot sign in, please check your pop-up blocker and internet connection."))}function P(){return w.currentUser&&l.a.createElement("button",{className:"sign-out",onClick:D},"Sign Out")}function D(){w.signOut()}function G(){var e=Object(n.useRef)(),t=I.collection(C),a=t.orderBy("createdAt").limitToLast(50),r=Object(f.a)(a,{idField:"id"}),c=Object(m.a)(r,1)[0];W=[],V=[],z=[],_=0;var o=function(){var e=Object(s.a)(i.a.mark((function e(a){var n,l,r,c,o,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),n=w.currentUser,l=n.uid,r=n.photoURL,c=w.currentUser.displayName,o=U,s=document.getElementById("MSGINPUT").value,document.getElementById("MSGINPUT").value="",""!==s){e.next=8;break}return e.abrupt("return");case 8:return W=[],V=[],z=[],_=0,U="",e.next=15,t.add({text:s,createdAt:g.a.firestore.FieldValue.serverTimestamp(),uid:l,photoURL:r,name:c,attatchment:o});case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){(e.current.scrollIntoView(),S)||(j+=1,document.title="("+j+") Planner",document.getElementById("favicon").href="/p-chat/favicon-unread.ico")}),[c]),l.a.createElement(l.a.Fragment,null,l.a.createElement("main",null,l.a.createElement(L,null),c&&c.map((function(e){return l.a.createElement(J,{key:e.id,message:e})})),l.a.createElement("div",{className:"messageBar"},l.a.createElement("form",{onInputCapture:function(){e.current.scrollIntoView()}},l.a.createElement("input",{id:"MSGINPUT",onSubmit:o,placeholder:"Message "+O,autoComplete:"none"}),l.a.createElement("button",{onClick:o,type:"submit"},l.a.createElement("span",{role:"img","aria-label":"Send Message"},"\ud83d\udce4"))),l.a.createElement(Y,null))),l.a.createElement("span",{ref:e}))}function Y(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],r=t[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{id:"imgurUpload"},l.a.createElement("div",{id:"imgurUploadInner"},l.a.createElement("h2",null,"Upload image"),l.a.createElement("form",null,l.a.createElement("input",{type:"file",className:"input-image",onChange:function(){var e=document.getElementsByClassName("input-image")[0].files[0],t=g.a.storage().ref();console.log(e.type);var a=Math.floor(69696969*Math.random()+1);r("Uploading!"),t.child("images/"+a).put(e).then((function(e){e.ref.getDownloadURL().then((function(e){U=e,r("File uploaded! The next message you send will have this attachment, refresh now to cancel!")}))}))}})),l.a.createElement("p",null,a),l.a.createElement("button",{onClick:function(){document.getElementById("imgurUpload").style.display="none"}},"Close"))),l.a.createElement("button",{onClick:function(){document.getElementById("imgurUpload").style.display="block"}},l.a.createElement("span",{role:"img","aria-label":"Attatch file"},"\u2b06")))}var V=[],W=[],_=0,z=[];function J(e){var t,a=Object(n.useRef)(),r=e.message,c=r.text,o=r.uid,i=r.photoURL,s=r.createdAt,u=r.name,p=r.attatchment,g=o===w.currentUser.uid?"sent":"received",E=Object(n.useState)(!1),f=Object(m.a)(E,2),h=f[0],v=f[1],b=_;V.push(g),W.push(s),z.push(o),_+=1,console.log(V),console.log(W),console.log(z),console.log(b),Object(n.useEffect)((function(){if("received"===g&&(h||(x.play(),v(!0))),!(b<1||"Sending..."===y)){if(void 0!==s&&null!==W[b-2]&&void 0!==W[b-2])var e=Math.floor((s.toDate()-W[b-2].toDate())/1e3/60);if(g===V[b-2]&&z[b-2]===o&&e<2){var t=document.getElementById("timestamp"+(b-2));try{t.style.display="none",console.log("Changed")}catch(a){}}}})),void 0!==u?u!==w.currentUser.displayName?t=u+" \u2022 ":(t="You \u2022 ","Ciara Lee"===u&&(t="You, aka the cutest person ever \u2022 ")):t="Name missing \u2022 ";var y="Sending...",N="";if(null!=s){var I=(y=new Date(s.toDate())).toTimeString().split(":"),C=" ";if(I[0]>=13){var O=parseInt(I[0]);O-=12,I[0]=O.toString(),C="PM"}else C="AM";y="".concat(y.toDateString(),"  ").concat(I[0],":").concat(I[1]," ").concat(C)}return N="sent"===g?"tssent":"tsreceived",l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"message ".concat(g)},l.a.createElement("img",{alt:"Profile",src:i||"https://hideyboi.github.io/p-chat/missingProfilePicture.png"}),"Sending..."===y?l.a.createElement("img",{alt:"sending",src:"/p-chat/loading.gif"}):l.a.createElement(l.a.Fragment,null,c?l.a.createElement("div",{className:"MessageContainer"},l.a.createElement("div",{className:"messageText"},l.a.createElement(d.a,null,c))):l.a.createElement("span",null))),p?l.a.createElement("div",{className:"attatchmentContainer "+g},l.a.createElement("a",{className:"attatchment",href:p,target:"_empty",alt:"Open Attatchment in new tab"},l.a.createElement("img",{alt:"attatchment",src:p}))):l.a.createElement("span",null),l.a.createElement("div",{id:"timestamp"+b,className:"timestamp ".concat(N)},t,y),l.a.createElement("span",{ref:a}))}var q=function(){var e=Object(E.a)(w),t=Object(m.a)(e,1)[0],a=Object(n.useState)(1),r=Object(m.a)(a,2),c=r[0],o=r[1],i=Object(n.useState)("Rooms"),s=Object(m.a)(i,2),u=s[0],d=s[1];return l.a.createElement("div",{className:"App"},l.a.createElement("header",null,l.a.createElement("h1",null,"Chat"),l.a.createElement("div",{className:"buttoncontainer"},t?l.a.createElement("button",{onClick:function(){var e=Math.floor(9567444*Math.random())+1;d("Rooms"===u?"Close Menu":"Rooms"),console.log("Current: "+c),o(e),console.log("New: "+c),"flex"!==document.getElementById("overlay").style.display?document.getElementById("overlay").style.display="flex":document.getElementById("overlay").style.display="none"},className:"sign-out"},u):null,l.a.createElement(P,null))),l.a.createElement("section",null,t?l.a.createElement(l.a.Fragment,null,"_start"===C?l.a.createElement(F,null):l.a.createElement(G,null)):l.a.createElement(R,null)),l.a.createElement(M,null))};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(q,null)),document.getElementById("root"))},52:function(e,t,a){e.exports=a.p+"static/media/noti.bdc711f4.wav"},53:function(e,t,a){e.exports=a(146)},58:function(e,t,a){},60:function(e,t,a){}},[[53,1,2]]]);
//# sourceMappingURL=main.18ca6842.chunk.js.map