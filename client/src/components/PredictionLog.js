import React from 'react'
import PredictionsCard from './PredictionsCard.js'

function PredictionLog({current_user, game,  games}) {
    return (
        <div>
            <h1>{current_user.username}'s Predictions: </h1>

                
            <ol>

            { games.map((g) => {
                

                     if (g.predictions.length > 0) {
                        
                     
                    return (
                        <div>
                    
                    <li>
                        <h3>{g.home_team} vs. {g.away_team}</h3>
                        <div>
            {g.predictions.map((p) => {
                return (
                    <ul>
                        <div>
                            <h3>Predictions</h3>
                    <li>WINNER: {p.winner}</li>
                    <li>REASON: {p.reason} </li>
                    </div>
                    </ul>
                )
            })}

        </div>
                        
                    </li>


                        </div>
                    )
                }
                })}
            </ol>
        </div>
    )
}

export default PredictionLog;