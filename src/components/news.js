import React from 'react'

function news() {
  return (
    <body>
	
	{/*<div id="preloder">
		<div class="loader"></div>
  </div>*/}

	
	<header class="header-section header-bg-2">
		<a href="index.html" class="site-logo">
			<img src={require("../img/logo.png")} alt="">
                </img>
		</a>
		<nav class="header-nav">
			<ul class="main-menu">
				<li><a href="index.html" class="active">Home</a></li>
				<li><a href="about-us.html">About</a></li>
				<li><a href="#">Buy</a></li>
				<li><a href="#">Pages</a>
					<ul class="sub-menu">
						<li><a href="about-us.html">About Us</a></li>
						<li><a href="search-result.html">Search Result</a></li>
						<li><a href="single-property.html">Property</a></li>
					</ul>
				</li>
				<li><a href="news.html" class="active">News</a></li>
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
						<input type="radio" name="st" id="buy" checked>
						<label for="buy">Buy</label>
                        </input>
					</div>
					<div class="st-item">
						<input type="radio" name="st" id="rent">
						<label for="rent">Rent</label>
                        </input>
					</div>
					<div class="st-item">
						<input type="radio" name="st" id="sell">
						<label for="sell">Sell</label>
                        </input>
					</div>
					<div class="st-item">
						<input type="radio" name="st" id="property">
						<label for="property">Property Value</label>
                        </input>
					</div>
					<div class="st-item">
						<input type="radio" name="st" id="agents">
						<label for="agents">Agents</label>
                        </input>
					</div>                                                           
				</div>
				<div class="search-input si-v-2">
					<input type="text" placeholder="Search by state, postcode or suburb">
					<button class="site-btn" type="submit">Search</button>
					<button class="site-btn sb-light">Show Filters</button>
                    </input>
				</div>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. </p>
			</form>
		</div>
	</section>
	

	
	<section class="blog-section spad">
		<div class="container">
			<div class="row">
				<div class="col-lg-4 col-md-6">
					<div class="blog-item">
						<img src={require("../img/blog/1.jpg")} alt=""></img>
						<div class="blog-text">
							<div class="blog-date">April 16, 2019</div>
							<h4>How to buy a house in this market</h4>
							<p>Fusce lobortis a enim eget tempus. Class aptent taciti sociosqu ad litora. Donec eget efficitur ex. Donec eget dolor vitae eros feugiat tristique id vitae massa. </p>
							<a href="#" class="readmore-btn">Read More</a>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6">
					<div class="blog-item">
						<img src={require("../img/blog/2.jpg")} alt=""></img>
						<div class="blog-text">
							<div class="blog-date">April 16, 2019</div>
							<h4>5 Tips to get a good deal on your house</h4>
							<p>Fusce lobortis a enim eget tempus. Class aptent taciti sociosqu ad litora. Donec eget efficitur ex. Donec eget dolor vitae eros feugiat tristique id vitae massa. </p>
							<a href="#" class="readmore-btn">Read More</a>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6">
					<div class="blog-item">
						<img src={require("../img/blog/3.jpg")} alt=""></img>
						<div class="blog-text">
							<div class="blog-date">April 16, 2019</div>
							<h4>Papers you need to buy a house </h4>
							<p>Fusce lobortis a enim eget tempus. Class aptent taciti sociosqu ad litora. Donec eget efficitur ex. Donec eget dolor vitae eros feugiat tristique id vitae massa. </p>
							<a href="#" class="readmore-btn">Read More</a>
						</div>
					</div>
				</div>
			</div>
			<div class="blog-item feature-blog">
				<div class="row">
					<div class="col-lg-6">
						<img src={require("../img/blog/big-1.jpg")} alt=""></img>
					</div>
					<div class="col-lg-6">
						<div class="blog-text">
							<div class="blog-date">April 16, 2019</div>
							<h4>Papers you need to buy a house </h4>
							<p>Fusce lobortis a enim eget tempus. Class aptent taciti sociosqu ad litora. Donec eget efficitur ex. Donec eget dolor vitae eros feugiat tristique id vitae massa.  Donec eget dolor vitae eros feugiat tristique id vitae massa.  Donec eget dolor vitae eros feugiat tristique id vitae massa. </p>
							<a href="#" class="readmore-btn">Read More</a>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-4 col-md-6">
					<div class="blog-item">
						<img src={require("../img/blog/4.jpg")} alt=""></img>
						<div class="blog-text">
							<div class="blog-date">April 16, 2019</div>
							<h4>How to buy a house in this market</h4>
							<p>Fusce lobortis a enim eget tempus. Class aptent taciti sociosqu ad litora. Donec eget efficitur ex. Donec eget dolor vitae eros feugiat tristique id vitae massa. </p>
							<a href="#" class="readmore-btn">Read More</a>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6">
					<div class="blog-item">
						<img src={require("../img/blog/5.jpg")} alt=""></img>
						<div class="blog-text">
							<div class="blog-date">April 16, 2019</div>
							<h4>5 Tips to get a good deal on your house</h4>
							<p>Fusce lobortis a enim eget tempus. Class aptent taciti sociosqu ad litora. Donec eget efficitur ex. Donec eget dolor vitae eros feugiat tristique id vitae massa. </p>
							<a href="#" class="readmore-btn">Read More</a>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6">
					<div class="blog-item">
						<img src={require("../img/blog/6.jpg")} alt=""></img>
						<div class="blog-text">
							<div class="blog-date">April 16, 2019</div>
							<h4>Papers you need to buy a house </h4>
							<p>Fusce lobortis a enim eget tempus. Class aptent taciti sociosqu ad litora. Donec eget efficitur ex. Donec eget dolor vitae eros feugiat tristique id vitae massa. </p>
							<a href="#" class="readmore-btn">Read More</a>
						</div>
					</div>
				</div>
			</div>
			<div class="blog-item feature-blog">
				<div class="row">
					<div class="col-lg-6">
						<img src={require("../img/blog/big-2.jpg")} alt=""></img>
					</div>
					<div class="col-lg-6">
						<div class="blog-text">
							<div class="blog-date">April 16, 2019</div>
							<h4>Papers you need to buy a house </h4>
							<p>Fusce lobortis a enim eget tempus. Class aptent taciti sociosqu ad litora. Donec eget efficitur ex. Donec eget dolor vitae eros feugiat tristique id vitae massa.  Donec eget dolor vitae eros feugiat tristique id vitae massa.  Donec eget dolor vitae eros feugiat tristique id vitae massa. </p>
							<a href="#" class="readmore-btn">Read More</a>
						</div>
					</div>
				</div>
			</div>
			<div class="site-pagination">
				<a href="#">01.</a>
				<a href="#" class="active">02.</a>
				<a href="#">03.</a>
				<a href="#">04.</a>
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

export default news;