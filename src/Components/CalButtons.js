import React, { Component } from 'react'

export class CalButtons extends Component {
    constructor(props) {
        super(props)

        this.buttonClicked = this.buttonClicked.bind(this);

    }
    buttonClicked() {
        this.props.buttonPressed(this.props.text)
    }

    render() {
        const buttonStyle = {
            padding: '10px',
            marginLeft: '2px',
            borderRadius: '3px',

        }
        return (
            <div >
                <button style={buttonStyle} onClick={this.buttonClicked}>{this.props.text}</button>
            </div>
        )
    }
}

export default CalButtons
