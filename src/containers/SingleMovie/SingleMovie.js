// Core react imports
import React, { Component, Fragment } from 'react'
// Utility imports
import axios from 'axios'
// Css imports
import classes from './SingleMovie.module.css'
// Component imports
import Spinner from '../../components/Spinner/Spinner'
// The main class component that is displayed when more is clicked 
export class SingleMovie extends Component {
    // constructor
    constructor(props){
        super(props)
        this.state={
            movie:null,
            error:false,
            disabled:true
        }
    }
    // This is a method that runs only on first rendering of the screen
    componentDidMount(){
        axios.get('https://pmdb-api.herokuapp.com/api/movies/'+this.props.match.params.id)
        .then(res=>this.setState({movie:res.data}))
        .catch(err=>{this.setState({error:true})});
    }
    // This is used to handle changes in input when form is set to editable
    handlechange=(elem)=>{
        let mov=this.state.movie
        mov[elem.id]=elem.value
        this.setState({movie:mov})
    }
    
    
    submit= async (e)=>{
        e.preventDefault()
        const res=await this.validate(this.state.movie)
        if(!res){
            return
        }
        const body={}
        for (var key in this.state.movie){
            if(key==='year' || key==='rating'){
                body[key]=Number(this.state.movie[key])
            }
            else{
            body[key]=this.state.movie[key]
            }
        }
        console.log(this.props.token)
        const header={
            'Content-Type':'application/json',
            'x-auth-token':this.props.token
        }
        axios.put('https://pmdb-api.herokuapp.com/api/movies/'+this.state.movie._id,body,{headers:header})
              .then(res=>{
                  console.log(res)
                  if(res.status===200){
                      this.props.history.push('/')
                  }
                  else{
                      this.setState({error:true})
                  }
              })
              .catch(err=>{
                  console.log(err.response.data)
                  this.setState({error:true})
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
               return false;
           }
           return true
    }



    delete=(e)=>{
        e.preventDefault()
        console.log('deleting')
        const id=this.state.movie._id
        const header={
            'Content-Type':'application/json',
            'x-auth-token':this.props.token
        }
        axios.delete('https://pmdb-api.herokuapp.com/api/movies/'+id,{headers:header})
             .then(res=>{
                 if(res.status===200)
                 {
                     this.props.history.push('/')
                 }
                 else{

                 }
             })
    }    
    render() {
        return (
            <Fragment>
                {this.state.error?
                <p>An error occured please check your internet</p>
                :this.state.movie===null?
                <Spinner />
                :
                <Fragment>
                <div 
                className={classes.Header}>
                    {
                        this.state.movie.name
                    }
                </div>
                <div>
                    <img 
                    className={classes.img} 
                    src={this.state.movie.poster} 
                    alt={this.state.movie.name}>
                    </img>
                </div>
                <div 
                className={classes.form}>
                    <form>
                        <div 
                        className={classes.formgroup}>
                            <label 
                            className={classes.label} 
                            htmlFor="name">Name</label>
                            <input 
                            className={classes.input} 
                            type="text" 
                            id="name" 
                            value={this.state.movie.name} 
                            onChange={(e)=>this.handlechange(e.target)} 
                            required
                            disabled={this.state.disabled} 
                            />
                        </div>
                        <div 
                        className={classes.formgroup}>
                            <label 
                            className={classes.label} 
                            htmlFor="directedBy">
                                Directed By
                                </label>
                            <input 
                            className={classes.input} 
                            type="text" 
                            id="directedBy" 
                            value={this.state.movie.directedBy} 
                            onChange={(e)=>this.handlechange(e.target)} 
                            disabled={this.state.disabled} 
                            required/>
                        </div>
                        <div 
                        className={classes.formgroup}>
                            <label 
                            className={classes.label} 
                            htmlFor="rating">
                                Rating
                            </label>
                            <input 
                            className={classes.input}
                            type="number" 
                            id="rating" 
                            onChange={(e)=>this.handlechange(e.target)} 
                            value={this.state.movie.rating} 
                            disabled={this.state.disabled} 
                            min={0}
                            max={10}
                            required/>
                        </div>
                        <div 
                        className={classes.formgroup}>
                            <label 
                            className={classes.label} 
                            htmlFor="year">
                                Release Year
                            </label>
                            <input 
                            className={classes.input}
                            type="number" 
                            id="year" 
                            value={this.state.movie.year} 
                            onChange={(e)=>this.handlechange(e.target)} 
                            disabled={this.state.disabled}
                            min={1971} 
                            max={new Date().getFullYear()}
                            required/>
                        </div>
                        <div 
                        className={classes.formgroup}>
                            <label 
                            className={classes.label}htmlFor="plot">
                                Plot
                            </label>
                            <textarea 
                            className={classes.text} 
                            onChange={(e)=>this.handlechange(e.target)} 
                            id="plot" 
                            value={this.state.movie.plot} 
                            disabled={this.state.disabled}
                            minLength={50} 
                            required/>
                        </div>
                        <div className={classes.formgroup}>
                            <label  
                            className={classes.label}
                            htmlFor="genre">
                                Genre
                            </label>
                            <textarea  
                            className={classes.text} 
                            id="genre" 
                            value={this.state.movie.genre} 
                            onChange={(e)=>this.handlechange(e.target)} 
                            disabled={this.state.disabled} 
                            required/>
                        </div>
                        <div 
                        className={classes.formgroup}>
                            <label 
                            className={classes.label} 
                            htmlFor="cast">
                                Cast
                            </label>
                            <textarea 
                            className={classes.text} 
                            id="cast" 
                            value={this.state.movie.cast} 
                            disabled={this.state.disabled} 
                            onChange={(e)=>this.handlechange(e.target)} />
                        </div>
                    </form>
                </div>
                    
                
                   { this.props.loggedIn?
                    this.state.disabled?
                    [<button 
                        key="edit"
                        className={classes.button} 
                        onClick={()=>this.setState({disabled:!this.state.disabled})}>
                            Edit
                        </button>,
                        <button 
                        className={classes.button}
                        onClick={this.delete}
                        key="delete-orig">
                            Delete
                        </button>]
                    :[<button 
                        className={classes.button}
                        key="update"
                        onClick={this.submit}>
                            Update
                        </button>,
                        <button 
                        className={classes.button}
                        key="delete"
                        onClick={this.delete}>
                            Delete
                        </button>]
                    :<p 
                    className={classes.msg}>
                        Please login to edit/delete
                    </p>}
                </Fragment>
                    }
                
                
            </Fragment>
        )
    }
}

export default SingleMovie
