import React from 'react';
import {NavLink} from 'react-router-dom';



function NavBar() {
    return (
        <div>
        <h1>Rent-a-Friendly-Doggie</h1>
        <div className="nav-bar">
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

                <NavLink
                to='/userprofile'
                className="nav-bar-route"
                >Profile</NavLink>

             </div>   
</div>
                        
    )
}

export default NavBar
