// Core react imports
import React, { Fragment , useState } from 'react'
import { BrowserRouter , Switch , Route ,withRouter } from 'react-router-dom'
// Importing main components for the routes
import Movies from '../../containers/Movies/Movies'
import About from '../About/Index'
import AddMovie from '../../containers/AddMovie/Index'
import SingleMovie from '../../containers/SingleMovie/SingleMovie'
// Importing the Navigation related components
import Navbar from '../Navbar/Navbar'
import SideBar from '../SideBar/SideBar'
// Importing Modal components
import Modal from '../Modal/Modal'
import Background from '../Background/Background'
import LoginModal from '../LoginModal/Index'
// My main functional component that is imported in App.js
export default function Layout() {
    // A state to hold the user name
    const [User ,setUser]=useState(localStorage.getItem('username') || undefined)
    // A state to hold the jwt token obtained on login
    const [Token,setToken]=useState(localStorage.getItem('token') || undefined) 
    // A state to check if the user is logged in or not
    const [loggedIn,setLoggedIn]=useState(localStorage.getItem('loggedin') || false)
    // A state to check if the sidenav is open or not
    const [sidenav,setsidenav]=useState(undefined)
    // A state to check if the modal is open or no
    const [modal,setmodal]=useState(false)
    // A function that handles the opening and closing of modal
    const handleModal=()=>{
        const modalstat=modal
        setmodal(!modalstat)
        setsidenav(!sidenav)
    }
    // A function that handles the opening and closing of sidenav
    const handleSideNav=()=>{
        setsidenav(!sidenav)
    }
    // A function that clears the state on logout
    const clearstate=()=>{
        setUser(undefined)
        setToken(undefined)
        setLoggedIn(false)
        localStorage.clear()
    }
    // The JSX that is returned by the functional component to be rendered
    return (
        <Fragment>
            <BrowserRouter>
                <Navbar 
                loggedIn={loggedIn} 
                clearstate={clearstate} 
                auth={handleModal} 
                sidenav={handleSideNav}/>
                <SideBar 
                loggedIn={loggedIn} 
                clearstate={clearstate} 
                auth={handleModal} 
                status={sidenav} 
                setstatus={setsidenav}/>
                <br />
                {modal?
                    <div>
                        <Modal>
                            <LoginModal 
                            setmodal={setmodal} 
                            setLoggedin={setLoggedIn} 
                            setToken={setToken} 
                            setUser={setUser} >
                            </LoginModal>    
                        </Modal>
                        <Background close={setmodal}/>
                    </div>
                    :null
                }
                <Switch>
                    <Route 
                    path="/about" 
                    exact 
                    component={withRouter(About)}>
                    </Route>
                    <Route 
                    path="/add" 
                    exact 
                    render={(props)=><AddMovie { ...props } loggedIn={loggedIn} token={Token}/>}
                    />
                    <Route 
                    path="/" 
                    exact 
                    render={(props)=><Movies { ...props } loggedIn={loggedIn}/>}
                    />
                    <Route 
                    path="/movie/:id" 
                    exact
                    render={(props)=><SingleMovie { ...props } loggedIn={loggedIn} token={Token} />}
                    />
                </Switch>
            </BrowserRouter>        
        </Fragment>
    )
}
