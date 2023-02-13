import React from "react";
import Scoreboard from "./Scoreboard";

function Header({ currentScore, bestScore }) {
  return (
    <div className="header-container">
      <div className="header-title">
        <h2>Game of Thrones</h2>
        <h3>Memory Game</h3>
      </div>
      <Scoreboard currentScore={currentScore} bestScore={bestScore} />
    </div>
  );
}

export default Header;
