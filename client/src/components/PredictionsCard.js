import React, { useState } from 'react'
import EditPredictionForm from "./EditPredictionForm.js"

function PredictionsCard ({ game, handleDelete, editPrediction }) {

    const [ editClicked, setEditClicked] = useState(false)

    function showForm() {
        setEditClicked(!editClicked)
    }

    

    return(
        <div>
            <li>
                <h2>{game.home_team} vs. {game.away_team}</h2>
                    <div>
                        {game.predictions.map((p) => {
                            return (
                                
                                    <div>
                                        <h3>Prediction</h3>
                                            <h4>WINNER:</h4>
                                            <p>{p.winner}</p>
                                            
                                            <h4>REASON:</h4>
                                            <p>"{p.reason}"</p>
                                    
                                        <button onClick={(event) => handleDelete(event, p, game)}> Delete Prediction </button>
                                        <button onClick={(event) => showForm(event)}> Edit Prediction </button>

                                        { editClicked ? <EditPredictionForm editPrediction={editPrediction} prediction={p} game={game} showForm={showForm}/> : null }
                                        </div>
                                        )
                                                    }
                                                )}
                </div>
                 </li>
                </div>
                    

    )
    
        
}

export default PredictionsCard;