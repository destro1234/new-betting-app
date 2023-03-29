import React from 'react'

function PredictionsCard ({current_user, prediction}) {
    console.log(prediction.game)
    return(
        <div>


                    <ul>
                        <div>
                        {/* <h3>{prediction.game.home_team} vs. {prediction.game.away_team}</h3> */}

                            <h3>Predictions</h3>
                    <li>WINNER: {prediction.winner}</li>
                    <li>REASON: {prediction.reason} </li>
                    </div>
                    </ul>
                
        </div>

    )
    
        
}

export default PredictionsCard;