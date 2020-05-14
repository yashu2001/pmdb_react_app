import React, { Component, Fragment } from 'react'
import axios from 'axios'
import classes from './SingleMovie.module.css'
export class SingleMovie extends Component {
    constructor(props){
        super(props)
        this.state={
            movie:null
        }
    }
    componentDidMount(){
        axios.get('https://pmdbapi.herokuapp.com/api/movies/'+this.props.movieId)
        .then(res=>this.setState({movie:res.data}))
    }    
    render() {
        return (
            <Fragment>
                {this.state.movie===null?'empty':
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
                            <input className={classes.input} type="text" id="name" value={this.state.movie.name} disabled />
                        </div>
                        <div className={classes.formgroup}>
                            <label className={classes.label} htmlFor="directedBy">Directed By</label>
                            <input className={classes.input} type="text" id="directedBy" value={this.state.movie.directedBy} disabled />
                        </div>
                        <div className={classes.formgroup}>
                            <label className={classes.label} htmlFor="rating">Rating</label>
                            <input className={classes.input}type="text" id="rating" value={this.state.movie.rating} disabled />
                        </div>
                        <div className={classes.formgroup}>
                            <label className={classes.label} htmlFor="year">Release Year</label>
                            <input className={classes.input}type="text" id="year" value={this.state.movie.year} disabled />
                        </div>
                        <div className={classes.formgroup}>
                            <label className={classes.label}htmlFor="plot">Plot</label>
                            <textarea className={classes.text} id="plot" value={this.state.movie.plot} disabled />
                        </div>
                        <div className={classes.formgroup}>
                            <label  className={classes.label}htmlFor="genre">Genre</label>
                            <textarea  className={classes.text} id="genre" value={this.state.movie.genre} disabled />
                        </div>
                        <div className={classes.formgroup}>
                            <label className={classes.label} htmlFor="cast">Cast</label>
                            <textarea className={classes.text} id="cast" value={this.state.movie.cast} disabled />
                        </div>
                    </form>
                </div>
                </Fragment>
                }
            </Fragment>
        )
    }
}

export default SingleMovie
