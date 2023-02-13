import React, { useContext } from "react";

function Scoreboard({ currentScore, bestScore }) {
  return (
    <div className="scoreboard">
      <div className="current-score">
        Current score: <span>{currentScore}</span>
      </div>
      <div className="best-score">
        Best score: <span>{bestScore}</span>
      </div>
    </div>
  );
}

export default Scoreboard;
