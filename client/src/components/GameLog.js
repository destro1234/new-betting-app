import React, { useState, useEffect } from 'react'
import GameCard from "./GameCard.js"
import PredictionLog from './PredictionLog.js'

function GameLog ({current_user}) {
    const [games, setGames ] = useState([])
    const [predictions, setPredictions] = useState([])


    
        useEffect(() => {
            fetch('/games')
            .then( r => r.json())
            .then( data => setGames(data))
        }, [])

        useEffect(() => {
            fetch(`/users/${current_user.id}/predictions`)
            .then( r => r.json())
            .then(data => setPredictions(data))
        }, [])

        function addPrediction (prediction, game) {

            // if (predictions) {
                let newPredictions = [...predictions, prediction]
                setPredictions(newPredictions.sort((a,b) => { return a.id - b.id }))

            // }
            // else {
                // game.predictions =[prediction]
            // }
    
            // const filteredGames = games.filter( (g) => { return g.id !== prediction.game_id})
        
            // const newGames = [...filteredGames, game]
            
            // setGames(newGames.sort((a, b) => { return a.id - b.id }))
            
              }



        
    return (
        
        <div>
            <h1>These are the games tonight</h1>
            <ol>
                {games.map((g) => {
                    return <GameCard key={g.id} game={g} current_user={current_user} addPrediction={addPrediction} />
                })}
            </ol>
            
            <PredictionLog key={current_user.id} current_user={current_user} games={games} setGames={setGames} predictions={predictions} setPredictions={setPredictions}/>

        </div>
    )
}

export default GameLog;