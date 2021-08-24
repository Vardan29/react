import {ADD_TO_BAG, SET_PRODUCTS, REMOVE_FROM_BAG, CLEAR_BAG} from '../action-types';

const initialState = {
    products: null,
    bag: []
};

const reducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case SET_PRODUCTS: {
            return {
                ...state,
                products: payload
            };
        }
        case ADD_TO_BAG: {
            if (state.products[payload.index].isInBag) {
                return state;
            }
            return {
                ...state,
                products: state.products.map((product, index) => {
                    if (index !== payload.index) {
                        return product;
                    }
                    product.isInBag = true;
                    return product;
                }),
                bag: [
                    ...state.bag,
                    {
                        ...state.products[payload.index],
                        amount: payload.amount,
                    }

                ]

            }
        }
        case REMOVE_FROM_BAG: {
            return {
                ...state,
                products: state.products.map((product) => {
                    if (product.id !== payload) {
                        return product;
                    }
                    product.isInBag = false;
                    return product;
                }),
                bag: state.bag.filter((product) => {
                    if (product.id !== payload) {
                        return true;
                    }
                    return false;
                })
            }
        }
        case CLEAR_BAG: {
            return {
                ...state,
                bag: [],
                products: state.products.map((product => {
                    product.isInBag = false;
                    return product;
                }))
            }
        }
        default: {
            return state;
        }
    }
};

export default reducer;
