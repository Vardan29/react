import React from "react";
import AnswersList from "../answers-list";
import '../../../assets/styles/quiz-page/active-quiz/index.css'
import {useSelector} from "react-redux";

const ActiveQuiz = props => {
    const quizListLength = useSelector(state => state.quiz.length)
    const {activeQuiz} = props;
    return (
        <div className="active-quiz">
            <p className="question">
            <span>
                <strong>{activeQuiz.id}. </strong>
                {activeQuiz.question}
            </span>
                <small>
                    {activeQuiz.id} from {quizListLength}
                </small>
            </p>
            <AnswersList
                answers={activeQuiz.answers}
            />
        </div>
    );
}

export default ActiveQuiz