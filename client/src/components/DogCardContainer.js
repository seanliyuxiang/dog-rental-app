import React, {useState, useEffect} from 'react';
import DogCard from './DogCard';
import NewDogForm from './NewDogForm';
import {NavLink} from 'react-router-dom';

// **still need to render the NewDogForm component!

function DogCardContainer({currentUser}) {
    const [dogs, setDogs] = useState([]);

    // fetching all dogs
    useEffect(() => {
    fetch("/api/dogs")
    .then(response => response.json())
    .then(data => setDogs(data))
    }, [])

    function renderDogCards () {
        // iterate through the array of dogs and create a DogCard for each
        return(
            dogs.map(dog => {
                return(
                    <DogCard dog={dog} key={dog.id} />
                )
            })
        )
    }
    
    return (
        <>
        {/* <NavLink> </NavLink> */}
        <div className="card-grid">
            <NewDogForm currentUser={currentUser} />
            {renderDogCards()}
        </div>
        </>
    )
}

export default DogCardContainer;
