import React from 'react'
import PredictionsCard from './PredictionsCard.js'

function PredictionLog({current_user, setGames,  games}) {

    function handleDelete(event, p, g) {
        fetch(`/predictions/${p.id}`, {
            method: 'DELETE',
        })
        .then( r => r.json())
        .then( data => deletePrediction(data, p, g)) 

    }

    function deletePrediction(data, p, g) {
        let deletedPredictions = g.predictions.filter( (prediction) => prediction.id !== p.id )
    
        g.predictions = deletedPredictions
        const newGames = [...games]
        setGames(newGames.sort((a, b) => { return a.id - b.id }))
    }

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
                                                <h3>Prediction</h3>
                                                <li>WINNER: {p.winner}</li>
                                                <li>REASON: {p.reason} </li>
                                            </div>
                                            <button onClick={(event) => handleDelete(event, p, g)}> Delete Prediction </button>
                                        </ul>
                                            )
                                            }
                                        )}
                </div>
                 </li>
                </div>
                    )}})}
                    </ol>
        </div>
    )
}

export default PredictionLog;