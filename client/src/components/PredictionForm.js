import React, { useState } from 'react'

function PredictionForm ({game, current_user, addPrediction, clicked, setClicked}) {

    const [winner, setWinner] = useState(" ")
    const [reason, setReason] = useState(" ")

   
    function handleSubmit(event) {

        event.preventDefault()
        let new_prediction = {winner: winner, reason: reason, game_id: game.id, user_id: current_user.id }
        

        fetch(`users/${current_user.id}/predictions`, {
            
            method: "POST",
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(new_prediction)
        })
        .then( res => res.json())
        .then( data => {
            addPrediction(data, game)
        })
        setClicked(!clicked)
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
          <button onClick={handleSubmit} type="submit">Submit</button>
        </form>
        </div>
    )
}

export default PredictionForm;