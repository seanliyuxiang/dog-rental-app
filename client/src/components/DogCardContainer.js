import React, {useState, useEffect} from 'react';
import DogCard from './DogCard';

function DogCardContainer() {
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
        <div className="Card-grid">
            {renderDogCards()}
        </div>
    )
}

export default DogCardContainer;
