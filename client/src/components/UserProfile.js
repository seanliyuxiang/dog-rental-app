import React from 'react'

function UserProfile({currentUser}) {

    // already did the fetch get from /api/me in the app.js component
    // here we'll just accept it and render the user's profile info
    
    
    
    return (
        <div className="user-profile">
            {console.log(currentUser)}
            <h2>Your info:</h2>
            <h3>Username: {currentUser.username}</h3>
            <h3>First Name: {currentUser.first_name}</h3>
            <h3>Last Name: {currentUser.last_name}</h3>
            <h3>Location: {currentUser.location}</h3>
            <h3>Phone Number: {currentUser.phone_number}</h3>



            <p></p>
        </div>
    )
}

export default UserProfile
