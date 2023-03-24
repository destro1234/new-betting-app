import React, { useState, useEffect } from 'react'
import GameCard from "./GameCard.js"

function GameLog ({current_user}) {
    const [games, setGames ] = useState([])

    
        useEffect(() => {
            fetch('/games')
            .then( r => r.json())
            .then( data => setGames(data))
        }, [])

       console.log(games)
        
    return (
        
        <div>
            <h1>These are the games tonight</h1>
            <ol>
                {games.map((g) => {
                    console.log(g)
                    return <GameCard game={g} user={current_user} />
                })}
            </ol>
        </div>
    )
}

export default GameLog;