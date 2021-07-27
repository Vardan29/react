import React, {useEffect} from "react";
import '../../assets/styles/quiz-page/index.css';
import ActiveQuiz from "../../components/quiz-page/active-quiz";
import {connect, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import {getQuiz} from "../../core";
import FinishedQuiz from "../../components/quiz-page/finished-quiz";
import Loader from "../../components/loader";

const QuizPage = (props) => {

    const isFinished = useSelector(state => state.isFinished);

    useEffect(() => {
        getQuiz();
    }, []);

    const {quiz} = props;

    return (
        <div className="quiz">
            {
                quiz ?
                (<div className='quiz-wrapper'>
                    {isFinished ? <FinishedQuiz/> : <ActiveQuiz quiz={quiz}/>}
                </div>) :
                <Loader/>
            }

        </div>
    );
}

QuizPage.propTypes = {
    quiz: PropTypes.array
}

const mapStateToProps = (state) =>
{
    const {quiz} = state;
    return {
        quiz
    }
}

export default connect(mapStateToProps)(QuizPage);