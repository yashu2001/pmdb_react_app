// Core react imports
import React , { useState } from 'react'
// Importing sub components
import Login from './Login/Login'
import Signup from './Signup/Signup'
// Importing CSS
import classes from './LoginModal.module.css'
// The main functional component that is used in the layout
export default function Index(props) {
    const [tab,settab]=useState('Login')
    return (
        <div>
            <button 
            className={tab==='Login'?
            classes.active
            :classes.regular} 
            onClick={()=>settab('Login')}>
                Login
            </button>
            <button 
            className={tab==='Signup'?
            classes.active
            :classes.regular} 
            onClick={()=>settab('Signup')}>
                Signup
            </button>
            {tab==='Login'?
            <Login 
            setmodal={props.setmodal} 
            setLoggedin={props.setLoggedin} 
            setToken={props.setToken} 
            setUser={props.setUser}>
            </Login>:
            <Signup 
            settab={settab}>
            </Signup>}
        </div>
    )
}
