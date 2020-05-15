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
            {tab==='Login'?<Login></Login>:
            <Signup setmodal={props.setmodal}></Signup>}
        </div>
    )
}
