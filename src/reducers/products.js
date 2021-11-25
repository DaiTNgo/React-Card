const initialState = [
	{
		id: 1,
		name: 'Iphone 12',
		image:
			'https://shop.jtglobal.com/wp-content/uploads/2020/10/iphone-12-blue.jpg',
		des: 'Apple sản xuất',
		price: 400,
		inventory: 12,
	},
	{
		id: 2,
		name: 'Nokia 8.1',
		image:
			'http://www.thegadgetlane.com/wp-content/uploads/2019/02/Nokia-8.1-Purple-1.jpg',
		des: 'Nokia sản xuất',
		price: 400,
		inventory: 12,
	},
];

const products = (state = initialState, action) => {
	return state;
};
export default products;
