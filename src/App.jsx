import React, { useState } from "react";
import data from "./assets/data.json";
import Header from "./components/Header";
import AllCards from "./components/AllCards";

function App() {
  const [cards, setCards] = useState(data);

  return (
    <div className="App">
      <Header />
      <AllCards data={cards} />
    </div>
  );
}

export default App;
