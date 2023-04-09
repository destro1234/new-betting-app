import React  from 'react'
import PredictionsCard from './PredictionsCard.js'

function PredictionLog({current_user, predictions, setPredictions, setCurrentUser }) {
    
    function handleDelete(event, prediction) {
        console.log(prediction)
        fetch(`users/${current_user.id}/predictions/${prediction.id}`, {
            method: 'DELETE',
        })
        .then( r => r.json())
        .then( data => {
            deletePrediction(prediction)})

    }

    function deletePrediction(p) {
    
        let predIndx = current_user.predictions.findIndex((pred) => { return pred.id === p.id})
        let testIndx = current_user.test.findIndex((test) => { return test.prediction === p})
        
        current_user.predictions.splice(predIndx, 1)
        current_user.test.splice(testIndx, 1)
        const newUser = {...current_user}
        setCurrentUser(newUser)
    }


    function editPrediction(p, showForm) {
    
        let filteredPredictions = current_user.predictions.filter( (prediction) => prediction.id !== p.id )
        let filteredTest = current_user.test.filter((test) => { return test.prediction.id !== p.id })
        let editedTest = {winner: p.winner, reason: p.reason, game_description: `${p.game.home_team} vs. ${p.game.away_team}`, prediction: p}

    
        current_user.predictions = [...filteredPredictions, p]
        current_user.test = [...filteredTest, editedTest ]

        
        const newUser = {...current_user}
        console.group(newUser)
        setCurrentUser(newUser)
        
    
        showForm()
    }

    // function editWalk(walk) {
        
    //     const filteredWalks = dog.walks.filter( w => { return w.id !== walk.id})
    //     const newWalks = [...filteredWalks, walk]
    //     dog.walks = newWalks
    //     const newDogs = [...dogs]
    //     setDogs(newDogs.sort((a, b) => { return a.id - b.id }))

    // }

    
 

    return (
        <div>
            <h1>{current_user.username}'s Predictions: </h1>
            <ol>
                { current_user.test ? current_user.test.map((t) => {
                    
                        
                        return (
                            
                                
                               <PredictionsCard key={t.id} handleDelete={handleDelete} editPrediction={editPrediction} current_user={current_user} test={t}/>
                            )
                        
                        }) : null}
                    </ol>
        </div>
    )
}

export default PredictionLog;