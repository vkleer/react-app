import React, { Component } from 'react'
import LifeCycleCWUTracker from './LifeCycleCWUTracker'

export class LifeCyclesCWU extends Component {
    constructor(props) {
        super(props)

        this.state = {
            visible: true
        }
    }

    toggleDisplay = () => {
        this.setState((prevState) => ({ visible: !prevState.visible }))
    }

    render() {
        return (
            <div>
                {this.state.visible && <LifeCycleCWUTracker />}
                <button onClick={this.toggleDisplay}>Toggle Display</button>
            </div>
        )
    }
}

export default LifeCyclesCWU