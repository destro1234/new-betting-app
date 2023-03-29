import React, { useState } from 'react'
import PredictionForm from './PredictionForm'

function GameCard({games, game, current_user, setGames, addPrediction}) {

    const [clicked, setClicked ] = useState(false)

    function handleClick(event) {
        setClicked(!clicked)
    }

    


    return (
    <div>

    <li>{game.home_team} vs. {game.away_team}</li>

    <button onClick={handleClick}>Make Prediction!</button>
    {clicked ? <PredictionForm current_user={current_user} game={ game } games={games} addPrediction={addPrediction}/> : null }

    </div>
    )
}

export default GameCard;