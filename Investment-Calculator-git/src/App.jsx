import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Results from "./components/Results";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput, 
        [inputIdentifier]:Number(newValue) || 0
      }
    });
  }

  return (
    <>
      <Header />
      <br />
      <Form userInput={userInput} onChange={handleChange}/>
      <Results input={userInput}/>
    
    </>
  );
}

export default App;
