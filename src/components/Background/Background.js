import React from 'react'
import classes from './Background.module.css'

export default function (props) {
    return (
        <button className={classes.background} onClick={()=>props.close()}>
        </button>
    )
}
