import React from 'react'
import classes from './Button.module.css'
export default function Button(props) {
    return (
           <button className={classes.btn} onClick={()=>props.singlemov(props._id)}>
            {props.name}
            </button> 
    )
}
