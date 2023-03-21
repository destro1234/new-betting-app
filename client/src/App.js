import logo from './logo.svg';
import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom' 

import Header from './components/Header.js'
import Login from './components/Login.js'
import './App.css';



function App() {
  return (
    <React.Fragment>
      <Header />
      <Login />

    {/* // <Router> */}
    {/* //     <Routes> */}
          {/* // <Route path="/walks" element={<Walk dogs={dogs} setDogs={setDogs} />}></Route> */}
    {/* //       <Route path="/" element={<Header />}></Route> */}

          
    {/* //     </Routes> */}
    {/* //    </Router> */}
       </React.Fragment>

      
    
  );
}

export default App;
