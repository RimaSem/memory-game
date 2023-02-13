import React, { useState } from "react";
import Header from "./components/Header";
import AllCards from "./components/AllCards";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  function updateCurrentScore(newScore) {
    setCurrentScore(newScore);
  }

  function updateBestScore(newScore) {
    setBestScore(newScore);
  }

  return (
    <div className="App">
      <Header currentScore={currentScore} bestScore={bestScore} />
      <AllCards
        currentScore={currentScore}
        updateCurrentScore={updateCurrentScore}
        bestScore={bestScore}
        updateBestScore={updateBestScore}
      />
    </div>
  );
}

export default App;
