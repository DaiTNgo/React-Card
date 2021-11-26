import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductsContainer from './containers/ProductsContainer';
import CartContainer from './containers/CartContainer';
import MessageContainer from './containers/MessageContainer';
class App extends React.Component {
	render() {
		return (
			<>
				<Header />
				<main id='mainContainer'>
					<div className='container'>
						{/* Products */}
						<ProductsContainer />
						{/* Message */}
						<MessageContainer />
						{/* Cart */}
						<CartContainer />
					</div>
				</main>
				<Footer />
			</>
		);
	}
}

export default App;
