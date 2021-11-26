import {
	ADD_TO_CART,
	DELETE_PRODUCT_IN_CART,
	UPDATE_QUANTITY_IN_CART,
} from '../constants/ActionTypes';
const data = JSON.parse(localStorage.getItem('CART'));

const initialState = data ? data : [];

const cart = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TO_CART:
			const { payload, quantity } = action;
			const index = state.findIndex(({ product }) => product.id === payload.id);
			if (index === -1) state.push({ product: payload, quantity });
			else state[index].quantity += quantity;
			localStorage.setItem('CART', JSON.stringify(state));
			return [...state];

		case DELETE_PRODUCT_IN_CART:
			const result = state.filter(
				({ product }) => action.productID !== product.id
			);
			localStorage.setItem('CART', JSON.stringify(result));
			return result;
		case UPDATE_QUANTITY_IN_CART:
			const { quantity: numberOf, productID } = action;
			const ind = state.findIndex(({ product }) => product.id === productID);
			state[ind].quantity = numberOf;
			localStorage.setItem('CART', JSON.stringify(state));

			return [...state];
		default:
			break;
	}
	return state;
};
export default cart;
