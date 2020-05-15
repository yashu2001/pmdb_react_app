import React , { useState } from 'react'
import Login from './Login/Login'
import Signup from './Signup/Signup'
import classes from './LoginModal.module.css'
export default function Index(props) {
    const [tab,settab]=useState('Login')
    return (
        <div>
            <button className={tab==='Login'?classes.active:classes.regular} onClick={()=>settab('Login')}>Login</button>
            <button className={tab==='Signup'?classes.active:classes.regular} onClick={()=>settab('Signup')}>Signup</button>
            {tab==='Login'?<Login setmodal={props.setmodal} setLoggedin={props.setLoggedin} setToken={props.setToken} setUser={props.setUser}></Login>:
            <Signup settab={settab}></Signup>}
        </div>
    )
}
