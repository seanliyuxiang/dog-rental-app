import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';

function DogDetail () {
  // window.location.reload();
  const [selectedDog,setSelectedDog] = useState(null);
  const params = useParams();

  useEffect(()=>{
    fetch(`/api/dogs/${params.id}`)
    .then(response => response.json())
    .then(data => {
      setSelectedDog(data)
      console.log(data)
    })
  }, [params.id])

  if (!selectedDog) {
    return <h3>Loading...</h3>
  }


  return (
    <div className="dog-details">
      <img src={selectedDog.image} alt={selectedDog.name}/>
      <h3>{selectedDog.name}</h3>
      <p>{selectedDog.name} is a {selectedDog.size}-size {selectedDog.color} {selectedDog.breed} that's {selectedDog.age} years young.</p>
      <p>They like {selectedDog.likes}, and they can't wait to spend time with you!</p>

      <h5>Rentals</h5>
        {selectedDog.rentals.map(rental => {
          return <p> {rental.start_date} | {rental.end_date} | {rental.status} </p>
          })}
    </div>
  )
}

export default DogDetail;
