import React, { Component, Fragment } from 'react'
import Movie from './Movie/Movie'
import axios from 'axios'
import SingleMovie from './SingleMovie/SingleMovie'
export class Movies extends Component {
    constructor(props){
        super(props)
        this.state={
            movies:[],
            movieId:null,
            error:false
        }
    }
    componentDidMount(){
        console.log('movies component mounted');
        axios.get('https://pmdbapi.herokuapp.com/api/movies')
                    .then(res=>this.setState({movies:res.data}))
                    .catch(this.setState({error:true}));
    }
    more=(id)=>{
        this.setState({movieId:id})
    }
    movieList=()=>{
        return this.state.movies.map(movie=><Movie key={movie._id} {...movie} singlemov={this.more}/>);
    }
    render() {
        return (
            <Fragment>
                {
                    this.state.movieId!==null?
                    <SingleMovie movieId={this.state.movieId}/>
                    :
                    this.state.error?<p>An error occured please check your internet</p>:this.movieList()
                }
            </Fragment>
            
        )
    }
}

export default Movies
