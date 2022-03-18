import React from "react";

function randomQuestion() {}

type MentalCardProps = {
  questions: { question: string; reponse: string }[];
  name: string;
};

const MentalCards = ({ questions, name }: MentalCardProps): JSX.Element => {
  const [questionDisplayed, setQuestionDisplayed] = React.useState(true);
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={() => setQuestionDisplayed(!questionDisplayed)}>
        {questionDisplayed ? questions[1].question : questions[1].reponse}
      </button>
    </div>
  );
};

export default MentalCards;
