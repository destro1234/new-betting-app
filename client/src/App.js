import React, { useEffect, useState } from 'react'
// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom' 

import Header from './components/Header.js'
import Login from './components/Login.js'
import GameLog from './components/GameLog.js'
import './App.css';



function App() {

  const [currentUser, setCurrentUser] = useState(null);

  // <Header />

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setCurrentUser(user));
      }
    });
  }, []);

  if (currentUser) {
    return ( <React.Fragment>
      <Header />
      <h2>Welcome, {currentUser.username}!</h2>
      <GameLog />
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
