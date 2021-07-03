import * as React from "react";
import { useQuiz } from "../Context/QuizProvider";
import { Option } from "../Data/quiz.types";
import "../tailwind.css";

type OptionsProps = {
  quizId: string;
  question_no: number;
  options: Option[];
};

const getOptClass = (answer: number | null, idx: number, isRight: boolean) => {
  if (isRight && answer !== null) return "bg-green-600";
  if (answer === idx) return "bg-red-600";
  else return "bg-indigo-700";
};
export default function Options({
  quizId,
  question_no,
  options
}: OptionsProps) {
  const { state, dispatch } = useQuiz();
  const currentAnswer =
    state.quizzes[Number(quizId) - 1].questions[question_no - 1].answer;
  const optionHandler = (answer: number, id: number, isRight: boolean) =>
    currentAnswer === null &&
    dispatch({
      type: "INCREMENT",
      payload: { score: isRight ? 1 : 0, answer, id, quizId }
    });

  return (
    <>
      <ol>
        {options.map((option, idx) => {
          return (
            <li key={option.text}>
              <button
                className={`
                  m-1 w-full h-10 text-indigo-100 
                  transition-colors duration-150
                  ${getOptClass(currentAnswer, idx, option.isRight)}
                  focus:outline-none
                  rounded-lg 
                `}
                onClick={() => optionHandler(idx, question_no, option.isRight)}
              >
                {option.text}
              </button>
            </li>
          );
        })}
      </ol>
    </>
  );
}

/*
1) <div></div> //red
2) <div></div> right //green
3) <div></div> //blue
4) <div></div>  //

1) <div></div> //blue
2) <div></div> right //green
3) <div></div> //blue
4) <div></div> //blue
*/

/*
 replit -> node js
 express -> 

 const quiz = {}
fetch('aasjnsaknd') //by default get request
fetch('', {type: "POST", headers}) //post
fetch('', {type: "put", headers}) //post
fetch('', {type: "patch", headers}) //post
fetch('', {type: "delete", headers}) //post

function auth(res, req, next){
  if(!res.name.exits()){
    return res.json({"not allowed, sorry"})
  }
next()
}
app.get('/:quizId', auth,  () => {
  
}) -> res, req, next
 app.get('/abc/:answerId')
 app.post('/:quizId')
 app.put('/:quizId')
 app.patch('/:quizId')
 app.delete('/:quizId')

app.get('*')
404 not found

 */
