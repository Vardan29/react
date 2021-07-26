import React from "react";
import AnswerItem from "../answer-item";
import '../../../assets/styles/quiz-page/answers-list/index.css'

const AnswersList = (props) => {
    if(!props.answers.length){
        return <h2>Loading data...</h2>
    }
    return (
        <ul className='answers-list'>
            {props.answers.map((answer)=>(
                <AnswerItem
                    answer={answer}
                    key={answer.id}
                />
            ))}
        </ul>
    );
}


export default AnswersList;
