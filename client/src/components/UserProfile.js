import React from 'react'

function UserProfile({currentUser}) {

    // already did the fetch get from /api/me in the app.js component
    // here we'll just accept it and render the user's profile info
    
    
    
    return (
        <div>
            <h3>{currentUser.username}</h3>
            <p></p>
        </div>
    )
}

export default UserProfile
