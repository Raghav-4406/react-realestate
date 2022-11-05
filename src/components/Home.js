import React from 'react';

function Home() {
  return (
   <div>
	
	<header className="header-section">
		<a href="index.html" className="site-logo">
			<img src={require("../img/logo.png")} alt="" />
		</a>
		<nav className="header-nav">
			<ul className="main-menu">
				<li><a href="index.html" className="active">Home</a></li>
				<li><a href="about-us.html">About</a></li>
				<li><a href="#">Buy</a></li>
				<li><a href="#">Pages</a>
					<ul className="sub-menu">
						<li><a href="about-us.html">About Us</a></li>
						<li><a href="search-result.html">Search Result</a></li>
						<li><a href="single-property.html">Property</a></li>
					</ul>
				</li>
				<li><a href="news.html">News</a></li>
				<li><a href="contact.html">Contact</a></li>
			</ul>
			<div className="header-right">
				<div className="user-panel">
					<a href="#" className="login">Sign in</a>
					<a href="#" className="register">Join us</a>
				</div>
			</div>
		</nav>
	</header>

	<section className="hero-section set-bg img-bg">
		<div className="container">
			<div className="hero-warp">
				<form className="main-search-form">
					<div className="search-type">
						<div className="st-item">
							<input type="radio" name="st" id="buy" checked />
							<label for="buy">Buy</label>
						</div>
						<div className="st-item">
							<input type="radio" name="st" id="rent" />
							<label for="rent">Rent</label>
						</div>
						<div className="st-item">
							<input type="radio" name="st" id="sell" />
							<label for="sell">Sell</label>
						</div>
						<div className="st-item">
							<input type="radio" name="st" id="property" />
							<label for="property">Property Value</label>
						</div>
						<div className="st-item">
							<input type="radio" name="st" id="agents" />
							<label for="agents">Agents</label>
						</div>                                                           
					</div>
					<div className="search-input">
						<input type="text" placeholder="Search by state, postcode or suburb" />
						<button className="site-btn">Search</button>
					</div>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. </p>
				</form>
			</div>
		</div>
	</section>
	
	<section className="intro-section spad">
		<div className="container">
			<div className="section-title">
				<h2>Sell Faster. Save Thousands.</h2>
			</div>
			<div className="row intro-first">
				<div className="col-lg-6 order-lg-2">
					<img src={require("../img/about/1.jpg")} alt="" />
				</div>
				<div className="col-lg-6 order-lg-1">
					<div className="about-text">
						<h3>We charge 2% total. No hidden fees or upfront costs.</h3>
						<p>Donec eget efficitur ex. Donec eget dolor vitae eros feugiat tristique id vitae massa. Proin vulputate congue rutrum. Fusce lobortis a enim eget tempus. ClassName aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse potenti. Ut gravida mattis magna, non varius lorem sodales nec. In libero orci, ornare non nisl a, auctor euismod purus. Morbi pretium interdum vestibulum. Fusce nec eleifend ipsum. Sed non blandit tellus.</p>
						<a href="#" className="readmore-btn">Find out more</a>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-6">
					<img src={require("../img/about/2.jpg")} alt="" />
				</div>
				<div className="col-lg-6 ">
					<div className="about-text">
						<h3>How Much Can You Save? We work for you, not commission.</h3>
						<p>Donec eget efficitur ex. Donec eget dolor vitae eros feugiat tristique id vitae massa. Proin vulputate congue rutrum. Fusce lobortis a enim eget tempus. ClassName aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse potenti. Ut gravida mattis magna, non varius lorem sodales nec. In libero orci, ornare non nisl a, auctor euismod purus. Morbi pretium interdum vestibulum. Fusce nec eleifend ipsum. Sed non blandit tellus.</p>
						<a href="#" className="readmore-btn">Find out more</a>
					</div>
				</div>
			</div>
		</div>
	</section>
	
	
	<section className="property-section">
		<div className="container">
			<div className="section-title">
				<h2>Recently Add Homes</h2>
			</div>
			<div className="row">
				<div className="col-lg-4">
					<div className="property-item">
						<div className="pi-image">
							<img src={require("../img/property/1.jpg")} alt="" />
							<div className="pi-badge new">New</div>
						</div>
						<h3>$469,000</h3>
						<h5>3 Bedrooms Townhouse</h5>
						<p>Donec eget efficitur ex. Donec eget dolor vitae eros feugiat tristique id vitae massa. Proin vulputate congue rutrum. Fusce lobortis a enim eget tempus. ClassName aptent taciti sociosqu ad litora.</p>
						<a href="#" className="readmore-btn">Find out more</a>
					</div>
				</div>
				<div className="col-lg-4">
					<div className="property-item">
						<div className="pi-image">
							<img src={require("../img/property/2.jpg")} alt="" />
							<div className="pi-badge offer">Offer</div>
						</div>
						<h3>$369,000</h3>
						<h5>3 Bedrooms Townhouse</h5>
						<p>Donec eget efficitur ex. Donec eget dolor vitae eros feugiat tristique id vitae massa. Proin vulputate congue rutrum. Fusce lobortis a enim eget tempus. ClassName aptent taciti sociosqu ad litora.</p>
						<a href="#" className="readmore-btn">Find out more</a>
					</div>
				</div>
				<div className="col-lg-4">
					<div className="property-item">
						<div className="pi-image">
							<img src={require("../img/property/3.jpg")} alt="" />
							<div className="pi-badge new">New</div>
						</div>
						<h3>$560,000</h3>
						<h5>3 Bedrooms Townhouse</h5>
						<p>Donec eget efficitur ex. Donec eget dolor vitae eros feugiat tristique id vitae massa. Proin vulputate congue rutrum. Fusce lobortis a enim eget tempus. ClassName aptent taciti sociosqu ad litora.</p>
						<a href="#" className="readmore-btn">Find out more</a>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section className="loan-section">
		<div className="loan-warp">
			<div className="container">
				<div className="section-title text-white">
					<h2>See If You Qualify for a Mortgage</h2>
					<p>Donec eget efficitur ex. Donec eget dolor vitae eros feugiat tristique id vitae massa. Proin vulputate congue rutrum. Fusce lobortis a enim eget tempus. ClassName aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse potenti. Ut gravida mattis magna, non varius lorem sodales nec. In libero orci, ornare non nisl a, auctor euismod purus. Morbi pretium interdum vestibulum. Fusce nec eleifend ipsum. Sed non blandit tellus. </p>
				</div>
				<form className="loan-form">
					<input type="text" placeholder="Your income" />
					<input type="text" placeholder="Amount needed" />
					<button className="site-btn">Submit</button>
				</form>
			</div>
		</div>
	</section>

	<section className="stories-section spad">
		<div className="container">
			<div className="row ">
				<div className="col-lg-5 order-lg-2">
					<img className="w-100" src={require("../img/about/3.jpg")} alt="" />
				</div>
				<div className="col-lg-7 order-lg-1">
					<div className="about-text">
						<h2>Seller Success Stories</h2>
						<p>Fusce lobortis a enim eget tempus. ClassName aptent taciti sociosqu ad litora. Donec eget efficitur ex. Donec eget dolor vitae eros feugiat tristique id vitae massa. Proin vulputate congue rutrum. Fusce lobortis a enim eget tempus. ClassName aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse potenti. Ut gravida mattis magna, non varius lorem sodales nec. In libero orci, ornare non nisl a, auctor euismod purus. Morbi pretium interdum vestibulum. Fusce nec eleifend ipsum. Sed non blandit tellus. </p>
						<a href="#" className="readmore-btn">Find out more</a>
					</div>
				</div>
			</div>
		</div>
	</section>
	<footer className="footer-section">
		<div className="container">
			<div className="row text-white">
				<div className="col-lg-4">
					<div className="footer-widger">
						<div className="about-widget">
							<div className="aw-text">
								<img src={require("../img/footer-logo.png")} alt="" />
								<p>Donec eget efficitur ex. Donec eget dolor vitae eros feugiat tristique id vitae massa. Proin vulputate cong ue rutrum. Fusce lobortis a enim eget tempus. </p>
								<a href="#" className="site-btn">we are hiring</a>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-2 col-md-3 col-sm-6">
					<div className="footer-widger">
						<h2>Company</h2>
						<ul>
							<li><a href="#">About us</a></li>
							<li><a href="#">Services</a></li>
							<li><a href="#">Clients</a></li>
							<li><a href="#">Testimonials</a></li>
							<li><a href="#">Carrers</a></li>
						</ul>
					</div>
				</div>
				<div className="col-lg-2 col-md-3 col-sm-6">
					<div className="footer-widger">
						<h2>For Buyers</h2>
						<ul>
							<li><a href="#">Buy with us</a></li>
							<li><a href="#">Papers</a></li>
							<li><a href="#">Clients</a></li>
							<li><a href="#">Testimonials</a></li>
							<li><a href="#">Homes</a></li>
						</ul>
					</div>
				</div>
				<div className="col-lg-2 col-md-3 col-sm-6">
					<div className="footer-widger">
						<h2>For Sellers</h2>
						<ul>
							<li><a href="#">Seel With us</a></li>
							<li><a href="#">What do You Need</a></li>
							<li><a href="#">Clients</a></li>
							<li><a href="#">Testimonials</a></li>
							<li><a href="#">Guideline</a></li>
						</ul>
					</div>
				</div>
				<div className="col-lg-2 col-md-3 col-sm-6">
					<div className="footer-widger">
						<h2>For Renters</h2>
						<ul>
							<li><a href="#">Rent with us</a></li>
							<li><a href="#">Guidelines</a></li>
							<li><a href="#">Apartments</a></li>
							<li><a href="#">Flats</a></li>
							<li><a href="#">Houses</a></li>
						</ul>
					</div>
				</div>
			</div>
			<div className="copyright">
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
</div>
		</div>
	</footer>
   </div>
  
  );}
  
 export default Home;