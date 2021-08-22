import {SET_PRODUCTS, ADD_TO_BAG, REMOVE_FROM_BAG, CLEAR_BAG} from 'store/action-types';

export const setProducts = (payload) => ({
	type: SET_PRODUCTS,
	payload
});

export const addToBag = (payload) => ({
	type: ADD_TO_BAG,
	payload
});

export const removeFromBag = (payload) => ({
	type: REMOVE_FROM_BAG,
	payload
});

export const clearBag = () => ({
	type: CLEAR_BAG
});
