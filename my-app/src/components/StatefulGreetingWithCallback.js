import React from "react"

class StatefulGreetingWithCallback extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello",
            buttonText: "Exit",
            count: 0,
        };
    }

    handleClick() {
        this.setState((prevState, prevProps) => {
            console.log("Previous state: ", prevState);
            console.log("Previous props: ", prevProps);
            return {
                introduction: prevState.introduction === "Hello" ? "Goodbye" : "Hello",
                buttonText: prevState.buttonText === "Exit" ? "Enter" : "Exit",
            }
        })
    }

    increment() {
        this.setState((prevState, prevProps) => {
            console.log("Previous state: ", prevState);
            console.log("Previous props: ", prevProps);
            return {
                count: prevState.count + 1
            }
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.introduction}</h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                <h2>You've clicked {this.state.count} times</h2>
                <button onClick={() => this.increment()}>Add 1</button>
            </div>
        )
    }
}

export default StatefulGreetingWithCallback;