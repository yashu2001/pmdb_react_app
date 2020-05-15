import React, { Component, Fragment } from 'react'
import axios from 'axios'
import classes from './SingleMovie.module.css'
import Spinner from '../../../components/Spinner/Spinner'
export class SingleMovie extends Component {
    constructor(props){
        super(props)
        this.state={
            movie:null,
            error:false,
            disabled:true
        }
    }
    componentDidMount(){
        axios.get('https://pmdbapi.herokuapp.com/api/movies/'+this.props.movieId)
        .then(res=>this.setState({movie:res.data}))
        .catch(err=>{this.setState({error:true})});
    }
    handlechange=(elem)=>{
        let mov=this.state.movie
        mov[elem.id]=elem.value
        this.setState({movie:mov})
    }    
    render() {
        return (
            <Fragment>
                {this.state.error?<p>An error occured please check your internet</p>:this.state.movie===null?<Spinner />:
                <Fragment>
                <div className={classes.Header}>
                    {this.state.movie.name}
                </div>
                <div>
                    <img className={classes.img} src={this.state.movie.poster} alt={this.state.movie.name}></img>
                </div>
                <div className={classes.form}>
                    <form>
                        <div className={classes.formgroup}>
                            <label className={classes.label} htmlFor="name">Name</label>
                            <input className={classes.input} type="text" id="name" value={this.state.movie.name} onChange={(e)=>this.handlechange(e.target)} disabled={this.state.disabled} />
                        </div>
                        <div className={classes.formgroup}>
                            <label className={classes.label} htmlFor="directedBy">Directed By</label>
                            <input className={classes.input} type="text" id="directedBy" value={this.state.movie.directedBy} onChange={(e)=>this.handlechange(e.target)} disabled={this.state.disabled} />
                        </div>
                        <div className={classes.formgroup}>
                            <label className={classes.label} htmlFor="rating">Rating</label>
                            <input className={classes.input}type="text" id="rating" onChange={(e)=>this.handlechange(e.target)} value={this.state.movie.rating} disabled={this.state.disabled} />
                        </div>
                        <div className={classes.formgroup}>
                            <label className={classes.label} htmlFor="year">Release Year</label>
                            <input className={classes.input}type="text" id="year" value={this.state.movie.year} onChange={(e)=>this.handlechange(e.target)} disabled={this.state.disabled} />
                        </div>
                        <div className={classes.formgroup}>
                            <label className={classes.label}htmlFor="plot">Plot</label>
                            <textarea className={classes.text} onChange={(e)=>this.handlechange(e.target)} id="plot" value={this.state.movie.plot} disabled={this.state.disabled} />
                        </div>
                        <div className={classes.formgroup}>
                            <label  className={classes.label}htmlFor="genre">Genre</label>
                            <textarea  className={classes.text} id="genre" value={this.state.movie.genre} onChange={(e)=>this.handlechange(e.target)} disabled={this.state.disabled} />
                        </div>
                        <div className={classes.formgroup}>
                            <label className={classes.label} htmlFor="cast">Cast</label>
                            <textarea className={classes.text} id="cast" value={this.state.movie.cast} disabled={this.state.disabled} onChange={(e)=>this.handlechange(e.target)} />
                        </div>
                    </form>
                </div>
                    
                </Fragment>
                }
                {
                this.props.loggedIn?
                this.state.disabled?
                [<button className={classes.button} onClick={()=>this.setState({disabled:!this.state.disabled})}>Edit</button>,<button className={classes.button}>Delete</button>]
                :[<button className={classes.button}>Update</button>,<button className={classes.button}>Delete</button>]
                :<p className={classes.msg}>Please login to edit/delete</p>
                }
            </Fragment>
        )
    }
}

export default SingleMovie
