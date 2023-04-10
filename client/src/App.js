import React, { useContext } from 'react' 

import Header from './components/Header.js'
import Login from './components/Login.js'
import GameLog from './components/GameLog.js'
import './App.css';
import  {UserContext}  from './context/user.js'



function App() {

  const { currentUser, setCurrentUser} = useContext(UserContext)
  
  function logOut() {
  fetch("/logout", {
    method: "DELETE",
  }).then(() => {
    setCurrentUser(null)
  });
 }
 
  if (currentUser) {
    return ( <React.Fragment>
      <Header />
      <h2>Welcome, {currentUser.username}!</h2>
      <GameLog />
      <button onClick={logOut}>LogOut</button>
      </React.Fragment>);
  } else {
    return (
    <React.Fragment>
      <Header />
      <Login />
    </React.Fragment>
    );
  }
}

export default App;
