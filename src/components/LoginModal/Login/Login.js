// Core react imports
import React, { Component, Fragment } from 'react'
// CSS import
import classes from './Login.module.css'
// Utility import
import axios from 'axios'
// The main class component that is used in layout
export class Login extends Component {
    // Constructor
    constructor(props){
        super(props)
        this.state={
            form:{
                username:'',
                password:''
            },
            error:false
        }
    }
    // On change handler for form fields
    onchange=(e)=>{
        const field=e.target.id
        const value=e.target.value
        const frm=this.state.form
        frm[field]=value
        this.setState({form:frm})       
    }
    // login handler 
    login=(e)=>{
        e.preventDefault()
        // The body for the post request
        let body={
            username:this.state.form.username,
            password:this.state.form.password
        }
        axios.post('https://pmdb-api.herokuapp.com/api/auth/login',body)
              .then(res=>{
                // handling success
                this.props.setUser(this.state.form.username)
                localStorage.setItem('username',this.state.form.username)
                this.props.setLoggedin(true)
                localStorage.setItem('loggedin',true)
                this.props.setToken(res.data.token)
                localStorage.setItem('token',res.data.token)
                this.props.setmodal(false)
              })
              .catch(err=>{
                  // handling failure   
                  this.setState({error:true})
                  setTimeout(()=>this.setState({error:false}),3000)
              })
    }
    render() {
        return (
            <Fragment>
                {/* JSX for error message */}
                {
                    this.state.error?
                    <p className={classes.errmsg}>Invalid username/password</p>
                    :''
                }
            {/* JSX for form */}
            <div 
            className={classes.login}>
                <form 
                onSubmit={this.login}>
                    <div 
                    className={classes.formgroup}>
                        <input 
                        type="text" 
                        placeholder="Username/Email" 
                        id="username" 
                        onChange={this.onchange} 
                        value={this.state.form.username}  
                        className={classes.input} >
                        </input>
                    </div>
                    <div 
                    className={classes.formgroup}>
                        <input 
                        type="password" 
                        placeholder="password" 
                        id="password" 
                        value={this.state.form.password} 
                        onChange={this.onchange} 
                        className={classes.input} >
                        </input>
                    </div>
                    <div 
                    className={classes.formgroup}>
                        <input 
                        className={classes.submit}
                        type="submit">
                        </input>
                    </div>
                </form>
        </div>
        </Fragment>
        )
    }
}

export default Login
