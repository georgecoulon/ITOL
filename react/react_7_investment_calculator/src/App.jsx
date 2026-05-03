import Header from './components/Header.jsx'
import './App.css'
import UserInput from './components/UserInput';
import OutputData from './components/OutputData.jsx';

function App() {
  
  return (
    <>
      <Header />
      <UserInput userInput={userInput} onInputChange={handleChange} />
      <OutputData inputValue={userInput} />
    </>
  )
}

export default App
