import React, {useState} from "react";
import '../../../assets/styles/quiz-page/answer-item/index.css';
import {useDispatch, useSelector} from "react-redux";
import {getNextQuestion, setAnswerClicked} from "../../../store/action-creators";

const AnswerItem = (props) => {
    const dispatch = useDispatch();
    const [state, setState] = useState('')
    const cls = ['answer-item'];

    const rightAnswer = useSelector(state => state.quiz[state.current].rightAnswerId);
    const clicked = useSelector(state => state.answerClicked);

    const onAnswerClick = (id) => {

        if (clicked) return;
        (id === rightAnswer) ? setState('success') : setState('error');
        dispatch(setAnswerClicked());

        const timeout = window.setTimeout(() => {
            dispatch(getNextQuestion(id));
            setState('')
            dispatch(setAnswerClicked());
            window.clearTimeout(timeout);
        }, 1000)
    }
    const {id, text} = props.answer

    cls.push(state);

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
export default AnswerItem;