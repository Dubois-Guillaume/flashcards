import React from "react";

const Flashcards = ({ product }) => {
  const [flashCard, setFlashCard] = React.useState(true);
  return (
    <div>
      <button onClick={() => setFlashCard(!flashCard)}>
        {flashCard ? product[0].question : product[0].reponse}
      </button>
    </div>
  );
};

export default Flashcards;
