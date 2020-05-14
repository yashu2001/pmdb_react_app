import React, { Component } from 'react'
import Movie from './Movie/Movie'
export class Movies extends Component {
    constructor(props){
        super(props)
        this.state={
            movies:JSON.parse(`[
                {
                    "rating": 8.5,
                    "_id": "5eb4786eef4b7f7e9f0eb894",
                    "name": "Joker",
                    "genre": "Crime,Drama,Thriller",
                    "year": 2019,
                    "directedBy": "Todd Phillips",
                    "cast": "Joaquin Phoenix,Robert De Niro,Zazie Beetz",
                    "plot": "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.",
                    "poster": "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL50_SY1000_CR0,0,674,1000_AL_.jpg",
                    "createdAt": "2020-05-07T21:06:54.902Z",
                    "updatedAt": "2020-05-07T21:06:54.902Z",
                    "__v": 0
                },
                {
                    "rating": 9.2,
                    "_id": "5eb46612429e236fdd353e50",
                    "name": "The Godfather",
                    "genre": "Crime,Drama",
                    "year": 1972,
                    "directedBy": "Francis Ford Coppola",
                    "cast": "Marlon Brando,Al Pacino,James Caan",
                    "plot": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
                    "poster": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL50_SY1000_CR0,0,704,1000_AL_.jpg",
                    "createdAt": "2020-05-07T19:48:34.176Z",
                    "updatedAt": "2020-05-07T19:48:34.176Z",
                    "__v": 0
                },
                {
                    "rating": 9.3,
                    "_id": "5eb4627b973b776c996dbfd2",
                    "name": "The Shawshank Redemption",
                    "genre": "Drama",
                    "year": 1994,
                    "directedBy": "Frank Darabont",
                    "cast": "Tim Robbins,Morgan Freeman,Bob Gunton",
                    "plot": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
                    "poster": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL50_.jpg",
                    "createdAt": "2020-05-07T19:33:15.772Z",
                    "updatedAt": "2020-05-07T19:33:15.772Z",
                    "__v": 0
                },
                {
                    "rating": 9.3,
                    "_id": "5eb4627b973b776c996dbfd3",
                    "name": "The Shawshank Redemption",
                    "genre": "Drama",
                    "year": 1994,
                    "directedBy": "Frank Darabont",
                    "cast": "Tim Robbins,Morgan Freeman,Bob Gunton",
                    "plot": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
                    "poster": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL50_.jpg",
                    "createdAt": "2020-05-07T19:33:15.772Z",
                    "updatedAt": "2020-05-07T19:33:15.772Z",
                    "__v": 0
                }
            ]`)
        }
    }
    movieList=()=>{
        return this.state.movies.map(movie=><Movie key={movie._id} {...movie}/>);
    }
    render() {
        return (
            <div>
                 {this.movieList()}
            </div>
        )
    }
}

export default Movies
