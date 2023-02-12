import React from "react";

function Scoreboard() {
  return (
    <div className="scoreboard">
      <div className="current-score">
        Current score: <span>0</span>
      </div>
      <div className="best-score">
        Best score: <span>0</span>
      </div>
    </div>
  );
}

export default Scoreboard;
