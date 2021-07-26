import {GET_NEXT_QUESTION, SET_QUIZ} from "../action-types";

const initialState = {
    quiz: null,
    current: 0,
    score: 0
}

const index = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case SET_QUIZ: {
            return {
                ...state,
                quiz: payload
            }
        }
        case GET_NEXT_QUESTION: {
            if (payload === state.quiz[state.current].rightAnswerId) {
                return {
                    ...state,
                    score: state.score + 1,
                    current: state.current + 1
                }
            }
            return {
                ...state,
                current: state.current + 1
            }
        }
        default: {
            return state;
        }
    }
}
export default index;