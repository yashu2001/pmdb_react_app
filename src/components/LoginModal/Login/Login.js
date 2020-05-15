import React, { Component, Fragment } from 'react'
import classes from './Login.module.css'
import axios from 'axios'
export class Login extends Component {
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
    onchange=(e)=>{
        const field=e.target.id
        const value=e.target.value
        const frm=this.state.form
        frm[field]=value
        this.setState({form:frm})       
    }
    login=(e)=>{
        e.preventDefault()
        let body={
            username:this.state.form.username,
            password:this.state.form.password
        }
        axios.post('https://pmdb-api.herokuapp.com/api/auth/login',body)
              .then(res=>{
                console.log(res)
                this.props.setUser(this.state.form.username)
                this.props.setLoggedin(true)
                this.props.setToken(res.data.token)
                this.props.setmodal(false)
              })
              .catch(err=>{
                  console.log(err)
                  this.setState({error:true})
                  setTimeout(()=>this.setState({error:false}),3000)
              })
    }
    render() {
        return (
            <Fragment>
                {this.state.error?<p className={classes.errmsg}>Invalid username/password</p>:''}
            <div className={classes.login}>
            <form onSubmit={this.login}>
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
        </Fragment>
        )
    }
}

export default Login
