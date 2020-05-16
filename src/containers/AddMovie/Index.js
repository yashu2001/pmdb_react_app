import React from 'react'

export default function (props) {
    return (
        <div>
            {
            props.loggedIn?
            <p>You are logged in</p>
            :<p>YOU ARE LOGGEDOUT PLEASE LOGIN TO CONTINUE</p>
            }   
        </div>
    )
}
