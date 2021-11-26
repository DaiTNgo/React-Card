import React from 'react';
import { MSG_CART_EMPTY } from '../constants/Messages';
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
									{this.props.children[0].length ? (
										this.props.children
									) : (
										<tr>
											<td>{MSG_CART_EMPTY}</td>
										</tr>
									)}
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
