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

    function editPrediction(prediction, game, showForm) {
        let filteredPredictions = game.predictions.filter( (p) => p.id !== prediction.id )
        const newPredictions = [...filteredPredictions, prediction]
        game.predictions = newPredictions
        const editedGames = [...games]
        setGames(editedGames.sort((a, b) => { return a.id - b.id }))
        showForm()
    }
 

    return (
        <div>
            <h1>{current_user.username}'s Predictions: </h1>
            <ol>
                { games.map((g) => {
                    if (g.predictions.length > 0) {
                        return (
                            <div>
                                <PredictionsCard game={g} handleDelete={handleDelete} editPrediction={editPrediction}/>
                            </div>)}})}
                    </ol>
        </div>
    )
}

export default PredictionLog;