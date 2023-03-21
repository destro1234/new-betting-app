import React, { useState, useEffect } from 'react'

function GameLog () {
    const [games, setGames ] = useState([])

    
        useEffect(() => {
            fetch('/games')
            .then( r => r.json())
            .then( data => setGames(data))
        }, [])
        
    return (
        
        <div>
            <h1>These are the games tonight</h1>
            <ol>
                {games.map((g) => {
                    console.log(g)
                    return <li>{g.home_team} vs . {g.away_team}</li>
                })}
            </ol>
        </div>
    )
}

export default GameLog;