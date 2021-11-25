import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Message from './components/Message';
import Cart from './components/Cart';
import ProductsContainer from './containers/ProductsContainer';
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
						<Message />
						{/* Cart */}
						<Cart />
					</div>
				</main>
				<Footer />
			</>
		);
	}
}

export default App;
