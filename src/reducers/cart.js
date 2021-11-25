import { ADD_TO_CART } from '../constants/ActionTypes';
const data = JSON.parse(localStorage.getItem('CART'));

const initialState = data
	? data
	: [
			{
				product: {
					id: 1,
					name: 'Iphone 12',
					image:
						'https://shop.jtglobal.com/wp-content/uploads/2020/10/iphone-12-blue.jpg',
					des: 'Apple sản xuất',
					price: 400,
					inventory: 12,
				},
				quantity: 5,
			},
	  ];

const cart = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TO_CART:
			break;

		default:
			break;
	}
	return state;
};
export default cart;
