import React, { useState } from 'react'
import PredictionForm from './PredictionForm'


function GameCard({game, addPrediction}) {

    const [clicked, setClicked ] = useState(false)

    function handleClick(event) {
        setClicked(!clicked)
    }
    
    return (
    <div>

    <li>{game.home_team} vs. {game.away_team}</li>

    <button onClick={handleClick}>Make Prediction!</button>
    {clicked ? <PredictionForm game={ game } addPrediction={addPrediction} setClicked={setClicked} clicked={clicked}/> : null }
    
    <p> {[...new Set(game.users.map(user => user.username))].length} users have betted on this game!!</p>

    </div>
    )
}

export default GameCard;