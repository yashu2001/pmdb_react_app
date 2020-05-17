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
            <div className={classes.menu} onClick={props.sidenav} key="hamburger">
                <li></li>
                <li></li>
                <li></li>
            </div>
            {/* JSX for brand logo/name */}
            <div className={classes.Brand} key="logo">
                PMDB
            </div>
            {/* JSX for the navigation list */}
            <ul  className={classes.NavList} key="list">
                    { props.loggedIn ? [
                    <li key="movies"><Link to="/" className={classes.link}>Movies</Link></li>,
                    <li key="addmovie"><Link to="/add" className={classes.link}>Post Review</Link></li>,
                    <li key="about"><Link to="/about" className={classes.link}>About</Link></li>,
                    <li key="logout" className={classes.link} onClick={()=>props.clearstate()}>Logout</li>].reverse():
                    [<li key="Login" onClick={()=>props.auth()} style={{color:"white"}}>Login</li>,
                    <li key="about1"><Link to="/about" className={classes.link}>About</Link></li>,
                    <li key="movies1"><Link to="/" className={classes.link}>Movies</Link></li>] }
            </ul>
        </nav>
    )
}
