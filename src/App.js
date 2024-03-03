import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleButtonClick = () => {
    setMessage(`Hi Welcome ${name}`);
  };

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleInputChange}
      />
      <button onClick={handleButtonClick}>Submit</button>
      <p>{message}</p>
    </div>
  );
}

export default App;
