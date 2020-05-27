import React from 'react'

const display = {
    border: '0px',
    padding: '10px 10px',
    backgroundColor: '#f3f3f3',
    fontColor: '#333',
    fontSize: '16px',
    marginBottom: '10px'

}

const Input = (props) => (<input style={display} type='text' value={props.equation} disabled='true' />);

export default Input
