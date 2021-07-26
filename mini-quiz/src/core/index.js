import store from "../store";
import {setQuiz} from "../store/action-creators";


export const getQuiz = () => {
    const url = "http://localhost:5000/quiz";

    fetch(url)
        .then(resp => resp.json())
        .then(quiz => {
            store.dispatch(setQuiz(quiz))
        });
};