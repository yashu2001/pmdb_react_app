import React, { Fragment ,useState} from 'react'
import Movies from '../../containers/Movies/Movies'
import Navbar from '../Navbar/Navbar'
import SideBar from '../SideBar/SideBar'
import Modal from '../Modal/Modal'
import Background from '../Background/Background'
import LoginModal from '../LoginModal/Index'
export default function Layout() {
    const [User ,setUser]=useState(undefined)
    const [loggedIn,setLoggedIn]=useState(true)
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
    return (
        <Fragment>
            <Navbar loggedIn={loggedIn} auth={handleModal} sidenav={handleSideNav}/>
            <SideBar loggedIn={loggedIn} auth={handleModal} status={sidenav} setstatus={setsidenav}/>
            <br />
            {modal?<div><Modal><LoginModal></LoginModal></Modal><Background /></div>:null}
            <Movies loggedIn={loggedIn}/>
        </Fragment>
    )
}
