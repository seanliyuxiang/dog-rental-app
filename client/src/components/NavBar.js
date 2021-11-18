import React from 'react';
import {NavLink} from 'react-router-dom';

const linkStyles = {
    padding: "10px 15px 10px 15px",
    margin: "10px 10px 10px 10px",
    textDecoration: "none",
    color: "white",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: "0px 17px 0px 17px",
  };

function NavBar({currentUser, setCurrentUser}) {

    function handleLogout (event) {
        console.log(event)
        // fetch DELETE session#destroy
        // fetch('/logout'),{
//          method: POST 
        // }
        // .then()
        // .then()
    }


    return (
        <div className="nav-bar">
            <h1>Rent-a-Friendly-Doggie</h1>

            <NavLink
            to='/'
            exact
            style={linkStyles}
            className="nav-bar-route"
            activeStyle={{
                cursor: 'pointer',
                hover: {
                    color: '#FF0000'
                }
            }}
            >Home</NavLink>

            <NavLink
            to='/dogs_for_rent'
            exact
            style={linkStyles}
            className="nav-bar-route"
            activeStyle={{
                cursor: 'pointer'
            }}
            >Rent a Dog</NavLink>

           {!currentUser ? 
            <NavLink
            to='/login'
            exact
            style={linkStyles}
            className="nav-bar-route"
            activeStyle={{
                cursor: 'pointer'
            }}
            >Login</NavLink>
            
            : <button onclick={handleLogout}>Logout</button> }
           

            <NavLink
            to='/signup'
            exact
            style={linkStyles}
            className="nav-bar-route"
            activeStyle={{
                cursor: 'pointer'
            }}
            >Sign Up</NavLink>


            <NavLink
            to='/userprofile'
            exact
            style={linkStyles}
            className="nav-bar-route"
            activeStyle={{
                cursor: 'pointer'
            }}
            >Profile</NavLink>

        </div>          
    )
}

export default NavBar
