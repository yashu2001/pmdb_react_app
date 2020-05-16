// Core react imports
import React  from 'react'
import { Link , BrowserRouter} from 'react-router-dom'
// Css import
import classes from './Navbar.module.css'
// My main functional component that is imported into Layout
export default function Navbar(props) {
    return (
        <nav>
            {/* JSX for hamburger */}
            <div className={classes.menu} onClick={props.sidenav}>
                <li></li>
                <li></li>
                <li></li>
            </div>
            {/* JSX for brand logo/name */}
            <div className={classes.Brand}>
                PMDB
            </div>
            {/* JSX for the navigation list */}
            <ul  className={classes.NavList}>
                <BrowserRouter >
                    { props.loggedIn ? [
                    <li><Link to="/">Movies</Link></li>,
                    <li><Link to="/add">Post Review</Link></li>,
                    <li><Link to="/about" className={classes.link}>About</Link></li>,
                    <li key="logout" onClick={()=>props.clearstate()}>Logout</li>].reverse():
                    [<li key="Login" onClick={()=>props.auth()}>Login</li>,
                    <li><Link to="/about">About</Link></li>] }
                </BrowserRouter>
            </ul>
        </nav>
    )
}
