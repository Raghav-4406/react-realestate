import React from 'react'

function about() {
  return (
     <body>
	{/*<div id="preloder">
		<div class="loader"></div>
  </div>*/}

	
	<header class="header-section header-bg-2">
		<a href="index.html" class="site-logo">
			<img src={require("../img/logo.png")} alt=""></img>
		</a>
		<nav class="header-nav">
			<ul class="main-menu">
				<li><a href="index.html">Home</a></li>
				<li><a href="about-us.html" class="active">About</a></li>
				<li><a href="#">Buy</a></li>
				<li><a href="#">Pages</a>
					<ul class="sub-menu">
						<li><a href="about-us.html">About Us</a></li>
						<li><a href="search-result.html">Search Result</a></li>
						<li><a href="single-property.html">Property</a></li>
					</ul>
				</li>
				<li><a href="news.html">News</a></li>
				<li><a href="contact.html">Contact</a></li>
			</ul>
			<div class="header-right">
				<div class="user-panel">
					<a href="#" class="login">Sign in</a>
					<a href="#" class="register">Join us</a>
				</div>
			</div>
		</nav>
	</header>
	

	
	<section class="page-top-section set-bg" data-setbg={require("../img/page-top-bg.jpg")}>
		<div class="page-top-warp">
			<form class="main-search-form">
				<div class="search-type">
					<div class="st-item">
						<input type="radio" name="st" id="buy" checked></input>
						<label for="buy">Buy</label>
					</div>
					<div class="st-item">
						<input type="radio" name="st" id="rent"></input>
						<label for="rent">Rent</label>
					</div>
					<div class="st-item">
						<input type="radio" name="st" id="sell"></input>
						<label for="sell">Sell</label>
					</div>
					<div class="st-item">
						<input type="radio" name="st" id="property"></input>
						<label for="property">Property Value</label>
					</div>
					<div class="st-item">
						<input type="radio" name="st" id="agents"></input>
						<label for="agents">Agents</label>
					</div>                                                           
				</div>
				<div class="search-input si-v-2">
					<input type="text" placeholder="Search by state, postcode or suburb"></input>
					<button class="site-btn" type="submit">Search</button>
					<button class="site-btn sb-light">Show Filters</button>
				</div>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. </p>
			</form>
		</div>
	</section>
	


	<section class="about-section spad">
		<div class="container">
			<div class="row">
				<div class="col-lg-6 order-lg-2">
					<img src={require("../img/about/4.jpg")} alt=""></img>
				</div>
				<div class="col-lg-6 order-lg-1">
					<div class="about-text">
						<h3>A young team that is here to help you get your dream home.</h3>
						<p>Donec eget efficitur ex. Donec eget dolor vitae eros feugiat tristique id vitae massa. Proin vulputate congue rutrum. Fusce lobortis a enim eget tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse potenti. Ut gravida mattis magna, non varius lorem sodales nec. In libero orci, ornare non nisl a, auctor euismod purus. Morbi pretium interdum vestibulum. Fusce nec eleifend ipsum. Sed non blandit tellus. </p>
						<a href="#" class="readmore-btn">Find out more</a>
					</div>
				</div>
			</div>
		</div>
	</section>
	

	
	<section class="sell-section ">
		<div class="sell-warp spad set-bg" data-setbg={require("../img/sell-bg.jpg")}>
			<div class="container text-white">
				<div class="section-title">
					<h2>Selling your place is easy</h2>
				</div>
				<div class="row">
					<div class="col-md-4">
						<div class="sell-item">
							<div class="si-icon"><span>01.</span></div>
							<h3>Search</h3>
							<p>Donec eget efficitur ex. Donec eget dolor vitae eros feugiat tristique id vitae massa. Proin vulputate congue rutrum. Fusce lobortis a enim eget tempus. Class aptent taciti sociosqu.</p>
						</div>
					</div>
					<div class="col-md-4">
						<div class="sell-item">
							<div class="si-icon"><span>02.</span></div>
							<h3>Compare</h3>
							<p>Donec eget efficitur ex. Donec eget dolor vitae eros feugiat tristique id vitae massa. Proin vulputate congue rutrum. Fusce lobortis a enim eget tempus. Class aptent taciti sociosqu.</p>
						</div>
					</div>
					<div class="col-md-4">
						<div class="sell-item">
							<div class="si-icon"><span>03.</span></div>
							<h3>Connect</h3>
							<p>Donec eget efficitur ex. Donec eget dolor vitae eros feugiat tristique id vitae massa. Proin vulputate congue rutrum. Fusce lobortis a enim eget tempus. Class aptent taciti sociosqu.</p>
						</div>
					</div>
				</div>
				<div class="text-center pt-5 mt-3">
					<a href="#" class="site-btn sb-big">Contact an agent now</a>
				</div>
			</div>
		</div>
	</section>
	

	
	<section class="agents-section spad">
		<div class="container">
			<div class="section-title">
				<h2>The Agents</h2>
			</div>
			<div class="row">
				<div class="col-md-4">
					<div class="agent-item">
						<img src={require("../img/agents/1.jpg")} alt=""></img>
						<div class="ai-text">
							<h4>Christinne James</h4>
							<p>Fusce lobortis a enim eget tempus. Class aptent taciti sociosqu ad litora. Donec eget efficitur ex. Donec eget dolor vitae eros feugiat tristique id vitae massa. Proin vulputate congue rutrum.</p>
							<a href="#" class="readmore-btn">Contact the agent</a>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="agent-item">
						<img src={require("../img/agents/2.jpg")} alt=""></img>
						<div class="ai-text">
							<h4>Davina Brown</h4>
							<p>Fusce lobortis a enim eget tempus. Class aptent taciti sociosqu ad litora. Donec eget efficitur ex. Donec eget dolor vitae eros feugiat tristique id vitae massa. Proin vulputate congue rutrum.</p>
							<a href="#" class="readmore-btn">Contact the agent</a>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="agent-item">
						<img src={require("../img/agents/3.jpg")} alt=""></img>
						<div class="ai-text">
							<h4>Michael Smith</h4>
							<p>Fusce lobortis a enim eget tempus. Class aptent taciti sociosqu ad litora. Donec eget efficitur ex. Donec eget dolor vitae eros feugiat tristique id vitae massa. Proin vulputate congue rutrum.</p>
							<a href="#" class="readmore-btn">Contact the agent</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	

	
	<footer class="footer-section">
		<div class="container">
			<div class="row text-white">
				<div class="col-lg-4">
					<div class="footer-widger">
						<div class="about-widget">
							<div class="aw-text">
								<img src={require("../img/footer-logo.png")} alt=""></img>
								<p>Donec eget efficitur ex. Donec eget dolor vitae eros feugiat tristique id vitae massa. Proin vulputate cong ue rutrum. Fusce lobortis a enim eget tempus. </p>
								<a href="#" class="site-btn">we are hiring</a>
							</div>
						</div>
					</div>
				</div>
				<div class="col-lg-2 col-md-3 col-sm-6">
					<div class="footer-widger">
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
				<div class="col-lg-2 col-md-3 col-sm-6">
					<div class="footer-widger">
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
				<div class="col-lg-2 col-md-3 col-sm-6">
					<div class="footer-widger">
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
				<div class="col-lg-2 col-md-3 col-sm-6">
					<div class="footer-widger">
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
			<div class="copyright">
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
</div>
		</div>
	</footer>
	</body>
	);
	}




export default about;
