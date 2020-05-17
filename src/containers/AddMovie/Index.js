// Core react imports
import React, { Component } from 'react'
// css imports
import classes from './AddMovie.module.css'
// Utility imports
import axios from 'axios'
// The main functional component which is imported inside layout
export class Index extends Component {
    constructor(props){
        super(props)
        this.state={
            form:{
                name:'',
                rating:'',
                year:'',
                directedBy:'',
                poster:'',
                plot:'',
                cast:'',
                genre:''
            },
            error:false,
            messages:[]
        }
    }
    onchange=(e)=>{
        const field=e.target.id
        const value=e.target.value
        const form=this.state.form
        form[field]=value
        this.setState({form:form})
    }
    submit= async (e)=>{
        e.preventDefault()
        const res=await this.validate(this.state.form)
        if(!res){
            return
        }
        const body={}
        for (var key in this.state.form){
            if(key==='year' || key==='rating'){
                body[key]=Number(this.state.form[key])
            }
            else{
            body[key]=this.state.form[key]
            }
        }
        const header={
            'Content-Type':'application/json',
            'x-auth-token':this.props.token
        }
        axios.post('https://pmdb-api.herokuapp.com/api/movies',body,{headers:header})
              .then(res=>{
                  console.log(res)
                  if(res.status===200){
                      this.props.history.push('/')
                  }
                  else{
                      this.setState({error:true})
                      setTimeout(this.setState({error:false,messages:[]}),3000)
                  }
              })
              .catch(err=>{
                  const msg=this.state.messages
                  msg.push(err.response.data.error)
                  this.setState({error:true,messages:msg})
                  setTimeout(()=>this.setState({error:false,messages:[]}),3000)
              })
    }
    validate=async (form)=>{
        if(
            form['name'].length===0 
            || String(form['rating']).length===0
            ||String(form['year']).length===0
            ||form['directedBy'].length===0
            ||form['poster'].length===0
            ||form['cast'].length===0
            ||form['genre'].length===0
            ||form['plot'].length===0
           )
           {
                await this.setState({error:true,messages:['Please make sure you fill all fields']})
               return false;
           }
           return true
    }
    getmessages=()=>{
        return this.state.messages.map(message=><p key={message} className={classes.error}>{message}</p>)
    }
    render() {
        return (
            <div>
            {
                this.state.error?
                this.state.messages.length===0?
                <p 
                className={classes.error}>
                    An error occured please try again later!
                </p>
                :this.getmessages()
                :''
            }
            {
            this.props.loggedIn?
            <form 
            onSubmit={this.submit}
            className={classes.form}>
                {/* name */}
                <div 
                className={classes.formgroup}>
                    <label 
                    htmlFor="name" 
                    className={classes.label}>
                        Movie Name
                    </label>
                    <input 
                    type="text" 
                    id="name" 
                    value={this.state.form.name} 
                    onChange={this.onchange}
                    className={classes.input}
                    required>
                    
                    </input>
                </div>
                {/* rating */}
                <div 
                className={classes.formgroup}>
                    <label 
                    htmlFor="rating" 
                    className={classes.label}>
                        Rating (0-10)
                    </label>
                    <input 
                    min={0}
                    max={10}
                    type="number" 
                    id="rating" 
                    value={this.state.form.rating} 
                    onChange={this.onchange}
                    className={classes.input}
                    required>
                    
                    </input>
                </div>
                {/* year */}
                <div 
                className={classes.formgroup}>
                    <label 
                    htmlFor="year" 
                    className={classes.label}>
                        Year of Release
                    </label>
                    <input 
                    type="number"
                    min={1971}
                    max={new Date().getFullYear()} 
                    id="year" 
                    value={this.state.form.year} 
                    onChange={this.onchange}
                    className={classes.input}
                    required>
                    
                    </input>
                </div>
                {/* directedBy */}
                <div 
                className={classes.formgroup}>
                    <label 
                    htmlFor="directedBy" 
                    className={classes.label}>
                        Directed By
                    </label>
                    <input 
                    type="text" 
                    id="directedBy" 
                    value={this.state.form.director} 
                    onChange={this.onchange}
                    className={classes.input}
                    required>
                    
                    </input>
                </div>
                {/* Poster Url */}
                <div 
                className={classes.formgroup}>
                    <label 
                    htmlFor="poster" 
                    className={classes.label}>
                        Poster Image URL
                    </label>
                    <input 
                    type="text" 
                    id="poster" 
                    value={this.state.form.poster} 
                    onChange={this.onchange}
                    className={classes.input}
                    required>
                    </input>
                </div>
                {/* Cast */}
                <div 
                className={classes.formgroup}>
                    <label 
                    htmlFor="cast" 
                    className={classes.label}>
                        Cast
                    </label>
                    <textarea 
                    id="cast" 
                    value={this.state.form.cast} 
                    onChange={this.onchange}
                    className={classes.text}
                    required>
                    </textarea>
                </div>
                {/* Genre */}
                <div 
                className={classes.formgroup}>
                    <label 
                    htmlFor="genre" 
                    className={classes.label}>
                        Genre
                    </label>
                    <textarea 
                    id="genre" 
                    value={this.state.form.genre} 
                    onChange={this.onchange}
                    className={classes.text}
                    required>
                    </textarea>
                </div>
                {/* plot */}
                <div 
                className={classes.formgroup}>
                    <label 
                    htmlFor="plot" 
                    className={classes.label}>
                        Plot
                    </label>
                    <textarea 
                    id="plot"
                    minLength={50} 
                    value={this.state.form.plot} 
                    onChange={this.onchange}
                    className={classes.text}
                    required> 
                    </textarea>
                </div>
                <button className={classes.submit}>Submit</button>
            </form>
            :<p className={classes.error}>YOU ARE LOGGED OUT PLEASE LOGIN TO CONTINUE</p>
            }   
        </div>
        )
    }
}

export default Index
