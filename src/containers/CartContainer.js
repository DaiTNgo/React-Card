import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from '../components/Cart';
import CartItem from '../components/CartItem';
import {
	MSG_WELCOME,
	MSG_ADD_TO_CART_SUCCESS,
	MSG_CART_EMPTY,
} from '../constants/Messages';
class CartContainer extends React.Component {
	render() {
		const { cart } = this.props;
		return <Cart>{this.showCartItem(cart)}</Cart>;
	}
	showCartItem(cart) {
		return cart.map((cartItem, index) => (
			<CartItem key={index} {...cartItem} />
		));
	}
}

CartContainer.propTypes = {
	cart: PropTypes.arrayOf({
		product: PropTypes.objectOf(
			PropTypes.shape({
				id: PropTypes.number.isRequired,
				name: PropTypes.string.isRequired,
				image: PropTypes.string.isRequired,
				des: PropTypes.string.isRequired,
				price: PropTypes.number.isRequired,
				inventory: PropTypes.number.isRequired,
			})
		).isRequired,
		quantity: PropTypes.number.isRequired,
	}).isRequired,
};

const mapStateToProps = (state) => {
	return {
		cart: state.cart,
	};
};

export default connect(mapStateToProps, null)(CartContainer);
