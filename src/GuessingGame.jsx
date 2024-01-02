import React, { useEffect, useState } from "react";

const NumberGuessingGame = (props) => {
  const [randomNumber, setRandomNumber] = useState();
  const [inputNumber, setInputNumber] = useState();
  const [message, setMessage] = useState("");

  useEffect(() => {
    const num = Math.round(Math.random(100) * 20);
    setRandomNumber(num)
  }, []);

  const handleInputChange = (e) => {
  
    setInputNumber(e.target.value);
  };

  useEffect(() => {
    
    checkNumber();
  }, [inputNumber]);

  const checkNumber = () => {
    if (!inputNumber) {
        setMessage("Enter a number");
    }
    else if (inputNumber == randomNumber) {
        setMessage("Congratulations! Correct guess");

    }  else {
        setMessage(inputNumber < randomNumber ? "Too low! Try a higher number." : "Too high! Try a lower number.");
    }

  };

  return (
    <div>
        <h1 >Number Guessing Game</h1>
      <h4> Guess a number between 1 to 20</h4>
      <input
        type="number"
        min={0}
        max={20}
        value={inputNumber}
        onChange={handleInputChange}
      />
      <br />
      {message}
    </div>
  );
};

export default NumberGuessingGame;