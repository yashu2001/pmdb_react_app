// Core react imports
import React, { Component, Fragment } from 'react'
// CSS imports
import classes from '../Login/Login.module.css'
// Utility imports
import axios from 'axios'
// The main class component which is used in layouts
export class Signup extends Component {
    // Constructor
    constructor(props){
        super(props)
        this.state={
            form:{
                username:'',
                password:'',
                confpassword:''
            },
            message:null,
            msgtype:null
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
    // Signup handler
    signup=(e)=>{
        e.preventDefault()
        // Array of error messages to be displayed if any
        let message=[]
        let err=false
        // Check for matching passwords
        if(this.state.form.confpassword!==this.state.form.password){
            message.push('Please ensure that both the passwords match')
            err=true
        }
        // Check for password length
        if(this.state.form.password.length<6){
            message.push(' Please use a password longer than 6 characters')
            err=true
        }
        // setting error message state
        if(err){
            this.setState({message:message})
            setTimeout(()=>this.setState({message:null,msgtype:null}),3000)
        }
        // Proceeds to api call in case of no errors
        else{
        axios.post('https://pmdb-api.herokuapp.com/api/auth/signup',{
            username:this.state.form.username,
            password:this.state.form.password
        }).then((res)=>
        {   
            if(res.status===200)
            {
                // Handling success in this block
                this.setState({message:["Successfully Created"],msgtype:false})    
                setTimeout(()=>
                {
                    this.setState({message:null,msgtype:null})
                    this.props.settab('Login')
                },
                3000
                )
            }
            else
            {
                // Handling failure in this block
                this.setState({message:"an error occured",msgtype:true})
            }
        })
        .catch(err=>{
            // handling critical errors
            if(err.message.split(' ')[err.message.split(' ').length-1]==='400')
                {
                    this.setState({message:["This user name already exists"],msgtype:true})
                    setTimeout(()=>this.setState({message:null,msgtype:null}),5000)
                }
            else
                {
                    // Handling internal server errors in this block
                    this.setState({message:"an error occured",msgtype:true})
                }    
            })
        }
    }
    // This returns JSX for the messages to be shown
    messageList=(msgtype)=>{
        return this.state.message.map((message,ind)=><p className={msgtype?classes.errmsg:classes.sumsg} key={ind}>{message}</p>)
    }
    render() {
        return (
            <Fragment>
                {/* JSX for messages */}
                {
                    this.state.message===null?
                    ''
                    :this.messageList(this.state.msgtype)
                }
                {/* JSX for form */}
                <div 
                className={classes.login}>
                    <br />
                    <form 
                    onSubmit={this.signup}>
                        <div 
                        className={classes.formgroup}>
                            <input 
                            type="text" 
                            placeholder="Username/Email" 
                            id="username" onChange={this.onchange} 
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
                            type="password" 
                            placeholder="confirm password" 
                            id="confpassword" 
                            value={this.state.form.confpassword} 
                            onChange={this.onchange} 
                            className={classes.input} >
                            </input>
                        </div>
                        <div 
                        className={classes.formgroup}>
                            <button
                            className={classes.submit}>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
        </Fragment>
        )
    }
}

export default Signup
