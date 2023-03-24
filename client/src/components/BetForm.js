import React from 'react'

function BetForm () {
    return (
        <div>
               <form>
          <h3> Game Prediction: </h3>
          <label>Choose winner: </label>
          <input type="text" placeholder="winner"></input>
          <label> Reason: </label>
          <input type="textarea" placeholder="reason"></input>
          <button type="submit">Submit</button>
        </form>
        </div>
    )
}

export default BetForm;