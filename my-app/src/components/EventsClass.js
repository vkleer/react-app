import React, { Component } from 'react'

export class EventsClass extends Component {
    clickHandler() {
        console.log("Clicked the class component button")
    }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click - Class component</button>
      </div>
    )
  }
}

export default EventsClass