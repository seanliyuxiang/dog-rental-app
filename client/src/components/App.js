import DogCardContainer from './DogCardContainer';
import { useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Signup from "./Signup";
import Login from "./Login";
import UserProfile from "./UserProfile"

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  // auto login
  useEffect(() => {
    fetch('api/me')
    .then(response => {
      if(response.ok) {
        response.json().then(user => setCurrentUser(user))
      }
    })
  }, [])

  if(!currentUser) {
    return (
      <>
        <NavBar />
        <Login setCurrentUser={setCurrentUser} />
      </>
    )
  }
  
  return (
    <div>
      <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/dogs_for_rent">
            <DogCardContainer />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route>
            <UserProfile exact path="userprofile"/>
          </Route>
          
       </Switch>
    </div>
  );
}

export default App;
