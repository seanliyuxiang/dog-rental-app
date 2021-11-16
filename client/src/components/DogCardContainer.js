import React from 'react';
import DogCard from './DogCard';

function DogCardContainer({dogs}) {
    
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
