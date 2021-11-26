import React from 'react';
import {
	MSG_DELETE_PRODUCT_IN_CART_SUCCESS,
	MSG_UPDATE_CART_SUCCESS,
} from '../constants/Messages';
class CartItem extends React.Component {
	render() {
		const { image, name, price, id } = this.props.product;
		const { quantity } = this.props;
		return (
			<tr>
				<th scope='row'>
					<img src={image} alt={name} className='img-fluid z-depth-0' />
				</th>
				<td>
					<h5>
						<strong>{name}</strong>
					</h5>
				</td>
				<td>{price}$</td>
				<td className='center-on-small-only'>
					<span className='qty'>{quantity} </span>
					<div className='btn-group radio-group' data-toggle='buttons'>
						<label
							className='btn btn-sm btn-primary
                                              btn-rounded waves-effect waves-light'>
							<button
								onClick={this.updateQuantity.bind(this, id, quantity - 1)}>
								—
							</button>
						</label>
						<label
							className='btn btn-sm btn-primary
                                              btn-rounded waves-effect waves-light'>
							<button
								onClick={this.updateQuantity.bind(this, id, quantity + 1)}>
								+
							</button>
						</label>
					</div>
				</td>
				<td>{this.totalPrice(price, quantity)}$</td>
				<td>
					<button
						type='button'
						className='btn btn-sm btn-primary waves-effect waves-light'
						data-toggle='tooltip'
						data-placement='top'
						data-original-title='Remove item'
						onClick={this.deleteProduct.bind(this, id)}>
						X
					</button>
				</td>
			</tr>
		);
	}
	totalPrice(price, quantity) {
		return price * quantity;
	}
	deleteProduct(productID) {
		this.props.onChangeMessage(MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
		this.props.onDeleteProduct(productID);
	}
	updateQuantity(id, quantity) {
		if (quantity <= 0) {
			quantity = 1;
		}
		this.props.onChangeMessage(MSG_UPDATE_CART_SUCCESS);
		this.props.onUpdateQuantity(id, quantity);
	}
}

export default CartItem;
