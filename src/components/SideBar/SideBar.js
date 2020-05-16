// Core react imports
import React from 'react'
import { Link } from 'react-router-dom'
// Css import
import classes from './SideBar.module.css'
// The main functional component that imported inside of Layout
export default function (props) {
    // Checking if the status model is open or close
    if(props.status){
        var classlist=[classes.sidebar,classes.open]
    }
    // JSX returned from the functional component
    return (
        // Initial JSX setup
        <div className={classlist ?[classes.sidebar,classes.open].join(" ") : classes.sidebar}>
            {/* JSX for button that handles sidebar close */}
            <div className={classes.closebtn} onClick={()=>props.setstatus(!props.status)}>x</div>
            {/* JSX for sidebar header */}
            <div className={classes.sidebarheader}>
                PMDB
            </div>
            <hr></hr>
            {/* JSX for the sidebar list */}
            <ul className={classes.SideList}>
                { props.loggedIn ? [
                <li><Link to="/" className={classes.link} onClick={()=>props.setstatus(!props.status)}>Movies</Link></li>,
                <li><Link to="/add" className={classes.link} onClick={()=>props.setstatus(!props.status)}>Post Review</Link></li>,
                <li><Link to="/about" className={classes.link} onClick={()=>props.setstatus(!props.status)}>About</Link></li>,
                <li key="logout" className={classes.link} onClick={()=>props.clearstate()}>Logout</li>].reverse():
                [<li key="Login" onClick={()=>props.auth()}>Login</li>,
                <li><Link to="/about" className={classes.link} onClick={()=>props.setstatus(!props.status)}>About</Link></li>,
                <li><Link to="/" className={classes.link} onClick={()=>props.setstatus(!props.status)}>Movies</Link></li>]    
                }
            </ul>
        </div>
    )
}
