import React, { useEffect, useState } from 'react' 

import Header from './components/Header.js'
import Login from './components/Login.js'
import GameLog from './components/GameLog.js'
import './App.css';



function App() {

  const [currentUser, setCurrentUser] = useState(null);
  const [predictions, setPredictions] = useState([])


  


  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          setCurrentUser(user)
          console.log(user)
        
        });
      }
    });
  }, []);

  


 function logOut() {
  fetch("/logout", {
    method: "DELETE",
  }).then(() => {
    setCurrentUser(null)
  });
 }
// console.log("hello")
  if (currentUser) {
    return ( <React.Fragment>
      <Header />
      <h2>Welcome, {currentUser.username}!</h2>
      <GameLog current_user={currentUser} setCurrentUser={setCurrentUser} predictions={predictions} setPredictions={setPredictions} />
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
}

export default App;
