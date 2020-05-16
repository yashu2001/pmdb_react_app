// Core react import
import React from 'react'
// css module import
import classes from './Movie.module.css'
// Component imports
import Button from '../../../components/Button/Button'
// Main functional component imported into movies
export default function Movie(props) {
    return (
        // JSX for individual movie
        <div 
        className={classes.Movieitem}>
            {/* JSX for poster */}
            <img 
            src={props.poster} 
            alt={props.name}/>
            {/* JSX for header */}
            <div 
            className={classes.MovieName}>
                {
                    props.name
                }
            </div>
            {/* JSX for button */}
            <Button 
            singlemov={props.singlemov} 
            name="more" 
            _id={props._id}/>
        </div>
    )
}
