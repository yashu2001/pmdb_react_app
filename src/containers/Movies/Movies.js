// Core react imports
import React, { Component, Fragment } from 'react'
// Child container import
import Movie from './Movie/Movie'
import SingleMovie from './SingleMovie/SingleMovie'
// Utility imports
import axios from 'axios'
// Componenet imports
import Spinner from '../../components/Spinner/Spinner'
// The main class component imported in layout
export class Movies extends Component {
    // Constructor
    constructor(props){
        super(props)
        this.state={
            movies:null,
            movieId:null,
            error:false
        }
    }
    // This runs when the component is rendered initially
    componentDidMount(){
        console.log('movies component mounted');
        axios.get('https://pmdb-api.herokuapp.com/api/movies')
                    .then(res=>this.setState({movies:res.data}))
                    .catch(err=>{
                        this.setState({error:true})
                    });
    }
    // This function is used to view a single movie
    more=(id)=>{
        this.setState({movieId:id})
    }
    // This function returns JSX for movie list
    movieList=()=>{
        return this.state.movies.map(movie=><Movie key={movie._id} {...movie} singlemov={this.more}/>);
    }
    render() {
        return (
            <Fragment>
                {
                    this.state.movieId!==null?
                    <SingleMovie 
                    movieId={this.state.movieId} 
                    loggedIn={this.props.loggedIn}/>
                    :
                    this.state.error?
                    <p>An error occured please check your internet</p>
                    :this.state.movies===null?<Spinner></Spinner>
                    :this.state.movies.length===0?
                    <p>We're sorry there aren't any movies added.Please feel free to signup and review some</p>
                    :this.movieList()
                    // JSX for movielist
                }
            </Fragment>
            
        )
    }
}

export default Movies
