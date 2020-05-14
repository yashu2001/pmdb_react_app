import React, { Fragment ,useState} from 'react'
import Movies from '../../containers/Movies/Movies'
import Navbar from '../Navbar/Navbar'
import SideBar from '../SideBar/SideBar'
export default function Layout() {
    // const [User ,setUser]=useState(undefined)
    const [loggedIn,setLoggedIn]=useState(undefined)
    const [sidenav,setsidenav]=useState(undefined)
    const handleLogin=()=>{
        const logged=loggedIn
        setLoggedIn(!logged);
    }
    const handleSideNav=()=>{
        setsidenav(!sidenav)
    }
    return (
        <Fragment>
            <Navbar loggedIn={loggedIn} auth={handleLogin} sidenav={handleSideNav}/>
            <SideBar loggedIn={loggedIn} auth={handleLogin} status={sidenav} setstatus={setsidenav}/>
            <br />
            <Movies />
        </Fragment>
    )
}
