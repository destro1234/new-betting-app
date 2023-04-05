import React  from 'react'
import PredictionsCard from './PredictionsCard.js'

function PredictionLog({current_user, predictions, setPredictions }) {

    

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

    function editPrediction(p, showForm) {
        let filteredPredictions = predictions.filter( (prediction) => prediction.id !== p.id )
        const newPredictions = [...filteredPredictions, p]
        setPredictions(newPredictions)
        showForm( )
    }

    
 

    return (
        <div>
            <h1>{current_user.username}'s Predictions: </h1>
            <ol>
                { predictions.map((p) => {
                    
                        
                        return (
                            
                                
                               <PredictionsCard key={p.id} handleDelete={handleDelete} editPrediction={editPrediction} current_user={current_user} prediction={p}/>
                            )
                        
                        })}
                    </ol>
        </div>
    )
}

export default PredictionLog;