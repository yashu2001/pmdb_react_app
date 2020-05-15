import React from 'react'
import classes from './Login.module.css'

export default function Login() {
    return (
        <div className={classes.login}>
            <form>
                <div className={classes.formgroup}>
                    <input type="text" placeholder="Username/Email" id="username" className={classes.input} ></input>
                </div>
                <div className={classes.formgroup}>
                    <input type="password" placeholder="password" id="password" className={classes.input} ></input>
                </div>
                <div className={classes.formgroup}>
                    <input type="submit" ></input>
                </div>
            </form>
        </div>
    )
}
