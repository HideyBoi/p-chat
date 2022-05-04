import React from "react";
import './Start.css';

function StartScreen (props) {
    var currentName = props.userName;

    if (currentName === "Ciara Lee") {
        currentName = "Ciara Lee, the cutest person in the whole world!"
    }

    return(<div id="startRoom">
        <h1>Welcome!</h1>
        <p>Signed in as {currentName}</p>
        <h2>Notice</h2>
        <p>
            By using this application, you grant it permission to use cookies.<br/>
            You can be banned from this application for any reason and might not be given and explaination.
        </p>
    </div>)
}

export default StartScreen;