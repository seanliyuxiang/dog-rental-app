import React from 'react'

function UserProfile({currentUser}) {

    // already did the fetch get from /api/me in the app.js component
    // here we'll just accept it and render the user's profile info
    
    if (!currentUser) {
        return <h3>Loading...</h3>
    }

    // array of JSX
    const ownedDogsSummary = Object.entries(currentUser.owned_dogs_summary).map(
        (singleDogNameImageKeyValuePair, idx) => {
            return (
                <div key={idx}>
                    <img src={singleDogNameImageKeyValuePair[1]} alt={singleDogNameImageKeyValuePair[0]} />
                    <p>{singleDogNameImageKeyValuePair[0]}</p>
                </div>
            );
        }
    );
    
    return (
            <div className="user-profile">
                <h2>Your info:</h2>
                <img src={currentUser.image_url} alt={currentUser.username} /> 
                <h3>Username: {currentUser.username}</h3>
                <h3>First Name: {currentUser.first_name}</h3>
                <h3>Last Name: {currentUser.last_name}</h3>
                <h3>Location: {currentUser.location}</h3>
                <h3>Phone Number: {currentUser.phone_number}</h3> <br />
                <p>Your Dogs</p>
                {ownedDogsSummary}
            </div>
    )
}

export default UserProfile
