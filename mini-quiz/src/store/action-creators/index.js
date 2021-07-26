import {GET_NEXT_QUESTION, SET_QUIZ} from "../action-types";

export const setQuiz = (payload) => ({
    type: SET_QUIZ,
    payload
});
export const getNextQuestion = (payload) => ({
    type: GET_NEXT_QUESTION,
    payload
});