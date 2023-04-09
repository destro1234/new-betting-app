import React, { useState } from 'react'

function EditPredictionForm ({test, editPrediction, showForm, current_user }) {
    console.log(test)
    const [winner, setWinner] = useState("")
    const [reason, setReason] = useState("")

    function changeWinner (event) {
        setWinner(event.target.value)
    }

    function changeReason (event) {
        setReason(event.target.value)
    }

    function handleUpdate (event) {
        event.preventDefault()
        fetch(`users/${current_user.id}/predictions/${test.prediction.id}`, {
            method: "PATCH",
            headers: { "Content-Type" : "application/json"},
            body: (JSON.stringify({
                winner: winner,
                reason: reason
                
            })),
        })
        .then( r => r.json())
        .then( data => editPrediction(data, showForm))
    }

    return ( 
        <div>
            <form>

            <h3>Edit your prediction: </h3>

          <label>Change Winner: </label>
          <br></br>
          <input onChange={changeWinner} type="text" placeholder={`${test.winner}`}></input>
          <br></br>
          <label>Change Reason: </label>
          <br></br>
          <textarea rows={4} cols={50} onChange={changeReason} type="text" ></textarea>
          <button onClick={(event) => handleUpdate(event)} type="submit">Submit</button>
        </form>
        </div>
    )
}


export default EditPredictionForm;