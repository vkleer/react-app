import React from 'react'

function EventsFunctional() {
    function clickHandler() {
        console.log("Clicked the functional component button")
    }
  return (
    <div>
        <button onClick={clickHandler}>Click - Functional component</button>
    </div>
  )
}

export default EventsFunctional