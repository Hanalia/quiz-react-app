import React, { useState, useEffect } from "react";

// Types
import { AnswerObject } from "../App";
// Styles
import { Wrapper, ButtonWrapper } from "./QuestionCard.styles";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNr: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => {
  return (
    <Wrapper>
      <p className="number">
        Question: {questionNr} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answers.map((answer) => (
          <ButtonWrapper
            key={answer}
            correct={userAnswer?.correctAnswer === answer}
            userClicked={userAnswer?.answer === answer}
          >
            <button
              // className="flex justify-between items-center p-3"
              className="flex justify-between text-blue-700 items-center w-full p-1 focus:bg-teal-200"
              value={answer}
              onClick={callback}
            >
              <span>{answer}</span>
              <CheckCircleOutlineIcon className="icon text-gray-400 focus:black" />
            </button>
          </ButtonWrapper>
        ))}
      </div>
    </Wrapper>
  );
};

export default QuestionCard;
