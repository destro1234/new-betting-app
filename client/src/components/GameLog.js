import React, { useState, useEffect, useContext } from 'react'
import GameCard from "./GameCard.js"
import PredictionLog from './PredictionLog.js'
import {UserContext} from '../context/user.js'

function GameLog () {
    const [games, setGames ] = useState([])

    const { currentUser, setCurrentUser } = useContext(UserContext)
    

    
        useEffect(() => {
            fetch('/games')
            .then( r => r.json())
            .then( data => setGames(data))
        }, [])

        function addPrediction (prediction) {
            console.log(prediction)
            let newUser = {...currentUser}
            let newTest = {winner: prediction.winner, reason: prediction.reason, game_description: `${prediction.game.home_team} vs. ${prediction.game.away_team}`, prediction: prediction}
           if (currentUser.predictions) {
            newUser.predictions = [...currentUser.predictions, prediction]
            newUser.test = [...currentUser.test, newTest]
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
                    return <GameCard key={g.id} game={g} addPrediction={addPrediction} />
                })}
            </ol>
            
            <PredictionLog key={currentUser.id} games={games} setGames={setGames}/>

        </div>
    )
}

export default GameLog;