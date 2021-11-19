import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function DogDetail ({currentUser}) {
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
      <h2>{selectedDog.name}</h2>
      <p>{selectedDog.name} is a {selectedDog.size}-size {selectedDog.color} {selectedDog.breed} that's {selectedDog.age} years young.</p>
      <p>They like {selectedDog.likes}, and they can't wait to spend time with you!</p>

      <h3>Rentals</h3>
      <table border="2">
        <tr>
          <th>Renter</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Status</th>
        </tr>
        {selectedDog.rentals.map(rental => {
          return (
            <tr>
              <td>{rental.user.username}</td>
              <td>{rental.start_date}</td>
              <td>{rental.end_date}</td>
              <td>{rental.status}</td>
            </tr>
          )
        })}
      </table>
      <Link to={`/dogs_for_rent/${params.id}/rentals/new`}>Make a new request</Link>
    </div>
  )
}

export default DogDetail;
