import React from 'react'
import classes from './Modal.module.css'
export default function Modal(props) {
    console.log(props)
    return (
        <div className={classes.modal}>
           {props.children} 
        </div>
    )
}
