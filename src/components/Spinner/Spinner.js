// Core react imports
import React from 'react'
// CSS import
import classes from './Spinner.module.css'
// The main functional component that is imported wherever spinners are needed
export default function Spinner() {
    return (
        <div 
        className={classes.loader}>
            Loading..
        </div>
    )
}
