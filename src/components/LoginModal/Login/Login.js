import React, { Component } from 'react'
import classes from './Login.module.css'
export class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            form:{
                username:'',
                password:''
            }
        }
    }
    onchange=(e)=>{
        const field=e.target.id
        const value=e.target.value
        const frm=this.state.form
        frm[field]=value
        this.setState({form:frm})       
    }
    render() {
        return (
            <div className={classes.login}>
            <form>
                <div className={classes.formgroup}>
                    <input type="text" placeholder="Username/Email" id="username" onChange={this.onchange} value={this.state.form.username}  className={classes.input} ></input>
                </div>
                <div className={classes.formgroup}>
                </div>
                <div className={classes.formgroup}>
                    <input type="password" placeholder="password" id="password" value={this.state.form.password} onChange={this.onchange} className={classes.input} ></input>
                </div>
                <div className={classes.formgroup}>
                    <input type="submit"></input>
                </div>
            </form>
        </div>
        )
    }
}

export default Login
