import React from 'react';

class Header extends React.Component {
	render() {
		return (
			<header>
				<ul
					id='slide-out'
					className='side-nav hidden custom-scrollbar sn-bg-2 ps ps--theme_default'
					data-ps-id='c27390a3-9efc-e0d8-197a-ab96d73a156a'>
					<li>
						<div className='logo-wrapper waves-light waves-effect waves-light'>
							<button href>
								<img
									src='http://mdbootstrap.com/img/logo/mdb-transparent.png'
									alt=''
									className='img-fluid flex-center'
								/>
							</button>
						</div>
					</li>
					<li>
						<ul className='social'>
							<li>
								<button className='icons-sm fb-ic' href>
									<i className='fa fa-facebook'> </i>
								</button>
							</li>
							<li>
								<button className='icons-sm pin-ic' href>
									<i className='fa fa-pinterest'> </i>
								</button>
							</li>
							<li>
								<button className='icons-sm gplus-ic' href>
									<i className='fa fa-google-plus'> </i>
								</button>
							</li>
							<li>
								<button className='icons-sm tw-ic' href>
									<i className='fa fa-twitter'> </i>
								</button>
							</li>
						</ul>
					</li>
					<li>
						<form className='search-form' role='search'>
							<div className='form-group waves-light waves-effect waves-light'>
								<input
									type='text'
									className='form-control'
									placeholder='Search'
								/>
							</div>
						</form>
					</li>
					<li>
						<ul className='collapsible collapsible-accordion'>
							<li>
								<button
									className='collapsible-header waves-effect arrow-r'
									href>
									<i className='fa fa-shopping-bag' /> Product Page
									<i className='fa fa-angle-down rotate-icon' />
								</button>
								<div className='collapsible-body'>
									<ul>
										<li>
											<button href='product.html' className='waves-effect'>
												Product Page V.1
											</button>
										</li>
										<li>
											<button href='product-page.html' className='waves-effect'>
												Product Page V.2
											</button>
										</li>
										<li>
											<button
												href='product-page-4.html'
												className='waves-effect'>
												Product Page V.3
											</button>
										</li>
									</ul>
								</div>
							</li>
							<li className='active'>
								<button
									className='collapsible-header waves-effect arrow-r active'
									href>
									<i className='fa fa-shopping-cart' /> Cart Pages
									<i className='fa fa-angle-down rotate-icon' />
								</button>
								<div className='collapsible-body'>
									<ul>
										<li>
											<button href='cart.html' className='waves-effect'>
												Page with shopping cart
											</button>
										</li>
										<li>
											<button href='contact.html' className='waves-effect'>
												Page with contact form
											</button>
										</li>
										<li>
											<button href='contact-2.html' className='waves-effect'>
												Page with contact form V.2
											</button>
										</li>
										<li>
											<button href='login.html' className='waves-effect'>
												Page with sign in form
											</button>
										</li>
										<li>
											<button href='terms.html' className='waves-effect'>
												Page with 'terms of use'
											</button>
										</li>
										<li>
											<button href='faq.html' className='waves-effect'>
												Page with 'FAQ'
											</button>
										</li>
									</ul>
								</div>
							</li>
							<li>
								<button
									className='collapsible-header waves-effect arrow-r'
									href>
									<i className='fa fa-dashboard' /> Homepages
									<i className='fa fa-angle-down rotate-icon' />
								</button>
								<div className='collapsible-body'>
									<ul>
										<li>
											<button href='home-page.html' className='waves-effect'>
												Ecommerce homepage default
											</button>
										</li>
										<li>
											<button href='home-page-2.html' className='waves-effect'>
												Ecommerce homepage full width
											</button>
										</li>
										<li>
											<button
												href='home-page-3-carousel.html'
												className='waves-effect'>
												Ecommerce homepage V.3 Carousel
											</button>
										</li>
										<li>
											<button
												href='home-page-3-full-page-carousel.html'
												className='waves-effect'>
												Ecommerce homepage V.3 Full Page Carousel
											</button>
										</li>
										<li>
											<button
												href='home-page-3-half-page-carousel.html'
												className='waves-effect'>
												Ecommerce homepage V.3 Half Page Carousel
											</button>
										</li>
										<li>
											<button href='home-page-4.html' className='waves-effect'>
												Ecommerce homepage V.4
											</button>
										</li>
									</ul>
								</div>
							</li>
							<li>
								<button className='collapsible-header waves-effect arrow-r'>
									<i className='fa fa-desktop' /> Post Pages
									<i className='fa fa-angle-down rotate-icon' />
								</button>
								<div className='collapsible-body'>
									<ul>
										<li>
											<button href='post.html' className='waves-effect'>
												Page with column on the right
											</button>
										</li>
										<li>
											<button
												href='blog-post-left-column.html'
												className='waves-effect'>
												Page with newsletter on the left
											</button>
										</li>
										<li>
											<button href='blog-post.html' className='waves-effect'>
												Page with newsletter on the right
											</button>
										</li>
										<li>
											<button
												href='blog-post-full-width.html'
												className='waves-effect'>
												Full width page with logged user
											</button>
										</li>
										<li>
											<button
												href='blog-post-full-width%20not%20logged%20in%20user.html'
												className='waves-effect'>
												Full width page with not logged user
											</button>
										</li>
									</ul>
								</div>
							</li>
							<li>
								<button className='collapsible-header waves-effect arrow-r'>
									<i className='fa fa-diamond' /> Category Pages
									<i className='fa fa-angle-down rotate-icon' />
								</button>
								<div className='collapsible-body'>
									<ul>
										<li>
											<button
												href='category-list-left-column.html'
												className='waves-effect'>
												Category list with left column
											</button>
										</li>
										<li>
											<button
												href='category-list-right-column.html'
												className='waves-effect'>
												Category list with right column
											</button>
										</li>
										<li>
											<button
												href='category-grid-left-column.html'
												className='waves-effect'>
												Category grid with left column
											</button>
										</li>
										<li>
											<button
												href='category-right-column.html'
												className='waves-effect'>
												Category grid with right column
											</button>
										</li>
										<li>
											<button
												href='category-grid-left-column-carousel.html'
												className='waves-effect'>
												Category grid with left column carousel
											</button>
										</li>
									</ul>
								</div>
							</li>
						</ul>
					</li>
					<div className='sidenav-bg mask-strong' />
					<div className='ps__scrollbar-x-rail'>
						<div className='ps__scrollbar-x' tabIndex={0} />
					</div>
					<div className='ps__scrollbar-y-rail'>
						<div className='ps__scrollbar-y' tabIndex={0} />
					</div>
				</ul>
				<nav className='navbar fixed-top navbar-toggleable-md navbar-expand-lg navbar-dark scrolling-navbar double-nav'>
					<div className='float-left'>
						<button data-activates='slide-out' className='button-collapse'>
							<i className='fa fa-bars' />
						</button>
					</div>
					<div className='breadcrumb-dn mr-auto'>
						<ol className='breadcrumb header-breadcrumb'>
							<li className='breadcrumb-item'>
								<button>Trang Chủ</button>
							</li>
						</ol>
					</div>
					<ul className='nav navbar-nav nav-flex-icons ml-auto'>
						<li className='nav-item dropdown'>
							<button
								className='nav-link dropdown-toggle waves-effect waves-light'
								id='dropdownMenu1'
								data-toggle='dropdown'
								aria-haspopup='true'
								aria-expanded='false'>
								<i className='fa fa-user' /> Tài Khoản
							</button>
							<div
								className='dropdown-menu dropdown-menu-right'
								aria-labelledby='dropdownMenu1'>
								<button className='dropdown-item waves-effect waves-light'>
									Đăng Ký
								</button>
								<button className='dropdown-item waves-effect waves-light'>
									Đăng Nhập
								</button>
								<button className='dropdown-item waves-effect waves-light'>
									Đăng Xuất
								</button>
							</div>
						</li>
					</ul>
				</nav>
			</header>
		);
	}
}

export default Header;
