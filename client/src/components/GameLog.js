import React, { useState, useEffect } from 'react'
import GameCard from "./GameCard.js"
import PredictionLog from './PredictionLog.js'

function GameLog ({current_user}) {
    const [games, setGames ] = useState([])

    
        useEffect(() => {
            fetch('/games')
            .then( r => r.json())
            .then( data => setGames(data))
        }, [])

        function addPrediction (prediction, game) {

            if (game.predictions) {
                let newPredictions = [...game.predictions, prediction]
                game.predictions = newPredictions

            }
            else {
                game.predictions =[prediction]
            }
    
            console.log(game.predictions)
            const filteredGames = games.filter( (g) => { return g.id !== prediction.game_id})
        
            const newGames = [...filteredGames, game]
            
            setGames(newGames.sort((a, b) => { return a.id - b.id }))
              }

       
        
    return (
        
        <div>
            <h1>These are the games tonight</h1>
            <ol>
                {games.map((g) => {
                    return <GameCard key={g.id} game={g} current_user={current_user} addPrediction={addPrediction} />
                })}
            </ol>
            <PredictionLog key={current_user.id} current_user={current_user} games={games} setGames={setGames}/>

        </div>
    )
}

export default GameLog;