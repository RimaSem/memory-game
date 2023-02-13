import React, { useState } from "react";
import { shuffle } from "lodash";
import data from "../assets/data.json";

function AllCards({
  updateCurrentScore,
  currentScore,
  updateBestScore,
  bestScore,
}) {
  const [cards, setCards] = useState(data);

  function play(e) {
    const cardClass = e.target.className;
    let newCards = [...cards];
    const card = newCards.find((card) => card.name === cardClass);

    if (card.isClicked === true) {
      if (currentScore > bestScore) {
        updateBestScore(currentScore);
      }
      newCards = cards.map((card) => {
        return { ...card, isClicked: false };
      });
      updateCurrentScore(0);
    } else {
      newCards = cards.map((card) =>
        card.name === cardClass ? { ...card, isClicked: true } : card
      );
      updateCurrentScore(currentScore + 1);
    }
    setCards(shuffle(newCards));
  }

  return (
    <div className="all-cards-container">
      {cards.map((card) => (
        <div className="card" key={card.name}>
          <img className={card.name} src={card.src} onClick={(e) => play(e)} />
        </div>
      ))}
    </div>
  );
}

export default AllCards;
