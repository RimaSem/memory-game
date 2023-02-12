import React from "react";
import Scoreboard from "./Scoreboard";

function Header() {
  return (
    <div className="header-container">
      <div className="header-title">
        <h2>Game of Thrones</h2>
        <h3>Memory Game</h3>
      </div>
      <Scoreboard />
    </div>
  );
}

export default Header;
