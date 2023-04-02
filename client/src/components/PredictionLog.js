import React, { useEffect, useState }  from 'react'
import PredictionsCard from './PredictionsCard.js'

function PredictionLog({current_user, setGames,  games, predictions, setPredictions }) {

console.log(current_user.predictions)
console.log(predictions)
    

    function handleDelete(event, prediction) {
        fetch(`users/${current_user.id}/predictions/${prediction.id}`, {
            method: 'DELETE',
        })
        .then( r => r.json())
        .then( data => deletePrediction(prediction)) 

    }

    function deletePrediction(p) {
        let deletedPredictions = predictions.filter( (prediction) => prediction.id !== p.id )
        setPredictions(deletedPredictions)
    }

    function editPrediction(p, game, showForm) {
        let filteredPredictions = predictions.filter( (prediction) => prediction.id !== p.id )
        const newPredictions = [...filteredPredictions, p]
        setPredictions(newPredictions)
        // game.predictions = newPredictions
        // const editedGames = [...games]
        // setGames(editedGames.sort((a, b) => { return a.id - b.id }))
        showForm( )
    }

    
 

    return (
        <div>
            <h1>{current_user.username}'s Predictions: </h1>
            <ol>
                { predictions.map((p) => {
                    
                        
                        return (
                            <div>
                                
                               <PredictionsCard handleDelete={handleDelete} editPrediction={editPrediction} current_user={current_user} prediction={p}/>
                            </div>)
                        
                        })}
                    </ol>
        </div>
    )
}

export default PredictionLog;