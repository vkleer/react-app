import React, { Component } from 'react'

export class LifeCycleCWUTracker extends Component {

  constructor(props) {
    super(props)

    this.state = {
      mouseX: 0,
      mouseY: 0,
    }
  }

  trackMouse = e => {
    console.log('Mouse moved')
    this.setState({
      mouseX: e.clientX,
      mouseY: e.clientY,
    })
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.trackMouse);
  }

  componentWillUnmount() {
    console.log('Unmounting');
    window.removeEventListener('mousemove', this.trackMouse);
  }

  render() {
    return (
      <div>
        <h1>Tracking Mouse...</h1>
        <p>X: {this.state.mouseX} Y: {this.state.mouseY}</p>
      </div>
    )
  }
}

export default LifeCycleCWUTracker