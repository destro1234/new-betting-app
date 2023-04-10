import React, {useContext}  from 'react'
import PredictionsCard from './PredictionsCard.js'
import {UserContext} from '../context/user.js'


function PredictionLog() {

    const { currentUser, setCurrentUser } = useContext(UserContext)
    
    function handleDelete(event, prediction) {
        console.log(prediction)
        fetch(`users/${currentUser.id}/predictions/${prediction.id}`, {
            method: 'DELETE',
        })
        .then( r => r.json())
        .then( data => {
            deletePrediction(prediction)})

    }

    function deletePrediction(p) {
    
        let predIndx = currentUser.predictions.findIndex((pred) => { return pred.id === p.id})
        let testIndx = currentUser.test.findIndex((test) => { return test.prediction === p})
        
        currentUser.predictions.splice(predIndx, 1)
        currentUser.test.splice(testIndx, 1)
        const newUser = {...currentUser}
        setCurrentUser(newUser)
    }


    function editPrediction(p, showForm) {
    
        let filteredPredictions = currentUser.predictions.filter( (prediction) => prediction.id !== p.id )
        let filteredTest = currentUser.test.filter((test) => { return test.prediction.id !== p.id })
        let editedTest = {winner: p.winner, reason: p.reason, game_description: `${p.game.home_team} vs. ${p.game.away_team}`, prediction: p}

    
        currentUser.predictions = [...filteredPredictions, p]
        currentUser.test = [...filteredTest, editedTest ]

        
        const newUser = {...currentUser}
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
            <h1>{currentUser.username}'s Predictions: </h1>
            <ol>
                { currentUser.test ? currentUser.test.map((t) => {
                    
                        
                        return (
                            
                                
                               <PredictionsCard key={t.id} handleDelete={handleDelete} editPrediction={editPrediction} test={t}/>
                            )
                        
                        }) : null}
                    </ol>
        </div>
    )
}

export default PredictionLog;