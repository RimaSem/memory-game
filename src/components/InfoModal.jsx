import React from "react";

function InfoModal({ start }) {
  return (
    <div className="modal-container">
      <div className="modal">
        <h3 className="modal-title">How to play</h3>
        <p className="modal-text">
          The aim of the game is to click on cards without repeating the same
          card. The cards are shuffled every time they are clicked. If you click
          the same card two times, your score will reset. Let's test your
          memory!
        </p>
        <button className="start-btn" onClick={start}>
          Start the game
        </button>
      </div>
    </div>
  );
}

export default InfoModal;
