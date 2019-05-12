import React, { Component } from 'react';

class Custombutton extends Component {
    render() {
        return (
            <button
                className="btn"
                onClick={this.props.onClick}>
                {this.props.children}
            </button>
        );
    }
}

export default Custombutton;