// Core rect imports
import React from 'react'
// CSS import
import classes from './Modal.module.css'
// The main functional component imported in the layout
export default function Modal(props) {
    return (
        <div 
        className={classes.modal}>
           {
           props.children
           } 
        </div>
    )
}
