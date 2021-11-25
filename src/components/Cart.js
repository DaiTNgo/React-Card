import React from 'react';
import CartItem from './CartItem';
import CartResult from './CartResult';

class App extends React.Component {
	render() {
		return (
			<main id='mainContainer'>
				<div className='container'>
					<section className='section'>
						<div className='table-responsive'>
							<table className='table product-table'>
								<thead>
									<tr>
										<th />
										<th>Sản Phẩm</th>
										<th>Giá</th>
										<th>Số Lượng</th>
										<th>Tổng Cộng</th>
										<th />
									</tr>
								</thead>
								<tbody>
									<CartItem />
									<CartResult />
								</tbody>
							</table>
						</div>
					</section>
				</div>
			</main>
		);
	}
}

export default App;
