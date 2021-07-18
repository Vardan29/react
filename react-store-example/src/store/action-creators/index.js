import { DECREMENT, INCREMENT } from "../action-types"

export const setIncrement = (payload) => {
  return {
    type: INCREMENT,
    payload
  }
}

export const setDecrement = (payload) => {
  return {
    type: DECREMENT,
    payload
  }
}