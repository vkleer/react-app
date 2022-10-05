import React, { Component } from 'react'

export class ControlledForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            category: 'website',
            comments: '',
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState ({ 
            [name]: value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <h1>Please fill out the form below.</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor='name'>Name:</label>
                    <input 
                        value={this.state.name} onChange={this.handleChange} 
                        id='name' name='name' type='text' 
                    />
                    </div>
                    <div>
                        <label htmlFor='category'>Category:</label>
                    <select 
                        value={this.state.category} onChange={this.handleChange} 
                        id='category' name='category'
                    >
                        <option value='website'>Website issue</option>
                        <option value='order'>Order issue</option>
                        <option value='general'>General inquiry</option>
                    </select>
                    </div>
                    <div>
                        <label htmlFor='comments'>Comments:</label>
                        <textarea 
                            value={this.state.comments} onChange={this.handleChange}
                            id='comments' name='comments' 
                        />
                    </div>
                    <input type='submit' value='Submit' />
                </form>
            </div>
        )
    }
}

export default ControlledForm