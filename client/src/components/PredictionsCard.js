import React, { useState } from 'react'
import EditPredictionForm from "./EditPredictionForm.js"

function PredictionsCard ({current_user, handleDelete, editPrediction, test }) {
    

    const [ editClicked, setEditClicked] = useState(false)

    function showForm() {
        setEditClicked(!editClicked)
    }
    
    return(
        <div>
            <li>
                    
                                    
                <div>
                    <h2>{test.game_description}</h2>
                    <br></br>
                    <h3>Prediction</h3>
                    <h4>WINNER:</h4>
                    <p>{test.winner}</p>
                                            
                    <h4>REASON:</h4>
                    <p>"{test.reason}"</p>
                                    
                    <button onClick={(event) => handleDelete(event, test.prediction)}> Delete Prediction </button>
                    <button onClick={(event) => showForm(event)}> Edit Prediction </button>

                    { editClicked ? <EditPredictionForm editPrediction={editPrediction}  test={test} showForm={showForm} current_user={current_user}/> : null }
                    </div>
                                      
                 </li>
                </div>
                    

    )
    
        
}

export default PredictionsCard;