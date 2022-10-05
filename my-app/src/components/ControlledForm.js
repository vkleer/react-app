import React, { Component } from 'react'

export class ControlledForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: ''
        }
    }

    handleNameChange = (event) => {
        this.setState ({ 
            name: event.target.value,
        })
    }

    render() {
        return (
            <div>
                <form>
                    <label htmlFor='name'>Name:</label>
                    <input 
                        value={this.state.name} onChange={this.handleNameChange} 
                        id='name' name='name' type='text' 
                    />
                    <input type='submit' value='Submit' />
                </form>
            </div>
        )
    }
}

export default ControlledForm