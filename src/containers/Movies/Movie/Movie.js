import React from 'react'
import classes from './Movie.module.css'
import Button from '../../../components/Button/Button'
export default function Movie(props) {
    return (
        <div className={classes.Movieitem}>
            <img src={props.poster} alt={props.name}/>
            <div className={classes.MovieName}>
                {props.name}
            </div>
            <Button singlemov={props.singlemov} name="more" _id={props._id}/>
        </div>
    )
}
