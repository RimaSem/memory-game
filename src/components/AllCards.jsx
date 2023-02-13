import React, { useState } from "react";
import Card from "./Card";

function AllCards(props) {
  const displayCards = props.data.map((obj) => (
    <Card key={obj.name} src={obj.src} />
  ));
  return <div className="all-cards-container">{displayCards}</div>;
}

export default AllCards;
