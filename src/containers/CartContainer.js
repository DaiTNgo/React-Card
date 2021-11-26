import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from '../components/Cart';
import CartItem from '../components/CartItem';
import CartResult from '../components/CartResult';
import { MSG_CART_EMPTY } from '../constants/Messages';
import {
	actDeleteProduct,
	actChangeMessage,
	actUpdateQuantity,
} from '../actions';
class CartContainer extends React.Component {
	render() {
		const { cart } = this.props;
		return (
			<Cart message={cart.length === 0 ? MSG_CART_EMPTY : ''}>
				{this.showCartItem(cart)}
				{this.calculateTotalPrice(cart)}
			</Cart>
		);
	}
	showCartItem(cart) {
		const { onDeleteProduct, onChangeMessage, onUpdateQuantity } = this.props;
		return cart.map((cartItem, index) => (
			<CartItem
				key={index}
				{...cartItem}
				onDeleteProduct={onDeleteProduct}
				onChangeMessage={onChangeMessage}
				onUpdateQuantity={onUpdateQuantity}
			/>
		));
	}
	calculateTotalPrice(cart) {
		const result = cart.reduce((total, cartItem) => {
			const { quantity, product } = cartItem;
			const totalCart = quantity * product.price;
			return totalCart + total;
		}, 0);

		return <CartResult total={result} />;
	}
}

CartContainer.propTypes = {
	cart: PropTypes.arrayOf(
		PropTypes.shape({
			product: PropTypes.shape({
				id: PropTypes.number.isRequired,
				name: PropTypes.string.isRequired,
				image: PropTypes.string.isRequired,
				des: PropTypes.string.isRequired,
				price: PropTypes.number.isRequired,
				inventory: PropTypes.number.isRequired,
			}),
			quantity: PropTypes.number.isRequired,
		})
	).isRequired,
};

const mapStateToProps = (state) => {
	return {
		cart: state.cart,
	};
};
const mapDispatchToProps = (dispatch, props) => {
	return {
		onDeleteProduct: (productID) => {
			dispatch(actDeleteProduct(productID));
		},
		onChangeMessage: (message) => {
			dispatch(actChangeMessage(message));
		},
		onUpdateQuantity: (productID, quantity) => {
			dispatch(actUpdateQuantity(productID, quantity));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
