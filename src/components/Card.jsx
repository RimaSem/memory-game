import React, { useState } from "react";

function Card(props) {
  return (
    <div className="card">
      <img src={props.src} />
    </div>
  );
}

export default Card;
