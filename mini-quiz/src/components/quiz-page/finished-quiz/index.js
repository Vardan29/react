import React from "react";
import {useSelector} from "react-redux";

const FinishedQuiz = (props) => {
    const score = useSelector(state => state.score);

    return (
        <div>
            <h1>You finished.</h1>
            <p>Your score: {score}</p>
        </div>
    )

}

export default FinishedQuiz;