import React, { useState } from 'react'
import PredictionForm from './PredictionForm'

function GameCard({game, current_user, addPrediction}) {

    const [clicked, setClicked ] = useState(false)

    function handleClick(event) {
        setClicked(!clicked)
    }
    
    return (
    <div>

    <li>{game.home_team} vs. {game.away_team}</li>
    {console.log()}

    <button onClick={handleClick}>Make Prediction!</button>
    {clicked ? <PredictionForm current_user={current_user} game={ game } addPrediction={addPrediction} setClicked={setClicked} clicked={clicked}/> : null }
    
    <p> {[...new Set(game.users.map(user => user.username))].length} users have betted on this game!!</p>

    </div>
    )
}

export default GameCard;