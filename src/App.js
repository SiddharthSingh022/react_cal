import React, { useState } from 'react';
import './App.css';

function App() {
  const [birthDate, setBirthDate] = useState('');
  const [ageYears, setAgeYears] = useState(null);
  const [ageDays, setAgeDays] = useState(null);

  const calculateAge = () => {
    const today = new Date();
    const birth = new Date(birthDate);
    const ageDiff = today - birth;
    const ageDate = new Date(ageDiff);
    const calculatedYears = Math.abs(ageDate.getUTCFullYear() - 1970);
    const calculatedDays = Math.floor(ageDiff / (1000 * 60 * 60 * 24));

    setAgeYears(calculatedYears);
    setAgeDays(calculatedDays);
  };

  return (
    <div className="App">
      <h1>Age Calculator</h1>
      <h4>Enter your date of Birth</h4>
      <input
        type="date"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
      />
      <br />
      <button className="blue-button" onClick={calculateAge}>Calculate Age</button>
      {ageYears !== null && <h1>Your age is {ageYears} years and {ageDays} days old.</h1>}</div>
  );
}

export default App;
