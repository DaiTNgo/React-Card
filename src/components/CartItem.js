import React from 'react';

class CartItem extends React.Component {
	render() {
		const { image, name, price } = this.props.product;
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
							<button>—</button>
						</label>
						<label
							className='btn btn-sm btn-primary
                                              btn-rounded waves-effect waves-light'>
							<button>+</button>
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
						data-original-title='Remove item'>
						X
					</button>
				</td>
			</tr>
		);
	}
	totalPrice(price, quantity) {
		return price * quantity;
	}
}

export default CartItem;
