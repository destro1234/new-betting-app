import React from 'react'

function PredictionLog({current_user}) {
    console.log(current_user.predictions)
    return (
        <div>
            <h1>{current_user.username}'s Predictions: </h1>
            <ol>
                {current_user.predictions.map((g) => {
                    console.log(g)
                    console.log(current_user.predictions)
                    // return <GameCard game={g} user={current_user} />
                })}
            </ol>
        </div>
    )
}

export default PredictionLog;