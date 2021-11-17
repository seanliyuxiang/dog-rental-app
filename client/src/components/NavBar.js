import React from 'react';
import {NavLink} from 'react-router-dom';



function NavBar() {
    return (
    
        <div className="nav-bar">
                <h1> Rent A-Friendly-Doggie</h1>
                <NavLink
                to='/'
                className="nav-bar-route"
                >Home</NavLink>

                <NavLink
                to='/dogs_for_rent'
                className="nav-bar-route"
                >Rent a Dog</NavLink>

                <NavLink
                to='/login'
                className="nav-bar-route"
                >Login</NavLink>

                <NavLink
                to='/signup'
                className="nav-bar-route"
                >Sign Up</NavLink>

             </div>   

                        
    )
}

export default NavBar
