import React, {useEffect} from "react";
import '../../assets/styles/quiz-page/index.css';
import ActiveQuiz from "../../components/quiz-page/active-quiz";
import {connect, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import {getQuiz} from "../../core";

const QuizPage = (props) => {
    useEffect(()=>{
        getQuiz();
    },[])

    const {quiz,current} = props;
    if (!quiz) {
        return (
            <div className="quiz">
                <h1>Loading...</h1>
            </div>
        );
    }

    const quizFinished = () => {
        return props.quiz.length === props.current;
    }
    if(quizFinished()){
        return (
            <div className='quiz'>
                <h1>You finished.</h1>
                   <p>Your score: {props.score}</p>
            </div>

        )
    }

    return (
        <div className="quiz">
            <div className='quiz-wrapper'>
                <h1>Answer all questions</h1>
                <ActiveQuiz
                    activeQuiz={quiz[current]}
                />
            </div>
        </div>
    )
}

QuizPage.propTypes = {
    quiz: PropTypes.array,
    current: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired
};

const mapStateToProps = (state) => {
    const {quiz,current,score} = state;
    return {
        quiz,
        current,
        score
    }
}

export default connect(mapStateToProps)(QuizPage);