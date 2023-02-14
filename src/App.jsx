import React, { useState } from "react";
import InfoModal from "./components/InfoModal";
import Header from "./components/Header";
import AllCards from "./components/AllCards";

function App() {
  const savedScore = localStorage.getItem("bestScore")
    ? localStorage.getItem("bestScore")
    : 0;
  const [startGame, setStartGame] = useState(true);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(savedScore);

  function start() {
    setStartGame(true);
  }

  function updateCurrentScore(newScore) {
    setCurrentScore(newScore);
  }

  function updateBestScore(newScore) {
    setBestScore(newScore);
  }

  return (
    <div className="App">
      <Header currentScore={currentScore} bestScore={bestScore} />

      {!startGame ? (
        <InfoModal start={start} />
      ) : (
        <AllCards
          currentScore={currentScore}
          updateCurrentScore={updateCurrentScore}
          bestScore={bestScore}
          updateBestScore={updateBestScore}
        />
      )}
    </div>
  );
}

export default App;
