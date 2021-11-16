import DogCardContainer from './DogCardContainer';
import { useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";

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
          <Route>
            <DogCardContainer dogs={dogs}/>
          </Route>
       </Switch>
    </div>
  );
}

export default App;
