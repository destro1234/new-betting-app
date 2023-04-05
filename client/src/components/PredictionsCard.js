import React, { useState } from 'react'
import EditPredictionForm from "./EditPredictionForm.js"

function PredictionsCard ({current_user, handleDelete, editPrediction, prediction }) {

    const [ editClicked, setEditClicked] = useState(false)

    function showForm() {
        setEditClicked(!editClicked)
    }

  

    

    return(
        <div>
            <li>
                    
                                    
                                    <div>
                                        <h2>{prediction.game.home_team} vs. {prediction.game.away_team}</h2>
                                        <br></br>
                                        <h3>Prediction</h3>
                                            <h4>WINNER:</h4>
                                            <p>{prediction.winner}</p>
                                            
                                            <h4>REASON:</h4>
                                            <p>"{prediction.reason}"</p>
                                    
                                        <button onClick={(event) => handleDelete(event, prediction)}> Delete Prediction </button>
                                        <button onClick={(event) => showForm(event)}> Edit Prediction </button>

                                        { editClicked ? <EditPredictionForm editPrediction={editPrediction} prediction={prediction} game={prediction.game} showForm={showForm} current_user={current_user}/> : null }
                                        </div>
                                      
                 </li>
                </div>
                    

    )
    
        
}

export default PredictionsCard;