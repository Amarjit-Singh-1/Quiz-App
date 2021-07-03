import * as React from "react";
import "../tailwind.css";
import { useQuiz } from "../Context/QuizProvider";

type HeaderProps = {
  username: string;
  score: number;
};

export function Header({ username, score }: HeaderProps) {
  const { state } = useQuiz();
  return (
    <>
      <h1>
        <span>😎</span> Quiz App
      </h1>
      <h3 className="text-blue-900">Welcome {username}!</h3>
      <h3>Your score is : {state.score}</h3>
    </>
  );
}
