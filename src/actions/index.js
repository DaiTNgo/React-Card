import { ADD_TO_CART } from '../constants/ActionTypes';

export const actAddToCart = (product, quantity) => {
	return {
		type: ADD_TO_CART,
		payload: product,
		quantity: 1,
	};
};
