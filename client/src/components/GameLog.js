import React, { useState, useEffect } from 'react'
import GameCard from "./GameCard.js"
import PredictionLog from './PredictionLog.js'

function GameLog ({current_user, setCurrentUser, setPredictions, predictions }) {
    const [games, setGames ] = useState([])
    

    
        useEffect(() => {
            fetch('/games')
            .then( r => r.json())
            .then( data => setGames(data))
        }, [])

            // useEffect(() => {
            //     fetch(`/users/${current_user.id}/predictions`)
            //     .then( r => r.json())
            //     .then(data => {
            //         // console.log(current_user.id)
            //         // console.log(data)
            //         setPredictions(data)}
            //         )
            // }, [current_user.id])

        function addPrediction (prediction, game) {
            
            let newUser = {...current_user}
            let newTest = {winner: prediction.winner, reason: prediction.reason, game_description: `${prediction.game.home_team} vs. ${prediction.game.away_team}`}
           if (current_user.predictions) {
            newUser.predictions = [...current_user.predictions, prediction]
            newUser.test = [...current_user.test, newTest]
           }

           else {
                newUser.predictions = [prediction]
                newUser.test = [newTest]
           }
           setCurrentUser(newUser)          
              }



        
    return (
        
        <div>
            <h1>These are the games tonight</h1>
            <ol>
                {games.map((g) => {
                    return <GameCard key={g.id} game={g} current_user={current_user} addPrediction={addPrediction} />
                })}
            </ol>
            
            <PredictionLog key={current_user.id} current_user={current_user} games={games} setGames={setGames} setCurrentUser={setCurrentUser}/>

        </div>
    )
}

export default GameLog;