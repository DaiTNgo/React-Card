import {
	ADD_TO_CART,
	CHANGE_MESSAGE,
	DELETE_PRODUCT_IN_CART,
	UPDATE_QUANTITY_IN_CART,
} from '../constants/ActionTypes';

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

export const actDeleteProduct = (productID) => {
	return {
		type: DELETE_PRODUCT_IN_CART,
		productID,
	};
};

export const actUpdateQuantity = (productID, quantity) => {
	return {
		type: UPDATE_QUANTITY_IN_CART,
		quantity,
		productID,
	};
};
