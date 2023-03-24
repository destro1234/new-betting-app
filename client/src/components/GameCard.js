import React, { useState } from 'react'
import BetForm from './BetForm'

function GameCard({game}) {

    const [clicked, setClicked ] = useState(false)

    function handleClick(event) {
        setClicked(!clicked)
    }

    return (
    <div>

    <li>{game.home_team} vs. {game.away_team}</li>

    <button onClick={handleClick}>Make Bet!</button>
    {clicked ? <BetForm game={ game } /> : null }

    </div>
    )
}

export default GameCard;