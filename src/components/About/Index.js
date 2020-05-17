// Core react imports
import React from 'react'
// The main functional component imported into layout
export default function Index() {
    return (
        <div>
            <h1>Public movie database</h1>
            <p
            style={{padding:"2vw"}}>
                This is an open to use database for all the movie buffs out there to share reviews about movies.The best part being any one can edit the reviews thus crowdsourcing the management of this project.
                Have some suggestions for the UI feel free to submit pull requests <a href="https://github.com/yashu2001/pmdb_react_app" target="_blank">here</a>
                <br></br>
                Thankyou for visiting this site!
            </p>
        </div>
    )
}
