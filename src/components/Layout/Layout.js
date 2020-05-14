import React, { Fragment ,useState} from 'react'
import Movies from '../../containers/Movies/Movies'
import Navbar from '../Navbar/Navbar'
import SideBar from '../SideBar/SideBar'
import Modal from '../Modal/Modal'
import Background from '../Background/Background'
export default function Layout() {
    // const [User ,setUser]=useState(undefined)
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
    return (
        <Fragment>
            <Navbar loggedIn={loggedIn} auth={handleModal} sidenav={handleSideNav}/>
            <SideBar loggedIn={loggedIn} auth={handleModal} status={sidenav} setstatus={setsidenav}/>
            <br />
            {modal?<div><Modal><p>hi there</p></Modal><Background /></div>:null}
            <Movies />
        </Fragment>
    )
}
