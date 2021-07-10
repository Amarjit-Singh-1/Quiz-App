import { quizOne } from "../Data/getQuiz";
import { Question } from "../Data/quiz.types";

export default function findQuestion(no: number): Question {
  const [currQues] = quizOne.questions.filter((ques) => ques.points === no);
  return currQues;
}
