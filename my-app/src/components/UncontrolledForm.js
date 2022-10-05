import React, { Component } from 'react'

export class UncontrolledForm extends Component {

    constructor(props) {
        super(props)
        this.inputName = React.createRef();
        this.inputCategory = React.createRef();
        this.inputComments = React.createRef();
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.inputName.current.value);
        console.log(this.inputCategory.current.value);
        console.log(this.inputComments.current.value);
    }

    render() {
        return (
            <div>
                <h1>Please fill out the form below.</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor='name'>Name:</label>
                    <input 
                        ref={this.inputName}
                        id='name' name='name' type='text' 
                    />
                    </div>
                    <div>
                        <label htmlFor='category'>Category:</label>
                    <select 
                        ref={this.inputCategory}
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
                            ref={this.inputComments}
                            id='comments' name='comments' 
                        />
                    </div>
                    <input type='submit' value='Submit' />
                </form>
            </div>
        )
    }
}

export default UncontrolledForm