import React  from 'react'
import PredictionsCard from './PredictionsCard.js'

function PredictionLog({current_user, predictions, setPredictions, setCurrentUser }) {


    // console.log(current_user.test)
    

    function handleDelete(event, prediction) {
        fetch(`users/${current_user.id}/predictions/${prediction.id}`, {
            method: 'DELETE',
        })
        .then( r => r.json())
        .then( data => deletePrediction(prediction)) 

    }

    function deletePrediction(p) {
        let predIndx = current_user.predictions.findIndex((pred) => { return pred.id === p.id})
        current_user.predictions.splice(predIndx, 1)
        console.log(current_user)
        const newUser = [current_user]
        console.log(newUser)
        // setPredictions(deletedPredictions)
        setCurrentUser(newUser)
        // console.log(current_user)
    }

    // function deleteWalk(walk) {
    //     let index = dog.walks.findIndex((w) => { return w.id === walk.id})
    //     dog.walks.splice(index, 1)
    //     const newDogs = [...dogs]
    //     setDogs(newDogs)
    // }

    function editPrediction(p, game,  showForm) {
        let filteredPredictions = predictions.filter( (prediction) => prediction.id !== p.id )
        const newPredictions = [...filteredPredictions, p]
        setPredictions(newPredictions)
        showForm()
    }

    
 

    return (
        <div>
            <h1>{current_user.username}'s Predictions: </h1>
            <ol>
                { current_user.test ? current_user.test.map((p) => {
                    
                        
                        return (
                            
                                
                               <PredictionsCard key={p.id} handleDelete={handleDelete} editPrediction={editPrediction} current_user={current_user} prediction={p}/>
                            )
                        
                        }) : null}
                    </ol>
        </div>
    )
}

export default PredictionLog;