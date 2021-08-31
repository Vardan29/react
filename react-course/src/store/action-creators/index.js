import { ADD_TO_BAG, SET_PRODUCTS } from '../action-types'

export const setProducts = (payload) => ({
    type: SET_PRODUCTS,
    payload
});

export const addToBag = (payload) => ({
    type: ADD_TO_BAG,
    payload
});