import { ADD_TO_CART } from '../constants/ActionTypes';
const data = JSON.parse(localStorage.getItem('CART'));

const initialState = data ? data : [];

const cart = (state = initialState, action) => {
	const { payload, quantity } = action;

	switch (action.type) {
		case ADD_TO_CART:
			const index = state.findIndex(({ product }) => product.id === payload.id);
			if (index === -1) state.push({ product: payload, quantity });
			else state[index].quantity += quantity;
			localStorage.setItem('CART', JSON.stringify(state));
			return [...state];

		default:
			break;
	}
	return state;
};
export default cart;
