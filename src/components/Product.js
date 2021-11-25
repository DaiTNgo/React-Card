import React from 'react';

class Product extends React.Component {
	render() {
		const { image, des, name, price } = this.props;

		return (
			<div className='card text-center card-cascade narrower'>
				<div className='view overlay hm-white-slight z-depth-1'>
					<img alt={name} src={image} className='img-fluid' />
					<button>
						<div className='mask waves-light waves-effect waves-light' />
					</button>
				</div>
				<div className='card-body'>
					<h4 className='card-title'>
						<strong>
							<button>{name}</button>
						</strong>
					</h4>
					<ul className='rating'>
						<li>
							<i className='fa fa-star' />
						</li>
					</ul>
					<p className='card-text'>{des}</p>
					<div className='card-footer'>
						<span className='left'>{price}</span>
						<span className='right'>
							<button
								className='btn-floating blue-gradient'
								data-toggle='tooltip'
								data-placement='top'
								data-original-title='Add to Cart'>
								<i className='fa fa-shopping-cart' />
							</button>
						</span>
					</div>
				</div>
			</div>
		);
	}
}

export default Product;
