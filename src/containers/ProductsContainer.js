import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Products from '../components/Products';
import Product from '../components/Product';
class ProductsContainer extends React.Component {
	render() {
		const { products } = this.props;
		return <Products>{this.showProducts(products)}</Products>;
	}
	showProducts(products) {
		return products.map((product) => (
			<div className='col-lg-4 col-md-6 mb-r' key={product.id}>
				<Product {...product} />
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
};

const mapStateToProps = (state) => {
	return {
		products: state.products,
	};
};

export default connect(mapStateToProps, null)(ProductsContainer);
