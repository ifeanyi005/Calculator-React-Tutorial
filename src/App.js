import React from 'react';
import logo from './logo.svg';
import './App.css';
import Calculator from './Components/Calculator';

function App() {
  const centerStyle = {
    textAlign: 'center',
    margin: '0 auto',
    marginTop: '20px'
  }
  return (
    <div style={centerStyle}>
      <Calculator />
    </div>
  );
}

export default App;
