import React from 'react'
import { Link } from 'react-router-dom'
import classes from './SideBar.module.css'
export default function (props) {
    if(props.status){
        var classlist=[classes.sidebar,classes.open]
    }
    return (
        <div className={classlist ?[classes.sidebar,classes.open].join(" ") : classes.sidebar}>
            <div className={classes.closebtn} onClick={()=>props.setstatus(!props.status)}>x</div>
            <div className={classes.sidebarheader}>
                PMDB
            </div>
            <hr></hr>
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
