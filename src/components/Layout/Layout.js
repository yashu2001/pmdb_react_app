import React, { Fragment ,useState} from 'react'
import Movies from '../../containers/Movies/Movies'
import Navbar from '../Navbar/Navbar'
import SideBar from '../SideBar/SideBar'
import Modal from '../Modal/Modal'
import Background from '../Background/Background'
import LoginModal from '../LoginModal/Index'
export default function Layout() {
    const [User ,setUser]=useState(undefined)
    const [Token,setToken]=useState(undefined) 
    const [loggedIn,setLoggedIn]=useState(false)
    const [sidenav,setsidenav]=useState(undefined)
    const [modal,setmodal]=useState(false)
    const handleModal=()=>{
        const modalstat=modal
        setmodal(!modalstat)
        setsidenav(!sidenav)
    }
    const handleSideNav=()=>{
        setsidenav(!sidenav)
    }
    const clearstate=()=>{
        setUser(undefined)
        setToken(undefined)
        setLoggedIn(false)
    }
    return (
        <Fragment>
            <Navbar loggedIn={loggedIn} clearstate={clearstate} auth={handleModal} sidenav={handleSideNav}/>
            <SideBar loggedIn={loggedIn} clearstate={clearstate} auth={handleModal} status={sidenav} setstatus={setsidenav}/>
            <br />
            {modal?<div><Modal><LoginModal setmodal={setmodal} setLoggedin={setLoggedIn} setToken={setToken} setUser={setUser}></LoginModal></Modal><Background close={setmodal}/></div>:null}
            <Movies loggedIn={loggedIn}/>
        </Fragment>
    )
}
