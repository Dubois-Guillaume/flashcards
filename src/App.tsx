import React from "react";
import cards from "./data/cards";
import "./App.css";

import FlashCards from "./components/flashCards";
import "./App.css";

const App = () => {
  return (
    <div id="app" className="container default-flex">
      <FlashCards product={cards} />
    </div>
  );
};

export default App;
