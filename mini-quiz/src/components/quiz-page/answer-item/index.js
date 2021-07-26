import React, {useState} from "react";
import '../../../assets/styles/quiz-page/answer-item/index.css';
import {useDispatch, useSelector} from "react-redux";
import {getNextQuestion} from "../../../store/action-creators";

const AnswerItem = (props) => {
    const [state,setState] = useState('')
    const cls = ['answer-item'];
    cls.push(state);
    const dispatch = useDispatch();
    const rightAnswer = useSelector(state => state.quiz[state.current].rightAnswerId);
    const onAnswerClick = (id) => {
        if(id===rightAnswer){
            setState('success')
        }
        else{
            setState('error')
        }
        const timeout = window.setTimeout(()=>{
            dispatch(getNextQuestion(id));
            setState('')
            window.clearTimeout(timeout);
        },1000)
    }
    const {id, text} = props.answer

    return (
        <li
            className={cls.join(' ')}
            onClick={() => onAnswerClick(id)}
        >
            <i>{id}</i>
            <b>{text}</b>
        </li>
    );
}
export default AnswerItem