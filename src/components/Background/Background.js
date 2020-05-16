// Core react imports
import React from 'react'
import classes from './Background.module.css'
// The main functional component imported next to all modals
export default function (props) {
    return (
        <button 
        className={classes.background} 
        onClick={()=>props.close()}>
        </button>
    )
}
