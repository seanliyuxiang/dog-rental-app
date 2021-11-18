import React, {useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import DogDetail from './DogDetail';

function DogCard({dog}) {

    function handleClick () {
        // fetch dog by id, then save in state, and then return <DogDetail /> component WITH the dog in state

        // console.log('inside handle click, before fetch',dog)
        // // const [selectedDog, setSelectedDog] = useState('')
        //     fetch(`/api/dogs/${dog.id}`)
        //     .then(response => response.json())
        //     .then(data => console.log('after fetch response', data))

    //    return (
    //        <DogDetail dog={dog}/>
    //    )

        // return (
        //     <DogDetail dog={dog} />
        //     )

        // take the chosen dog from dogcard, pass it up to app, and then pass it down to DogDetail
        // console.log(dog);
        return <Redirect to={`/dogs_for_rent/${dog.id}`} />
    }




    return (
        // we'll add a button that onCLick renders the DogDetail component
        <div className="card" onClick={handleClick}> 
            <img src={dog.image} alt={dog.name} />
            <h3>{dog.name}</h3>
        </div>
    )
}

export default DogCard
