import React, { useEffect, useState } from 'react'
// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom' 

import Header from './components/Header.js'
import Login from './components/Login.js'
import GameLog from './components/GameLog.js'
import PredictionLog from './components/PredictionLog.js'
import './App.css';



function App() {

  const [currentUser, setCurrentUser] = useState(null);


  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          console.log(user)
          setCurrentUser(user)
        
        });
      }
    });
  }, []);

 function logOut() {
  fetch("/logout", {
    method: "DELETE",
  }).then(() => setCurrentUser(null));
 }

  if (currentUser) {
    return ( <React.Fragment>
      <Header />
      <h2>Welcome, {currentUser.username}!</h2>
      <GameLog current_user={currentUser} />
      <PredictionLog current_user={currentUser} />
      <button onClick={logOut}>LogOut</button>
      </React.Fragment>);
  } else {
    return (
    <React.Fragment>
      <Header />
      <Login onLogin={setCurrentUser} setCurrentUser={setCurrentUser} />
    </React.Fragment>
    );
  }


  // return (

    
    // <React.Fragment>
      
      
    //   <Login />
    // </React.Fragment>

      
    
  // );
}

export default App;
