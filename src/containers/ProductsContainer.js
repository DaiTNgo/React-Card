import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Products from '../components/Products';
import Product from '../components/Product';
import { actAddToCart, actChangeMessage } from '../actions';

class ProductsContainer extends React.Component {
	render() {
		const { products } = this.props;
		return <Products>{this.showProducts(products)}</Products>;
	}
	showProducts(products) {
		const { onAddToCart, onChangeMessage } = this.props;
		return products.map((product) => (
			<div className='col-lg-4 col-md-6 mb-r' key={product.id}>
				<Product
					product={product}
					onAddToCart={onAddToCart}
					onChangeMessage={onChangeMessage}
				/>
			</div>
		));
	}
}

ProductsContainer.propTypes = {
	products: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
			image: PropTypes.string.isRequired,
			des: PropTypes.string.isRequired,
			price: PropTypes.number.isRequired,
			inventory: PropTypes.number.isRequired,
		})
	).isRequired,
	onChangeMessage: PropTypes.func.isRequired,
	onAddToCart: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
	return {
		products: state.products,
	};
};

const mapDispatchToProps = (dispatch, props) => {
	return {
		onAddToCart: (product) => {
			const QUANTITY = 1;
			dispatch(actAddToCart(product, QUANTITY));
		},
		onChangeMessage: (message) => {
			dispatch(actChangeMessage(message));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
