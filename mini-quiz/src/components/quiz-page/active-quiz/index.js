import React from "react";
import AnswersList from "../answers-list";
import '../../../assets/styles/quiz-page/active-quiz/index.css';
import {useSelector} from "react-redux";

const ActiveQuiz = (props) => {
    const current = useSelector(state => state.current);
    const quizListLength = useSelector(state => state.quiz.length);
    const {id,question,answers} = props.quiz[current];

    return (
        <>
            <h1>Answer all questions</h1>
            <div className="active-quiz">
                <p className="question">
                    <span>
                        <strong>{id}. </strong>
                        {question}
                    </span>
                    <small>
                        {id} from {quizListLength}
                    </small>
                </p>
                <AnswersList answers={answers}/>
            </div>
        </>
    );
}

export default ActiveQuiz