import React, { useEffect, useState } from 'react'
// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom' 

import Header from './components/Header.js'
import Login from './components/Login.js'
import GameLog from './components/GameLog.js'
import './App.css';



function App() {

  const [user, setUser] = useState(null);

  // <Header />

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (user) {
    return ( <React.Fragment>
      <Header />
      <h2>Welcome, {user.username}!</h2>
      <GameLog />
      </React.Fragment>);
  } else {
    return (
    <React.Fragment>
      <Header />
      <Login onLogin={setUser} setCurrentUser={setUser} />
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
