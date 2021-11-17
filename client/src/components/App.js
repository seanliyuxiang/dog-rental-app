import DogCardContainer from './DogCardContainer';
import { useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Signup from "./Signup";
import Login from "./Login";

function App() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    fetch("/api/dogs")
    .then(response => response.json())
    .then(data => setDogs(data))
  }, [])

  
  
  
  
  return (
    <div>
      <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/dogs_for_rent">
            <DogCardContainer dogs={dogs}/>
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          
       </Switch>
    </div>
  );
}

export default App;
