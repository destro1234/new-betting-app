import React, { useState, useContext } from 'react'
import {UserContext} from '../context/user.js'


function PredictionForm ({game, addPrediction, clicked, setClicked}) {

    const [winner, setWinner] = useState(null)
    const [reason, setReason] = useState(null)
    const { currentUser } = useContext(UserContext)
    const [errors, setErrors ] = useState([])

   
    async function handleSubmit(event) {

        event.preventDefault()
        
        let new_prediction = {winner: winner, reason: reason, game_id: game.id, user_id: currentUser.id}
        

       const response = await fetch(`users/${currentUser.id}/predictions`, {
            
            method: "POST",
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(new_prediction)
        })
        const data = await response.json();
        
            
            if (response.ok) {
               
                addPrediction(data)
                setClicked(!clicked)
                
            }

            else {
                setErrors(data.errors)
            }
            
        
        
    }
    
    function handleWinner(event) {
        setWinner(event.target.value)
    }

    function handleReason(event) {
        setReason(event.target.value)
    }


    return (
        <div>
        <form>
          <h3> Game Prediction: </h3>
          <label>Choose winner: </label>
          <br></br>
          <input onChange={handleWinner}type="text" placeholder="winner"></input>
          <br></br>
          <label> Reason: </label>
          <br></br>
          <textarea rows={4} cols={50} onChange={handleReason} type="text" placeholder="reason"></textarea>

          {errors.length > 0 && (
            <ul style={{ color: "red" }}>
                {errors.map((error) => (
            <li key={error}>{error}</li>
                ))}
            </ul>
  )}
          <button onClick={handleSubmit} type="submit">Submit</button>
        </form>
        </div>
    )
}

export default PredictionForm;