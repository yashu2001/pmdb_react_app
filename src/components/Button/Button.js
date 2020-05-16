// Core react imports
import React from 'react'
// Css import
import classes from './Button.module.css'
// The functional component imported in movies tab
export default function Button(props) {
    return (
           <button 
           className={classes.btn} 
           onClick={()=>props.singlemov(props._id)}>
                {props.name}
            </button> 
    )
}
