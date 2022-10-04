import React, { Component } from 'react'
import MethodsAsPropsChild from './MethodsAsPropsChild'

export class MethodsAsPropsParent extends Component {
    constructor(props) {
        super(props);
        this.state = {
           isLoggedIn: false,
        }
    }

    handleSignInOut = () => {
        this.setState((prevState) => ({
          isLoggedIn: !prevState.isLoggedIn,
        }));
      };

    render() {
      return (
        <div>
            <MethodsAsPropsChild 
                isLoggedIn={this.state.isLoggedIn} 
                handleSignInOut={this.handleSignInOut} 
            />
        </div>
      )
    }
}

export default MethodsAsPropsParent