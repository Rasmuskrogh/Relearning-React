import React, { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Rersults from "./components/Rersults";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    anualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  };

  return (
    <>
      <Header />
      <UserInput onChangeInput={handleChange} />
      <Results />
    </>
  );
}

export default App;
