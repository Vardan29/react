import { SET_PERSONS } from '../action-types';

const initialState = {
	persons: null
};

const reducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case SET_PERSONS: {
			return {
				...state,
				persons: payload
			};
		}
		default: {
			return state;
		}
	}
};

export default reducer;
