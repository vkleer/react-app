import React, { Component } from 'react'

export class LifeCyclesCDUChild extends Component {
    constructor(props) {
        console.log('Child constructor called');
        super(props)
        this.state = {
            greeting: 'Child hello!',
        }
    }

    updateGreeting = () => {
        console.log('Child update greeting called');
        this.setState(prevState => {
            return {
                greeting: prevState.greeting === 'Child hello!' ? 'Child goodbye!' : 'Child hello!'
            }
        })
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Child component updated');
        console.log(prevProps, prevProps);
        if (prevProps.parentGreeting !== this.props.parentGreeting) {
            console.log('Parent greeting has changed');
        }
    }

  render() {
    return (
        <div>
            <h1>{this.state.greeting}</h1>
            <button onClick={this.updateGreeting}>Update greeting</button>
        </div>
    )
  }
}

export default LifeCyclesCDUChild