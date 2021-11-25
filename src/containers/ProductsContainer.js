import React from 'react';
import { connect } from 'react-redux';
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
const mapStateToProps = (state) => {
	return {
		products: state.products,
	};
};

export default connect(mapStateToProps, null)(ProductsContainer);
