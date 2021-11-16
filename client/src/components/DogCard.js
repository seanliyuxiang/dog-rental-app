import React from 'react'

function DogCard({dog}) {
    return (
        <div className="card">
            <h3>{dog.name}</h3>
            <img src={dog.image} alt={dog.name} />
            <h5>{dog.name} is a {dog.size}-size {dog.color} {dog.breed} that's {dog.age} years young. They like {dog.likes}, and they can't wait to spend time with you!</h5>
        </div>
    )
}

export default DogCard
