import React, {useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import DogDetail from './DogDetail';
import {NavLink} from 'react-router-dom';

function DogCard({dog}) {

    

    return (
        <div className="card" > 
            <img src={dog.image} alt={dog.name} />
            <h2>{dog.name}</h2>
            <NavLink to={`/dogs_for_rent/${dog.id}`}>Rent me!</NavLink>
        </div>
    )
}

export default DogCard;
