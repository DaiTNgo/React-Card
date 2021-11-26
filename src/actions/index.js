import { ADD_TO_CART, CHANGE_MESSAGE } from '../constants/ActionTypes';

export const actAddToCart = (product, quantity) => {
	return {
		type: ADD_TO_CART,
		payload: product,
		quantity: 1,
	};
};
export const actChangeMessage = (message) => {
	return {
		type: CHANGE_MESSAGE,
		payload: message,
	};
};
