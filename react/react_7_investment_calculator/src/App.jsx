import { useState } from 'react';
import Header from './components/Header.jsx'
import './App.css'
import UserInput from './components/UserInput.jsx';
import OutputData from './components/OutputData.jsx';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      [inputIdentifier]: +newValue
    }));
  };

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onInputChange={handleChange} />
      <OutputData inputValue={userInput} />
    </>
  )
}

export default App
