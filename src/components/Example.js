import React from "react";
import { Component } from "react";

class Example extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    render() {
        return (
            <div>
                <h2>Component: You clicked {this.state.count} times</h2>
                <button onClick={ () => this.setState({ count: this.state.count + 1}) }>Component: Tăng Count</button>
            </div>
        );
    }
}

export default Example;