import React, { useState } from "react";
import "./App.css";

function App() {
  const [likeCounter, setLikeCounter] = useState(0);
  const [userInput, setUserInput] = useState("");

  function likeCounterHandler() {
    setLikeCounter(likeCounter + 1);
  }

  function userInputHandler(event) {
    setUserInput(event.target.value);
  }

  function clearStateHandler() {
    setLikeCounter(0);
    setUserInput("");
  }

  return (
    <div className="App">
      <div>
        <input onChange={userInputHandler} id="userInput" />
        <label for="userInput"> Enter your name here </label>
      </div>
      <div>
        <h3>Hello {userInput} </h3>
      </div>
      <div>
        <button onClick={likeCounterHandler}> Like me !! </button>
        <span>{likeCounter}</span>
      </div>
      <div>
        <button onClick={clearStateHandler}> Clear state </button>
      </div>
    </div>
  );
}

export default App;
