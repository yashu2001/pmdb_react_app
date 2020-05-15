import React from 'react'
import classes from './SideBar.module.css'
export default function (props) {
    if(props.status){
        var classlist=[classes.sidebar,classes.open]
    }
    return (
        <div className={classlist ?[classes.sidebar,classes.open].join(" ") : classes.sidebar}>
            <div className={classes.closebtn}onClick={()=>props.setstatus(!props.status)}>x</div>
            <div className={classes.sidebarheader}>
                PMDB
            </div>
            <hr></hr>
            <ul className={classes.SideList}>
                { props.loggedIn ? [
                <li key="Movies" onClick={()=>{props.setstatus(!props.status)}}>Movies</li>,
                <li key="Post" onClick={()=>{props.setstatus(!props.status)}}>Post Review</li>,
                <li key="About" onClick={()=>{props.setstatus(!props.status)}}>About</li>,
                <li key="Logout" onClick={()=>props.clearstate()}>Logout</li>]
                :[<li key="About" onClick={()=>{props.setstatus(!props.status)}}>About</li>,
                <li key="Login" onClick={()=>props.auth()}>Login</li>   
                ]}
            </ul>
        </div>
    )
}
