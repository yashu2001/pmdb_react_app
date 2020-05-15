import React, { Component, Fragment } from 'react'
import classes from '../Login/Login.module.css'
import axios from 'axios'
export class Signup extends Component {
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
    onchange=(e)=>{
        const field=e.target.id
        const value=e.target.value
        const frm=this.state.form
        frm[field]=value
        this.setState({form:frm})       
    }
    signup=(e)=>{
        e.preventDefault()
        let message=[]
        let err=false
        if(this.state.form.confpassword!==this.state.form.password){
            message.push('Please ensure that both the passwords match')
            err=true
        }
        if(this.state.form.password.length<6){
            message.push(' Please use a password longer than 6 characters')
            err=true
        }
        if(err){
            this.setState({message:message})
            setTimeout(()=>this.setState({message:null,msgtype:null}),3000)
        }
        else{
        axios.post('https://pmdb-api.herokuapp.com/api/auth/signup',{
            username:this.state.form.username,
            password:this.state.form.password
        }).then((res)=>
        {
            if(res.status===200)
            {
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
                this.setState({message:"an error occured",msgtype:true})
            }
        })
        .catch(err=>{
                        if(err.message.split(' ')[err.message.split(' ').length-1]==='400')
                        {this.setState({message:["This user name already exists"],msgtype:true})
                         setTimeout(()=>this.setState({message:null,msgtype:null}),5000)
                        }
                    }
            )
        }
    }
    messageList=(msgtype)=>{
        return this.state.message.map((message,ind)=><p className={msgtype?classes.errmsg:classes.sumsg} key={ind}>{message}</p>)
    }
    render() {
        return (
            <Fragment>
            {this.state.message===null?'':this.messageList(this.state.msgtype)}
            <div className={classes.login}>
                <br />
            <form onSubmit={this.signup}>
                <div className={classes.formgroup}>
                    <input type="text" placeholder="Username/Email" id="username" onChange={this.onchange} value={this.state.form.username}  className={classes.input} ></input>
                    </div>
                <div className={classes.formgroup}>
                </div>
                <div className={classes.formgroup}>
                    <input type="password" placeholder="password" id="password" value={this.state.form.password} onChange={this.onchange} className={classes.input} ></input>
                </div>
                <div className={classes.formgroup}>
                    <input type="password" placeholder="confirm password" id="confpassword" value={this.state.form.confpassword} onChange={this.onchange} className={classes.input} ></input>
                </div>
                <div className={classes.formgroup}>
                    <button>Submit</button>
                </div>
            </form>
        </div>
        </Fragment>
        )
    }
}

export default Signup
