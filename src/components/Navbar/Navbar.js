import React  from 'react'
import classes from './Navbar.module.css'
export default function Navbar(props) {
    return (
        <nav>
            <div className={classes.menu} onClick={props.sidenav}>
                <li></li>
                <li></li>
                <li></li>
            </div>
            <div className={classes.Brand}>
                PMDB
            </div>
            <ul className={classes.NavList}>
                { props.loggedIn ? [
                <li key="Movies">Movies</li>,<li key="Post">Post Review</li>,
                <li key="Account">Acccount</li>,
                <li key="about">About</li>,
                <li key="logout" onClick={()=>props.auth()}>Logout</li>].reverse():
                [<li key="Login" onClick={()=>props.auth()}>Login</li>,
                <li key="About" onClick={()=>{props.setstatus(!props.status)}}>About</li>] }
            </ul>
        </nav>
    )
}
