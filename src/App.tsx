import React from "react";
import cards from "./data/questions";
import "./App.css";

import MentalCards from "./components/mentalCard";
import "./App.css";

const App = () => {
  return (
    <div id="app" className="container default-flex">
      <MentalCards questions={cards} name={"Mental Card"} />
    </div>
  );
};

export default App;
