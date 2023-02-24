import React from "react";

function InfoModal({ start }) {
  return (
    <div className="modal-container">
      <div className="modal">
        <h3 className="modal-title">How to play</h3>
        <p className="modal-text">
          The goal of the game is to click on all 20 unique cards without
          choosing the same card twice. The cards are shuffled every time they
          are clicked. If you choose the same card twice, your score will be
          reset. Let's test your memory!
        </p>
        <button className="start-btn" onClick={start}>
          Start the game
        </button>
      </div>
    </div>
  );
}

export default InfoModal;
