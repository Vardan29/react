import { DECREMENT, INCREMENT } from "../action-types"

const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case INCREMENT: {
      return {
        ...state,
        counter: state.counter + payload
      }
    }
    case DECREMENT: {
      return {
        ...state,
        counter: state.counter - payload
      }
    }
    default: {
      return state
    }
  }
};

export default reducer;
