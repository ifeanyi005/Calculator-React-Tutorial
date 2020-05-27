import React, { Component } from 'react'
import CalButtons from './CalButtons'
import Input from './Input'




export class Calculator extends Component {
    constructor(props) {
        super(props)

        this.state = {
            equation: ''
        }
        this.buttonPressed = this.buttonPressed.bind(this);
        this.buttonClear = this.buttonClear.bind(this);
        this.buttonEqual = this.buttonEqual.bind(this);
        this.buttonBackSpace = this.buttonBackSpace.bind(this);

    }
    buttonPressed(text) {
        this.setState((prev) => (
            {
                equation: prev.equation + text
            }
        ))
    }

    buttonEqual() {
        const result = eval(this.state.equation);
        this.setState({ equation: result.toString() });
    }

    buttonClear() {
        this.setState((prev) => ({
            equation: prev.equation.length <= 1 ? '' : ''
        }));
    }
    buttonBackSpace() {
        this.setState((prev) => ({
            equation: prev.equation.length <= 1 ? '' : prev.equation.slice(0, -1)
        }));
    }

    render() {
        const myStyle = {
            display: 'inline-flex',
            marginBottom: '5px'

        }
        const equalStye = {
            width: '120px',
            padding: '7px',
            borderRadius: '3px',
            background: '#1b364d',
            color: '#fff',
            fontSize: '20px'
        }
        // const Input = (props) => (<input type='text' value={props.equation} disabled='true' />);
        return (
            <div>
                <Input equation={this.state.equation} />
                <br />
                <div style={myStyle}>
                    <CalButtons text='1' buttonPressed={this.buttonPressed} />
                    <CalButtons text='2' buttonPressed={this.buttonPressed} />
                    <CalButtons text='3' buttonPressed={this.buttonPressed} />
                    <CalButtons text='4' buttonPressed={this.buttonPressed} />
                </div>
                <br />
                <div style={myStyle}>
                    <CalButtons text='5' buttonPressed={this.buttonPressed} />
                    <CalButtons text='6' buttonPressed={this.buttonPressed} />
                    <CalButtons text='7' buttonPressed={this.buttonPressed} />
                    <CalButtons text='8' buttonPressed={this.buttonPressed} />
                </div>
                <br />
                <div style={myStyle}>
                    <CalButtons text='9' buttonPressed={this.buttonPressed} />
                    <CalButtons text='0' buttonPressed={this.buttonPressed} />
                    <CalButtons text='+' buttonPressed={this.buttonPressed} />
                    <CalButtons text='-' buttonPressed={this.buttonPressed} />
                </div>
                <br />
                <div style={myStyle}>
                    <CalButtons text='*' buttonPressed={this.buttonPressed} />
                    <CalButtons text='/' buttonPressed={this.buttonPressed} />
                    <CalButtons text=' ← ' buttonPressed={this.buttonBackSpace} />
                    <CalButtons text='C' buttonPressed={this.buttonClear} />

                </div><br />
                <button style={equalStye} onClick={this.buttonEqual}> = </button>
            </div>
        )
    }
}

export default Calculator
