// @ts-ignore
import { connect } from 'cloudflare:sockets';

// How to generate your own UUID:
// [Windows] Press "Win + R", input cmd and run:  Powershell -NoExit -Command "[guid]::NewGuid()"
let userID = 'd342d11e-d424-4583-b36e-524ab1f0afa4';

const พร็อกซีไอพีs = ['51.79.254.182', 'https://ipdb.api.030101.xyz/?type=bestproxy&country=true', 'bestcf.onecf.eu.org', 'cfip.xxxxxxxx.tk', 'bestproxy.onecf.eu.org', 'proxy.xxxxxxxx.tk', 'acjp2.cloudflarest.link:2053', 'acsg.cloudflarest.link:2053', 'acsg3.cloudflarest.link:2053', 'cdn-b100.xn--b6gac.eu.org', 'cdn-all.xn--b6gac.eu.org', 'xn--b6gac.eu.org', '194.58.56.87', '129.150.37.203', '18.141.204.88', '202.10.42.30', '52.74.101.26', '8.219.98.13'];

// if you want to use ipv6 or single พร็อกซีไอพี, please add comment at this line and remove comment at the next line
let พร็อกซีไอพี = พร็อกซีไอพีs[Math.floor(Math.random() * พร็อกซีไอพีs.length)];
// use single พร็อกซีไอพี instead of random
// let พร็อกซีไอพี = 'cdn.xn--b6gac.eu.org';
// ipv6 พร็อกซีไอพี example remove comment to use
// let พร็อกซีไอพี = "[2a01:4f8:c2c:123f:64:5:6810:c55a]"

let dohURL = 'https://sky.rethinkdns.com/1:-Pf_____9_8A_AMAIgE8kMABVDDmKOHTAKg='; // https://cloudflare-dns.com/dns-query or https://dns.google/dns-query

if (!isValidUUID(userID)) {
	throw new Error('uuid is invalid');
}

function homePageHTML() {
    return `


<!doctype html>
<html class="no-js" lang="zxx">
    <head>
        <!-- Meta Tags -->
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="keywords" content="Site keywords here">
		<meta name="description" content="">
		<meta name='copyright' content=''>
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		
		<!-- Title -->
        <title>Mediplus - Free Medical and Doctor Directory HTML Template.</title>
		
		<!-- Favicon -->
        <link rel="icon" href="img/favicon.png">
		
		<!-- Google Fonts -->
		<link href="https://fonts.googleapis.com/css?family=Poppins:200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap" rel="stylesheet">

		<!-- Bootstrap CSS -->
		<link rel="stylesheet" href="css/bootstrap.min.css">
		<!-- Nice Select CSS -->
		<link rel="stylesheet" href="css/nice-select.css">
		<!-- Font Awesome CSS -->
        <link rel="stylesheet" href="css/font-awesome.min.css">
		<!-- icofont CSS -->
        <link rel="stylesheet" href="css/icofont.css">
		<!-- Slicknav -->
		<link rel="stylesheet" href="css/slicknav.min.css">
		<!-- Owl Carousel CSS -->
        <link rel="stylesheet" href="css/owl-carousel.css">
		<!-- Datepicker CSS -->
		<link rel="stylesheet" href="css/datepicker.css">
		<!-- Animate CSS -->
        <link rel="stylesheet" href="css/animate.min.css">
		<!-- Magnific Popup CSS -->
        <link rel="stylesheet" href="css/magnific-popup.css">
		
		<!-- Medipro CSS -->
        <link rel="stylesheet" href="css/normalize.css">
        <link rel="stylesheet" href="style.css">
        <link rel="stylesheet" href="css/responsive.css">
		
    </head>
    <body>
	
		<!-- Preloader -->
        <div class="preloader">
            <div class="loader">
                <div class="loader-outter"></div>
                <div class="loader-inner"></div>

                <div class="indicator"> 
                    <svg width="16px" height="12px">
                        <polyline id="back" points="1 6 4 6 6 11 10 1 12 6 15 6"></polyline>
                        <polyline id="front" points="1 6 4 6 6 11 10 1 12 6 15 6"></polyline>
                    </svg>
                </div>
            </div>
        </div>
        <!-- End Preloader -->
		
		<!-- Get Pro Button -->
		<ul class="pro-features">
			<a class="get-pro" href="#">Get Pro</a>
			<li class="big-title">Pro Version Available on Themeforest</li>
			<li class="title">Pro Version Features</li>
			<li>2+ premade home pages</li>
			<li>20+ html pages</li>
			<li>Color Plate With 12+ Colors</li>
			<li>Sticky Header / Sticky Filters</li>
			<li>Working Contact Form With Google Map</li>
			<div class="button">
				<a href="http://preview.themeforest.net/item/mediplus-medical-and-doctor-html-template/full_screen_preview/26665910?_ga=2.145092285.888558928.1591971968-344530658.1588061879" target="_blank" class="btn">Pro Version Demo</a>
				<a href="https://themeforest.net/item/mediplus-medical-and-doctor-html-template/26665910" target="_blank" class="btn">Buy Pro Version</a>
			</div>
		</ul>
	
		<!-- Header Area -->
		<header class="header" >
			<!-- Topbar -->
			<div class="topbar">
				<div class="container">
					<div class="row">
						<div class="col-lg-6 col-md-5 col-12">
							<!-- Contact -->
							<ul class="top-link">
								<li><a href="#">About</a></li>
								<li><a href="#">Doctors</a></li>
								<li><a href="#">Contact</a></li>
								<li><a href="#">FAQ</a></li>
							</ul>
							<!-- End Contact -->
						</div>
						<div class="col-lg-6 col-md-7 col-12">
							<!-- Top Contact -->
							<ul class="top-contact">
								<li><i class="fa fa-phone"></i>+880 1234 56789</li>
								<li><i class="fa fa-envelope"></i><a href="mailto:support@yourmail.com">support@yourmail.com</a></li>
							</ul>
							<!-- End Top Contact -->
						</div>
					</div>
				</div>
			</div>
			<!-- End Topbar -->
			<!-- Header Inner -->
			<div class="header-inner">
				<div class="container">
					<div class="inner">
						<div class="row">
							<div class="col-lg-3 col-md-3 col-12">
								<!-- Start Logo -->
								<div class="logo">
									<a href="index.html"><img src="img/logo.png" alt="#"></a>
								</div>
								<!-- End Logo -->
								<!-- Mobile Nav -->
								<div class="mobile-nav"></div>
								<!-- End Mobile Nav -->
							</div>
							<div class="col-lg-7 col-md-9 col-12">
								<!-- Main Menu -->
								<div class="main-menu">
									<nav class="navigation">
										<ul class="nav menu">
											<li class="active"><a href="#">Home <i class="icofont-rounded-down"></i></a>
												<ul class="dropdown">
													<li><a href="index.html">Home Page 1</a></li>
												</ul>
											</li>
											<li><a href="#">Doctos </a></li>
											<li><a href="#">Services </a></li>
											<li><a href="#">Pages <i class="icofont-rounded-down"></i></a>
												<ul class="dropdown">
													<li><a href="404.html">404 Error</a></li>
												</ul>
											</li>
											<li><a href="#">Blogs <i class="icofont-rounded-down"></i></a>
												<ul class="dropdown">
													<li><a href="blog-single.html">Blog Details</a></li>
												</ul>
											</li>
											<li><a href="contact.html">Contact Us</a></li>
										</ul>
									</nav>
								</div>
								<!--/ End Main Menu -->
							</div>
							<div class="col-lg-2 col-12">
								<div class="get-quote">
									<a href="appointment.html" class="btn">Book Appointment</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!--/ End Header Inner -->
		</header>
		<!-- End Header Area -->
		
		<!-- Slider Area -->
		<section class="slider">
			<div class="hero-slider">
				<!-- Start Single Slider -->
				<div class="single-slider" style="background-image:url('img/slider2.jpg')">
					<div class="container">
						<div class="row">
							<div class="col-lg-7">
								<div class="text">
									<h1>We Provide <span>Medical</span> Services That You Can <span>Trust!</span></h1>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl pellentesque, faucibus libero eu, gravida quam. </p>
									<div class="button">
										<a href="#" class="btn">Get Appointment</a>
										<a href="#" class="btn primary">Learn More</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- End Single Slider -->
				<!-- Start Single Slider -->
				<div class="single-slider" style="background-image:url('img/slider.jpg')">
					<div class="container">
						<div class="row">
							<div class="col-lg-7">
								<div class="text">
									<h1>We Provide <span>Medical</span> Services That You Can <span>Trust!</span></h1>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl pellentesque, faucibus libero eu, gravida quam. </p>
									<div class="button">
										<a href="#" class="btn">Get Appointment</a>
										<a href="#" class="btn primary">About Us</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- Start End Slider -->
				<!-- Start Single Slider -->
				<div class="single-slider" style="background-image:url('img/slider3.jpg')">
					<div class="container">
						<div class="row">
							<div class="col-lg-7">
								<div class="text">
									<h1>We Provide <span>Medical</span> Services That You Can <span>Trust!</span></h1>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl pellentesque, faucibus libero eu, gravida quam. </p>
									<div class="button">
										<a href="#" class="btn">Get Appointment</a>
										<a href="#" class="btn primary">Conatct Now</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- End Single Slider -->
			</div>
		</section>
		<!--/ End Slider Area -->
		
		<!-- Start Schedule Area -->
		<section class="schedule">
			<div class="container">
				<div class="schedule-inner">
					<div class="row">
						<div class="col-lg-4 col-md-6 col-12 ">
							<!-- single-schedule -->
							<div class="single-schedule first">
								<div class="inner">
									<div class="icon">
										<i class="fa fa-ambulance"></i>
									</div>
									<div class="single-content">
										<span>Lorem Amet</span>
										<h4>Emergency Cases</h4>
										<p>Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales.</p>
										<a href="#">LEARN MORE<i class="fa fa-long-arrow-right"></i></a>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-4 col-md-6 col-12">
							<!-- single-schedule -->
							<div class="single-schedule middle">
								<div class="inner">
									<div class="icon">
										<i class="icofont-prescription"></i>
									</div>
									<div class="single-content">
										<span>Fusce Porttitor</span>
										<h4>Doctors Timetable</h4>
										<p>Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales.</p>
										<a href="#">LEARN MORE<i class="fa fa-long-arrow-right"></i></a>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-4 col-md-12 col-12">
							<!-- single-schedule -->
							<div class="single-schedule last">
								<div class="inner">
									<div class="icon">
										<i class="icofont-ui-clock"></i>
									</div>
									<div class="single-content">
										<span>Donec luctus</span>
										<h4>Opening Hours</h4>
										<ul class="time-sidual">
											<li class="day">Monday - Fridayp <span>8.00-20.00</span></li>
											<li class="day">Saturday <span>9.00-18.30</span></li>
											<li class="day">Monday - Thusday <span>9.00-15.00</span></li>
										</ul>
										<a href="#">LEARN MORE<i class="fa fa-long-arrow-right"></i></a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!--/End Start schedule Area -->

		<!-- Start Feautes -->
		<section class="Feautes section">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<div class="section-title">
							<h2>We Are Always Ready to Help You & Your Family</h2>
							<img src="img/section-img.png" alt="#">
							<p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-4 col-12">
						<!-- Start Single features -->
						<div class="single-features">
							<div class="signle-icon">
								<i class="icofont icofont-ambulance-cross"></i>
							</div>
							<h3>Emergency Help</h3>
							<p>Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.</p>
						</div>
						<!-- End Single features -->
					</div>
					<div class="col-lg-4 col-12">
						<!-- Start Single features -->
						<div class="single-features">
							<div class="signle-icon">
								<i class="icofont icofont-medical-sign-alt"></i>
							</div>
							<h3>Enriched Pharmecy</h3>
							<p>Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.</p>
						</div>
						<!-- End Single features -->
					</div>
					<div class="col-lg-4 col-12">
						<!-- Start Single features -->
						<div class="single-features last">
							<div class="signle-icon">
								<i class="icofont icofont-stethoscope"></i>
							</div>
							<h3>Medical Treatment</h3>
							<p>Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.</p>
						</div>
						<!-- End Single features -->
					</div>
				</div>
			</div>
		</section>
		<!--/ End Feautes -->
		
		<!-- Start Fun-facts -->
		<div id="fun-facts" class="fun-facts section overlay">
			<div class="container">
				<div class="row">
					<div class="col-lg-3 col-md-6 col-12">
						<!-- Start Single Fun -->
						<div class="single-fun">
							<i class="icofont icofont-home"></i>
							<div class="content">
								<span class="counter">3468</span>
								<p>Hospital Rooms</p>
							</div>
						</div>
						<!-- End Single Fun -->
					</div>
					<div class="col-lg-3 col-md-6 col-12">
						<!-- Start Single Fun -->
						<div class="single-fun">
							<i class="icofont icofont-user-alt-3"></i>
							<div class="content">
								<span class="counter">557</span>
								<p>Specialist Doctors</p>
							</div>
						</div>
						<!-- End Single Fun -->
					</div>
					<div class="col-lg-3 col-md-6 col-12">
						<!-- Start Single Fun -->
						<div class="single-fun">
							<i class="icofont-simple-smile"></i>
							<div class="content">
								<span class="counter">4379</span>
								<p>Happy Patients</p>
							</div>
						</div>
						<!-- End Single Fun -->
					</div>
					<div class="col-lg-3 col-md-6 col-12">
						<!-- Start Single Fun -->
						<div class="single-fun">
							<i class="icofont icofont-table"></i>
							<div class="content">
								<span class="counter">32</span>
								<p>Years of Experience</p>
							</div>
						</div>
						<!-- End Single Fun -->
					</div>
				</div>
			</div>
		</div>
		<!--/ End Fun-facts -->
		
		<!-- Start Why choose -->
		<section class="why-choose section" >
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<div class="section-title">
							<h2>We Offer Different Services To Improve Your Health</h2>
							<img src="img/section-img.png" alt="#">
							<p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-6 col-12">
						<!-- Start Choose Left -->
						<div class="choose-left">
							<h3>Who We Are</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra antege vel est lobortis, a commodo magna rhoncus. In quis nisi non emet quam pharetra commodo. </p>
							<p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
							<div class="row">
								<div class="col-lg-6">
									<ul class="list">
										<li><i class="fa fa-caret-right"></i>Maecenas vitae luctus nibh. </li>
										<li><i class="fa fa-caret-right"></i>Duis massa massa.</li>
										<li><i class="fa fa-caret-right"></i>Aliquam feugiat interdum.</li>
									</ul>
								</div>
								<div class="col-lg-6">
									<ul class="list">
										<li><i class="fa fa-caret-right"></i>Maecenas vitae luctus nibh. </li>
										<li><i class="fa fa-caret-right"></i>Duis massa massa.</li>
										<li><i class="fa fa-caret-right"></i>Aliquam feugiat interdum.</li>
									</ul>
								</div>
							</div>
						</div>
						<!-- End Choose Left -->
					</div>
					<div class="col-lg-6 col-12">
						<!-- Start Choose Rights -->
						<div class="choose-right">
							<div class="video-image">
								<!-- Video Animation -->
								<div class="promo-video">
									<div class="waves-block">
										<div class="waves wave-1"></div>
										<div class="waves wave-2"></div>
										<div class="waves wave-3"></div>
									</div>
								</div>
								<!--/ End Video Animation -->
								<a href="https://www.youtube.com/watch?v=RFVXy6CRVR4" class="video video-popup mfp-iframe"><i class="fa fa-play"></i></a>
							</div>
						</div>
						<!-- End Choose Rights -->
					</div>
				</div>
			</div>
		</section>
		<!--/ End Why choose -->
		
		<!-- Start Call to action -->
		<section class="call-action overlay" data-stellar-background-ratio="0.5">
			<div class="container">
				<div class="row">
					<div class="col-lg-12 col-md-12 col-12">
						<div class="content">
							<h2>Do you need Emergency Medical Care? Call @ 1234 56789</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porttitor dictum turpis nec gravida.</p>
							<div class="button">
								<a href="#" class="btn">Contact Now</a>
								<a href="#" class="btn second">Learn More<i class="fa fa-long-arrow-right"></i></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!--/ End Call to action -->
		
		<!-- Start portfolio -->
		<section class="portfolio section" >
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<div class="section-title">
							<h2>We Maintain Cleanliness Rules Inside Our Hospital</h2>
							<img src="img/section-img.png" alt="#">
							<p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p>
						</div>
					</div>
				</div>
			</div>
			<div class="container-fluid">
				<div class="row">
					<div class="col-lg-12 col-12">
						<div class="owl-carousel portfolio-slider">
							<div class="single-pf">
								<img src="img/pf1.jpg" alt="#">
								<a href="portfolio-details.html" class="btn">View Details</a>
							</div>
							<div class="single-pf">
								<img src="img/pf2.jpg" alt="#">
								<a href="portfolio-details.html" class="btn">View Details</a>
							</div>
							<div class="single-pf">
								<img src="img/pf3.jpg" alt="#">
								<a href="portfolio-details.html" class="btn">View Details</a>
							</div>
							<div class="single-pf">
								<img src="img/pf4.jpg" alt="#">
								<a href="portfolio-details.html" class="btn">View Details</a>
							</div>
							<div class="single-pf">
								<img src="img/pf1.jpg" alt="#">
								<a href="portfolio-details.html" class="btn">View Details</a>
							</div>
							<div class="single-pf">
								<img src="img/pf2.jpg" alt="#">
								<a href="portfolio-details.html" class="btn">View Details</a>
							</div>
							<div class="single-pf">
								<img src="img/pf3.jpg" alt="#">
								<a href="portfolio-details.html" class="btn">View Details</a>
							</div>
							<div class="single-pf">
								<img src="img/pf4.jpg" alt="#">
								<a href="portfolio-details.html" class="btn">View Details</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!--/ End portfolio -->
		
		<!-- Start service -->
		<section class="services section">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<div class="section-title">
							<h2>We Offer Different Services To Improve Your Health</h2>
							<img src="img/section-img.png" alt="#">
							<p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-4 col-md-6 col-12">
						<!-- Start Single Service -->
						<div class="single-service">
							<i class="icofont icofont-prescription"></i>
							<h4><a href="service-details.html">General Treatment</a></h4>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet. </p>	
						</div>
						<!-- End Single Service -->
					</div>
					<div class="col-lg-4 col-md-6 col-12">
						<!-- Start Single Service -->
						<div class="single-service">
							<i class="icofont icofont-tooth"></i>
							<h4><a href="service-details.html">Teeth Whitening</a></h4>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet. </p>	
						</div>
						<!-- End Single Service -->
					</div>
					<div class="col-lg-4 col-md-6 col-12">
						<!-- Start Single Service -->
						<div class="single-service">
							<i class="icofont icofont-heart-alt"></i>
							<h4><a href="service-details.html">Heart Surgery</a></h4>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet. </p>	
						</div>
						<!-- End Single Service -->
					</div>
					<div class="col-lg-4 col-md-6 col-12">
						<!-- Start Single Service -->
						<div class="single-service">
							<i class="icofont icofont-listening"></i>
							<h4><a href="service-details.html">Ear Treatment</a></h4>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet. </p>	
						</div>
						<!-- End Single Service -->
					</div>
					<div class="col-lg-4 col-md-6 col-12">
						<!-- Start Single Service -->
						<div class="single-service">
							<i class="icofont icofont-eye-alt"></i>
							<h4><a href="service-details.html">Vision Problems</a></h4>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet. </p>	
						</div>
						<!-- End Single Service -->
					</div>
					<div class="col-lg-4 col-md-6 col-12">
						<!-- Start Single Service -->
						<div class="single-service">
							<i class="icofont icofont-blood"></i>
							<h4><a href="service-details.html">Blood Transfusion</a></h4>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet. </p>	
						</div>
						<!-- End Single Service -->
					</div>
				</div>
			</div>
		</section>
		<!--/ End service -->
		
		<!-- Pricing Table -->
		<section class="pricing-table section">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<div class="section-title">
							<h2>We Provide You The Best Treatment In Resonable Price</h2>
							<img src="img/section-img.png" alt="#">
							<p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p>
						</div>
					</div>
				</div>
				<div class="row">
					<!-- Single Table -->
					<div class="col-lg-4 col-md-12 col-12">
						<div class="single-table">
							<!-- Table Head -->
							<div class="table-head">
								<div class="icon">
									<i class="icofont icofont-ui-cut"></i>
								</div>
								<h4 class="title">Plastic Suggery</h4>
								<div class="price">
									<p class="amount">$199<span>/ Per Visit</span></p>
								</div>	
							</div>
							<!-- Table List -->
							<ul class="table-list">
								<li><i class="icofont icofont-ui-check"></i>Lorem ipsum dolor sit</li>
								<li><i class="icofont icofont-ui-check"></i>Cubitur sollicitudin fentum</li>
								<li class="cross"><i class="icofont icofont-ui-close"></i>Nullam interdum enim</li>
								<li class="cross"><i class="icofont icofont-ui-close"></i>Donec ultricies metus</li>
								<li class="cross"><i class="icofont icofont-ui-close"></i>Pellentesque eget nibh</li>
							</ul>
							<div class="table-bottom">
								<a class="btn" href="#">Book Now</a>
							</div>
							<!-- Table Bottom -->
						</div>
					</div>
					<!-- End Single Table-->
					<!-- Single Table -->
					<div class="col-lg-4 col-md-12 col-12">
						<div class="single-table">
							<!-- Table Head -->
							<div class="table-head">
								<div class="icon">
									<i class="icofont icofont-tooth"></i>
								</div>
								<h4 class="title">Teeth Whitening</h4>
								<div class="price">
									<p class="amount">$299<span>/ Per Visit</span></p>
								</div>	
							</div>
							<!-- Table List -->
							<ul class="table-list">
								<li><i class="icofont icofont-ui-check"></i>Lorem ipsum dolor sit</li>
								<li><i class="icofont icofont-ui-check"></i>Cubitur sollicitudin fentum</li>
								<li><i class="icofont icofont-ui-check"></i>Nullam interdum enim</li>
								<li class="cross"><i class="icofont icofont-ui-close"></i>Donec ultricies metus</li>
								<li class="cross"><i class="icofont icofont-ui-close"></i>Pellentesque eget nibh</li>
							</ul>
							<div class="table-bottom">
								<a class="btn" href="#">Book Now</a>
							</div>
							<!-- Table Bottom -->
						</div>
					</div>
					<!-- End Single Table-->
					<!-- Single Table -->
					<div class="col-lg-4 col-md-12 col-12">
						<div class="single-table">
							<!-- Table Head -->
							<div class="table-head">
								<div class="icon">
									<i class="icofont-heart-beat"></i>
								</div>
								<h4 class="title">Heart Suggery</h4>
								<div class="price">
									<p class="amount">$399<span>/ Per Visit</span></p>
								</div>	
							</div>
							<!-- Table List -->
							<ul class="table-list">
								<li><i class="icofont icofont-ui-check"></i>Lorem ipsum dolor sit</li>
								<li><i class="icofont icofont-ui-check"></i>Cubitur sollicitudin fentum</li>
								<li><i class="icofont icofont-ui-check"></i>Nullam interdum enim</li>
								<li><i class="icofont icofont-ui-check"></i>Donec ultricies metus</li>
								<li><i class="icofont icofont-ui-check"></i>Pellentesque eget nibh</li>
							</ul>
							<div class="table-bottom">
								<a class="btn" href="#">Book Now</a>
							</div>
							<!-- Table Bottom -->
						</div>
					</div>
					<!-- End Single Table-->
				</div>	
			</div>	
		</section>	
		<!--/ End Pricing Table -->
		
		
		
		<!-- Start Blog Area -->
		<section class="blog section" id="blog">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<div class="section-title">
							<h2>Keep up with Our Most Recent Medical News.</h2>
							<img src="img/section-img.png" alt="#">
							<p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-4 col-md-6 col-12">
						<!-- Single Blog -->
						<div class="single-news">
							<div class="news-head">
								<img src="img/blog1.jpg" alt="#">
							</div>
							<div class="news-body">
								<div class="news-content">
									<div class="date">22 Aug, 2020</div>
									<h2><a href="blog-single.html">We have annnocuced our new product.</a></h2>
									<p class="text">Lorem ipsum dolor a sit ameti, consectetur adipisicing elit, sed do eiusmod tempor incididunt sed do incididunt sed.</p>
								</div>
							</div>
						</div>
						<!-- End Single Blog -->
					</div>
					<div class="col-lg-4 col-md-6 col-12">
						<!-- Single Blog -->
						<div class="single-news">
							<div class="news-head">
								<img src="img/blog2.jpg" alt="#">
							</div>
							<div class="news-body">
								<div class="news-content">
									<div class="date">15 Jul, 2020</div>
									<h2><a href="blog-single.html">Top five way for solving teeth problems.</a></h2>
									<p class="text">Lorem ipsum dolor a sit ameti, consectetur adipisicing elit, sed do eiusmod tempor incididunt sed do incididunt sed.</p>
								</div>
							</div>
						</div>
						<!-- End Single Blog -->
					</div>
					<div class="col-lg-4 col-md-6 col-12">
						<!-- Single Blog -->
						<div class="single-news">
							<div class="news-head">
								<img src="img/blog3.jpg" alt="#">
							</div>
							<div class="news-body">
								<div class="news-content">
									<div class="date">05 Jan, 2020</div>
									<h2><a href="blog-single.html">We provide highly business soliutions.</a></h2>
									<p class="text">Lorem ipsum dolor a sit ameti, consectetur adipisicing elit, sed do eiusmod tempor incididunt sed do incididunt sed.</p>
								</div>
							</div>
						</div>
						<!-- End Single Blog -->
					</div>
				</div>
			</div>
		</section>
		<!-- End Blog Area -->
		
		<!-- Start clients -->
		<div class="clients overlay">
			<div class="container">
				<div class="row">
					<div class="col-lg-12 col-md-12 col-12">
						<div class="owl-carousel clients-slider">
							<div class="single-clients">
								<img src="img/client1.png" alt="#">
							</div>
							<div class="single-clients">
								<img src="img/client2.png" alt="#">
							</div>
							<div class="single-clients">
								<img src="img/client3.png" alt="#">
							</div>
							<div class="single-clients">
								<img src="img/client4.png" alt="#">
							</div>
							<div class="single-clients">
								<img src="img/client5.png" alt="#">
							</div>
							<div class="single-clients">
								<img src="img/client1.png" alt="#">
							</div>
							<div class="single-clients">
								<img src="img/client2.png" alt="#">
							</div>
							<div class="single-clients">
								<img src="img/client3.png" alt="#">
							</div>
							<div class="single-clients">
								<img src="img/client4.png" alt="#">
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--/Ens clients -->
		
		<!-- Start Appointment -->
		<section class="appointment">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<div class="section-title">
							<h2>We Are Always Ready to Help You. Book An Appointment</h2>
							<img src="img/section-img.png" alt="#">
							<p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-6 col-md-12 col-12">
						<form class="form" action="#">
							<div class="row">
								<div class="col-lg-6 col-md-6 col-12">
									<div class="form-group">
										<input name="name" type="text" placeholder="Name">
									</div>
								</div>
								<div class="col-lg-6 col-md-6 col-12">
									<div class="form-group">
										<input name="email" type="email" placeholder="Email">
									</div>
								</div>
								<div class="col-lg-6 col-md-6 col-12">
									<div class="form-group">
										<input name="phone" type="text" placeholder="Phone">
									</div>
								</div>
								<div class="col-lg-6 col-md-6 col-12">
									<div class="form-group">
										<div class="nice-select form-control wide" tabindex="0"><span class="current">Department</span>
											<ul class="list">
												<li data-value="1" class="option selected ">Department</li>
												<li data-value="2" class="option">Cardiac Clinic</li>
												<li data-value="3" class="option">Neurology</li>
												<li data-value="4" class="option">Dentistry</li>
												<li data-value="5" class="option">Gastroenterology</li>
											</ul>
										</div>
									</div>
								</div>
								<div class="col-lg-6 col-md-6 col-12">
									<div class="form-group">
										<div class="nice-select form-control wide" tabindex="0"><span class="current">Doctor</span>
											<ul class="list">
												<li data-value="1" class="option selected ">Doctor</li>
												<li data-value="2" class="option">Dr. Akther Hossain</li>
												<li data-value="3" class="option">Dr. Dery Alex</li>
												<li data-value="4" class="option">Dr. Jovis Karon</li>
											</ul>
										</div>
									</div>
								</div>
								<div class="col-lg-6 col-md-6 col-12">
									<div class="form-group">
										<input type="text" placeholder="Date" id="datepicker">
									</div>
								</div>
								<div class="col-lg-12 col-md-12 col-12">
									<div class="form-group">
										<textarea name="message" placeholder="Write Your Message Here....."></textarea>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-lg-5 col-md-4 col-12">
									<div class="form-group">
										<div class="button">
											<button type="submit" class="btn">Book An Appointment</button>
										</div>
									</div>
								</div>
								<div class="col-lg-7 col-md-8 col-12">
									<p>( We will be confirm by an Text Message )</p>
								</div>
							</div>
						</form>
					</div>
					<div class="col-lg-6 col-md-12 ">
						<div class="appointment-image">
							<img src="img/contact-img.png" alt="#">
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- End Appointment -->
		
		<!-- Start Newsletter Area -->
		<section class="newsletter section">
			<div class="container">
				<div class="row ">
					<div class="col-lg-6  col-12">
						<!-- Start Newsletter Form -->
						<div class="subscribe-text ">
							<h6>Sign up for newsletter</h6>
							<p class="">Cu qui soleat partiendo urbanitas. Eum aperiri indoctum eu,<br> homero alterum.</p>
						</div>
						<!-- End Newsletter Form -->
					</div>
					<div class="col-lg-6  col-12">
						<!-- Start Newsletter Form -->
						<div class="subscribe-form ">
							<form action="mail/mail.php" method="get" target="_blank" class="newsletter-inner">
								<input name="EMAIL" placeholder="Your email address" class="common-input" onfocus="this.placeholder = ''"
									onblur="this.placeholder = 'Your email address'" required="" type="email">
								<button class="btn">Subscribe</button>
							</form>
						</div>
						<!-- End Newsletter Form -->
					</div>
				</div>
			</div>
		</section>
		<!-- /End Newsletter Area -->
		
		<!-- Footer Area -->
		<footer id="footer" class="footer ">
			<!-- Footer Top -->
			<div class="footer-top">
				<div class="container">
					<div class="row">
						<div class="col-lg-3 col-md-6 col-12">
							<div class="single-footer">
								<h2>About Us</h2>
								<p>Lorem ipsum dolor sit am consectetur adipisicing elit do eiusmod tempor incididunt ut labore dolore magna.</p>
								<!-- Social -->
								<ul class="social">
									<li><a href="#"><i class="icofont-facebook"></i></a></li>
									<li><a href="#"><i class="icofont-google-plus"></i></a></li>
									<li><a href="#"><i class="icofont-twitter"></i></a></li>
									<li><a href="#"><i class="icofont-vimeo"></i></a></li>
									<li><a href="#"><i class="icofont-pinterest"></i></a></li>
								</ul>
								<!-- End Social -->
							</div>
						</div>
						<div class="col-lg-3 col-md-6 col-12">
							<div class="single-footer f-link">
								<h2>Quick Links</h2>
								<div class="row">
									<div class="col-lg-6 col-md-6 col-12">
										<ul>
											<li><a href="#"><i class="fa fa-caret-right" aria-hidden="true"></i>Home</a></li>
											<li><a href="#"><i class="fa fa-caret-right" aria-hidden="true"></i>About Us</a></li>
											<li><a href="#"><i class="fa fa-caret-right" aria-hidden="true"></i>Services</a></li>
											<li><a href="#"><i class="fa fa-caret-right" aria-hidden="true"></i>Our Cases</a></li>
											<li><a href="#"><i class="fa fa-caret-right" aria-hidden="true"></i>Other Links</a></li>	
										</ul>
									</div>
									<div class="col-lg-6 col-md-6 col-12">
										<ul>
											<li><a href="#"><i class="fa fa-caret-right" aria-hidden="true"></i>Consuling</a></li>
											<li><a href="#"><i class="fa fa-caret-right" aria-hidden="true"></i>Finance</a></li>
											<li><a href="#"><i class="fa fa-caret-right" aria-hidden="true"></i>Testimonials</a></li>
											<li><a href="#"><i class="fa fa-caret-right" aria-hidden="true"></i>FAQ</a></li>
											<li><a href="#"><i class="fa fa-caret-right" aria-hidden="true"></i>Contact Us</a></li>	
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-3 col-md-6 col-12">
							<div class="single-footer">
								<h2>Open Hours</h2>
								<p>Lorem ipsum dolor sit ame consectetur adipisicing elit do eiusmod tempor incididunt.</p>
								<ul class="time-sidual">
									<li class="day">Monday - Fridayp <span>8.00-20.00</span></li>
									<li class="day">Saturday <span>9.00-18.30</span></li>
									<li class="day">Monday - Thusday <span>9.00-15.00</span></li>
								</ul>
							</div>
						</div>
						<div class="col-lg-3 col-md-6 col-12">
							<div class="single-footer">
								<h2>Newsletter</h2>
								<p>subscribe to our newsletter to get allour news in your inbox.. Lorem ipsum dolor sit amet, consectetur adipisicing elit,</p>
								<form action="mail/mail.php" method="get" target="_blank" class="newsletter-inner">
									<input name="email" placeholder="Email Address" class="common-input" onfocus="this.placeholder = ''"
										onblur="this.placeholder = 'Your email address'" required="" type="email">
									<button class="button"><i class="icofont icofont-paper-plane"></i></button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!--/ End Footer Top -->
			<!-- Copyright -->
			<div class="copyright">
				<div class="container">
					<div class="row">
						<div class="col-lg-12 col-md-12 col-12">
							<div class="copyright-content">
								<p>© Copyright 2018  |  All Rights Reserved by <a href="https://www.wpthemesgrid.com" target="_blank">wpthemesgrid.com</a> </p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!--/ End Copyright -->
		</footer>
		<!--/ End Footer Area -->
		
		<!-- jquery Min JS -->
        <script src="js/jquery.min.js"></script>
		<!-- jquery Migrate JS -->
		<script src="js/jquery-migrate-3.0.0.js"></script>
		<!-- jquery Ui JS -->
		<script src="js/jquery-ui.min.js"></script>
		<!-- Easing JS -->
        <script src="js/easing.js"></script>
		<!-- Color JS -->
		<script src="js/colors.js"></script>
		<!-- Popper JS -->
		<script src="js/popper.min.js"></script>
		<!-- Bootstrap Datepicker JS -->
		<script src="js/bootstrap-datepicker.js"></script>
		<!-- Jquery Nav JS -->
        <script src="js/jquery.nav.js"></script>
		<!-- Slicknav JS -->
		<script src="js/slicknav.min.js"></script>
		<!-- ScrollUp JS -->
        <script src="js/jquery.scrollUp.min.js"></script>
		<!-- Niceselect JS -->
		<script src="js/niceselect.js"></script>
		<!-- Tilt Jquery JS -->
		<script src="js/tilt.jquery.min.js"></script>
		<!-- Owl Carousel JS -->
        <script src="js/owl-carousel.js"></script>
		<!-- counterup JS -->
		<script src="js/jquery.counterup.min.js"></script>
		<!-- Steller JS -->
		<script src="js/steller.js"></script>
		<!-- Wow JS -->
		<script src="js/wow.min.js"></script>
		<!-- Magnific Popup JS -->
		<script src="js/jquery.magnific-popup.min.js"></script>
		<!-- Counter Up CDN JS -->
		<script src="http://cdnjs.cloudflare.com/ajax/libs/waypoints/2.0.3/waypoints.min.js"></script>
		<!-- Bootstrap JS -->
		<script src="js/bootstrap.min.js"></script>
		<!-- Main JS -->
		<script src="js/main.js"></script>
    </body>
</html>


 
  
    `;
}



export default {
    /**
     * @param {import("@cloudflare/workers-types").Request} request
     * @param {{UUID: string, พร็อกซีไอพี: string, DNS_RESOLVER_URL: string, NODE_ID: int, API_HOST: string, API_TOKEN: string}} env
     * @param {import("@cloudflare/workers-types").ExecutionContext} ctx
     * @returns {Promise<Response>}
     */
    async fetch(request, env, ctx) {
        try {
            userID = env.UUID || userID;
            พร็อกซีไอพี = env.PROXYIP || พร็อกซีไอพี;
            dohURL = env.DNS_RESOLVER_URL || dohURL;
            let userID_Path = userID;
            if (userID.includes(',')) {
                userID_Path = userID.split(',')[0];
            }
            const upgradeHeader = request.headers.get('Upgrade');
            
            // 检查请求路径
            const url = new URL(request.url);
            
            // 检查是否为根路径的直接访问
            if (url.pathname === '/') {
                return new Response(homePageHTML(), {
                    status: 200,
                    headers: {
                        "Content-Type": "text/html; charset=utf-8",
                    },
                });
            }
            
            // 检查是否为 WebSocket 升级请求
            if (!upgradeHeader || upgradeHeader !== 'websocket') {
                switch (url.pathname) {
                    case `/cf`: {
                        // 返回请求的 Cloudflare 对象信息
                        return new Response(JSON.stringify(request.cf, null, 4), {
                            status: 200,
                            headers: {
                                "Content-Type": "application/json;charset=utf-8",
                            },
                        });
                    }
                    case `/${userID_Path}`: {
                        // 返回生成的 vless 配置信息
                        const วเลสConfig = getวเลสConfig(userID, request.headers.get('Host'));
                        return new Response(`${วเลสConfig}`, {
                            status: 200,
                            headers: {
                                "Content-Type": "text/html; charset=utf-8",
                            }
                        });
                    }
                    case `/sub/${userID_Path}`: {
                        // 返回 vless 订阅信息
                        const วเลสSubConfig = สร้างวเลสSub(userID, request.headers.get('Host'));
                        return new Response(btoa(วเลสSubConfig), {
                            status: 200,
                            headers: {
                                "Content-Type": "text/plain;charset=utf-8",
                            }
                        });
                    }
                    case `/bestip/${userID_Path}`: {
                        // 请求最佳 IP 地址配置并返回
                        const headers = request.headers;
                        const url = `https://sub.xf.free.hr/auto?host=${request.headers.get('Host')}&uuid=${userID}&path=/`;
                        const bestSubConfig = await fetch(url, { headers: headers });
                        return bestSubConfig;
                    }
                    default:
                        // 对于其他路径，进行反向代理请求到随机网站
                        const randomHostname = cn_hostnames[Math.floor(Math.random() * cn_hostnames.length)];
                        const newHeaders = new Headers(request.headers);
                        newHeaders.set('cf-connecting-ip', '1.2.3.4');
                        newHeaders.set('x-forwarded-for', '1.2.3.4');
                        newHeaders.set('x-real-ip', '1.2.3.4');
                        newHeaders.set('referer', 'https://www.google.com/search?q=BEDEBAH');
                        
                        // 构造代理请求
                        const proxyUrl = 'https://' + randomHostname + url.pathname + url.search;
                        let modifiedRequest = new Request(proxyUrl, {
                            method: request.method,
                            headers: newHeaders,
                            body: request.body,
                            redirect: 'manual',
                        });
                        
                        // 发送代理请求并处理重定向
                        const proxyResponse = await fetch(modifiedRequest, { redirect: 'manual' });
                        if ([301, 302].includes(proxyResponse.status)) {
                            return new Response(`Redirects to ${randomHostname} are not allowed.`, {
                                status: 403,
                                statusText: 'Forbidden',
                            });
                        }
                        
                        // 返回代理服务器的响应
                        return proxyResponse;
                }
            } else {
                // 处理 WebSocket 请求
                return await วเลสOverWSHandler(request);
            }
        } catch (err) {
            /** @type {Error} */ let e = err;
            return new Response(e.toString());
        }
    },
};

export async function uuid_validator(request) {
	const hostname = request.headers.get('Host');
	const currentDate = new Date();

	const subdomain = hostname.split('.')[0];
	const year = currentDate.getFullYear();
	const month = String(currentDate.getMonth() + 1).padStart(2, '0');
	const day = String(currentDate.getDate()).padStart(2, '0');

	const formattedDate = `${year}-${month}-${day}`;

	// const daliy_sub = formattedDate + subdomain
	const hashHex = await hashHex_f(subdomain);
	// subdomain string contains timestamps utc and uuid string TODO.
	console.log(hashHex, subdomain, formattedDate);
}

export async function hashHex_f(string) {
	const encoder = new TextEncoder();
	const data = encoder.encode(string);
	const hashBuffer = await crypto.subtle.digest('SHA-256', data);
	const hashArray = Array.from(new Uint8Array(hashBuffer));
	const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
	return hashHex;
}

/**
 * Handles วเลส over WebSocket requests by creating a WebSocket pair, accepting the WebSocket connection, and processing the วเลส header.
 * @param {import("@cloudflare/workers-types").Request} request The incoming request object.
 * @returns {Promise<Response>} A Promise that resolves to a WebSocket response object.
 */
async function วเลสOverWSHandler(request) {
	const webSocketPair = new WebSocketPair();
	const [client, webSocket] = Object.values(webSocketPair);
	webSocket.accept();

	let address = '';
	let portWithRandomLog = '';
	let currentDate = new Date();
	const log = (/** @type {string} */ info, /** @type {string | undefined} */ event) => {
		console.log(`[${currentDate} ${address}:${portWithRandomLog}] ${info}`, event || '');
	};
	const earlyDataHeader = request.headers.get('sec-websocket-protocol') || '';

	const readableWebSocketStream = makeReadableWebSocketStream(webSocket, earlyDataHeader, log);

	/** @type {{ value: import("@cloudflare/workers-types").Socket | null}}*/
	let remoteSocketWapper = {
		value: null,
	};
	let udpStreamWrite = null;
	let isDns = false;

	// ws --> remote
	readableWebSocketStream.pipeTo(new WritableStream({
		async write(chunk, controller) {
			if (isDns && udpStreamWrite) {
				return udpStreamWrite(chunk);
			}
			if (remoteSocketWapper.value) {
				const writer = remoteSocketWapper.value.writable.getWriter()
				await writer.write(chunk);
				writer.releaseLock();
				return;
			}

			const {
				hasError,
				message,
				portRemote = 443,
				addressRemote = '',
				rawDataIndex,
				วเลสVersion = new Uint8Array([0, 0]),
				isUDP,
			} = processวเลสHeader(chunk, userID);
			address = addressRemote;
			portWithRandomLog = `${portRemote} ${isUDP ? 'udp' : 'tcp'} `;
			if (hasError) {
				// controller.error(message);
				throw new Error(message); // cf seems has bug, controller.error will not end stream
			}

			// If UDP and not DNS port, close it
			if (isUDP && portRemote !== 53) {
				throw new Error('UDP proxy only enabled for DNS which is port 53');
				// cf seems has bug, controller.error will not end stream
			}

			if (isUDP && portRemote === 53) {
				isDns = true;
			}

			// ["version", "附加信息长度 N"]
			const วเลสResponseHeader = new Uint8Array([วเลสVersion[0], 0]);
			const rawClientData = chunk.slice(rawDataIndex);

			// TODO: support udp here when cf runtime has udp support
			if (isDns) {
				const { write } = await handleUDPOutBound(webSocket, วเลสResponseHeader, log);
				udpStreamWrite = write;
				udpStreamWrite(rawClientData);
				return;
			}
			handleTCPOutBound(remoteSocketWapper, addressRemote, portRemote, rawClientData, webSocket, วเลสResponseHeader, log);
		},
		close() {
			log(`readableWebSocketStream is close`);
		},
		abort(reason) {
			log(`readableWebSocketStream is abort`, JSON.stringify(reason));
		},
	})).catch((err) => {
		log('readableWebSocketStream pipeTo error', err);
	});

	return new Response(null, {
		status: 101,
		webSocket: client,
	});
}

/**
 * Handles outbound TCP connections.
 *
 * @param {any} remoteSocket 
 * @param {string} addressRemote The remote address to connect to.
 * @param {number} portRemote The remote port to connect to.
 * @param {Uint8Array} rawClientData The raw client data to write.
 * @param {import("@cloudflare/workers-types").WebSocket} webSocket The WebSocket to pass the remote socket to.
 * @param {Uint8Array} วเลสResponseHeader The วเลส response header.
 * @param {function} log The logging function.
 * @returns {Promise<void>} The remote socket.
 */
async function handleTCPOutBound(remoteSocket, addressRemote, portRemote, rawClientData, webSocket, วเลสResponseHeader, log,) {

	/**
	 * Connects to a given address and port and writes data to the socket.
	 * @param {string} address The address to connect to.
	 * @param {number} port The port to connect to.
	 * @returns {Promise<import("@cloudflare/workers-types").Socket>} A Promise that resolves to the connected socket.
	 */
	async function connectAndWrite(address, port) {
		/** @type {import("@cloudflare/workers-types").Socket} */
		const tcpSocket = connect({
			hostname: address,
			port: port,
		});
		remoteSocket.value = tcpSocket;
		log(`connected to ${address}:${port}`);
		const writer = tcpSocket.writable.getWriter();
		await writer.write(rawClientData); // first write, nomal is tls client hello
		writer.releaseLock();
		return tcpSocket;
	}

	/**
	 * Retries connecting to the remote address and port if the Cloudflare socket has no incoming data.
	 * @returns {Promise<void>} A Promise that resolves when the retry is complete.
	 */
	async function retry() {
		const tcpSocket = await connectAndWrite(พร็อกซีไอพี || addressRemote, portRemote)
		tcpSocket.closed.catch(error => {
			console.log('retry tcpSocket closed error', error);
		}).finally(() => {
			safeCloseWebSocket(webSocket);
		})
		remoteSocketToWS(tcpSocket, webSocket, วเลสResponseHeader, null, log);
	}

	const tcpSocket = await connectAndWrite(addressRemote, portRemote);

	// when remoteSocket is ready, pass to websocket
	// remote--> ws
	remoteSocketToWS(tcpSocket, webSocket, วเลสResponseHeader, retry, log);
}

/**
 * Creates a readable stream from a WebSocket server, allowing for data to be read from the WebSocket.
 * @param {import("@cloudflare/workers-types").WebSocket} webSocketServer The WebSocket server to create the readable stream from.
 * @param {string} earlyDataHeader The header containing early data for WebSocket 0-RTT.
 * @param {(info: string)=> void} log The logging function.
 * @returns {ReadableStream} A readable stream that can be used to read data from the WebSocket.
 */
function makeReadableWebSocketStream(webSocketServer, earlyDataHeader, log) {
	let readableStreamCancel = false;
	const stream = new ReadableStream({
		start(controller) {
			webSocketServer.addEventListener('message', (event) => {
				const message = event.data;
				controller.enqueue(message);
			});

			webSocketServer.addEventListener('close', () => {
				safeCloseWebSocket(webSocketServer);
				controller.close();
			});

			webSocketServer.addEventListener('error', (err) => {
				log('webSocketServer has error');
				controller.error(err);
			});
			const { earlyData, error } = base64ToArrayBuffer(earlyDataHeader);
			if (error) {
				controller.error(error);
			} else if (earlyData) {
				controller.enqueue(earlyData);
			}
		},

		pull(controller) {
			// if ws can stop read if stream is full, we can implement backpressure
			// https://streams.spec.whatwg.org/#example-rs-push-backpressure
		},

		cancel(reason) {
			log(`ReadableStream was canceled, due to ${reason}`)
			readableStreamCancel = true;
			safeCloseWebSocket(webSocketServer);
		}
	});

	return stream;
}

// https://xtls.github.io/development/protocols/วเลส.html
// https://github.com/zizifn/excalidraw-backup/blob/main/v2ray-protocol.excalidraw

/**
 * Processes the วเลส header buffer and returns an object with the relevant information.
 * @param {ArrayBuffer} วเลสBuffer The วเลส header buffer to process.
 * @param {string} userID The user ID to validate against the UUID in the วเลส header.
 * @returns {{
 *  hasError: boolean,
 *  message?: string,
 *  addressRemote?: string,
 *  addressType?: number,
 *  portRemote?: number,
 *  rawDataIndex?: number,
 *  วเลสVersion?: Uint8Array,
 *  isUDP?: boolean
 * }} An object with the relevant information extracted from the วเลส header buffer.
 */
function processวเลสHeader(วเลสBuffer, userID) {
	if (วเลสBuffer.byteLength < 24) {
		return {
			hasError: true,
			message: 'invalid data',
		};
	}

	const version = new Uint8Array(วเลสBuffer.slice(0, 1));
	let isValidUser = false;
	let isUDP = false;
	const slicedBuffer = new Uint8Array(วเลสBuffer.slice(1, 17));
	const slicedBufferString = stringify(slicedBuffer);
	// check if userID is valid uuid or uuids split by , and contains userID in it otherwise return error message to console
	const uuids = userID.includes(',') ? userID.split(",") : [userID];
	// uuid_validator(hostName, slicedBufferString);


	// isValidUser = uuids.some(userUuid => slicedBufferString === userUuid.trim());
	isValidUser = uuids.some(userUuid => slicedBufferString === userUuid.trim()) || uuids.length === 1 && slicedBufferString === uuids[0].trim();

	console.log(`userID: ${slicedBufferString}`);

	if (!isValidUser) {
		return {
			hasError: true,
			message: 'invalid user',
		};
	}

	const optLength = new Uint8Array(วเลสBuffer.slice(17, 18))[0];
	//skip opt for now

	const command = new Uint8Array(
		วเลสBuffer.slice(18 + optLength, 18 + optLength + 1)
	)[0];

	// 0x01 TCP
	// 0x02 UDP
	// 0x03 MUX
	if (command === 1) {
		isUDP = false;
	} else if (command === 2) {
		isUDP = true;
	} else {
		return {
			hasError: true,
			message: `command ${command} is not support, command 01-tcp,02-udp,03-mux`,
		};
	}
	const portIndex = 18 + optLength + 1;
	const portBuffer = วเลสBuffer.slice(portIndex, portIndex + 2);
	// port is big-Endian in raw data etc 80 == 0x005d
	const portRemote = new DataView(portBuffer).getUint16(0);

	let addressIndex = portIndex + 2;
	const addressBuffer = new Uint8Array(
		วเลสBuffer.slice(addressIndex, addressIndex + 1)
	);

	// 1--> ipv4  addressLength =4
	// 2--> domain name addressLength=addressBuffer[1]
	// 3--> ipv6  addressLength =16
	const addressType = addressBuffer[0];
	let addressLength = 0;
	let addressValueIndex = addressIndex + 1;
	let addressValue = '';
	switch (addressType) {
		case 1:
			addressLength = 4;
			addressValue = new Uint8Array(
				วเลสBuffer.slice(addressValueIndex, addressValueIndex + addressLength)
			).join('.');
			break;
		case 2:
			addressLength = new Uint8Array(
				วเลสBuffer.slice(addressValueIndex, addressValueIndex + 1)
			)[0];
			addressValueIndex += 1;
			addressValue = new TextDecoder().decode(
				วเลสBuffer.slice(addressValueIndex, addressValueIndex + addressLength)
			);
			break;
		case 3:
			addressLength = 16;
			const dataView = new DataView(
				วเลสBuffer.slice(addressValueIndex, addressValueIndex + addressLength)
			);
			// 2001:0db8:85a3:0000:0000:8a2e:0370:7334
			const ipv6 = [];
			for (let i = 0; i < 8; i++) {
				ipv6.push(dataView.getUint16(i * 2).toString(16));
			}
			addressValue = ipv6.join(':');
			// seems no need add [] for ipv6
			break;
		default:
			return {
				hasError: true,
				message: `invild  addressType is ${addressType}`,
			};
	}
	if (!addressValue) {
		return {
			hasError: true,
			message: `addressValue is empty, addressType is ${addressType}`,
		};
	}

	return {
		hasError: false,
		addressRemote: addressValue,
		addressType,
		portRemote,
		rawDataIndex: addressValueIndex + addressLength,
		วเลสVersion: version,
		isUDP,
	};
}


/**
 * Converts a remote socket to a WebSocket connection.
 * @param {import("@cloudflare/workers-types").Socket} remoteSocket The remote socket to convert.
 * @param {import("@cloudflare/workers-types").WebSocket} webSocket The WebSocket to connect to.
 * @param {ArrayBuffer | null} วเลสResponseHeader The วเลส response header.
 * @param {(() => Promise<void>) | null} retry The function to retry the connection if it fails.
 * @param {(info: string) => void} log The logging function.
 * @returns {Promise<void>} A Promise that resolves when the conversion is complete.
 */
async function remoteSocketToWS(remoteSocket, webSocket, วเลสResponseHeader, retry, log) {
	// remote--> ws
	let remoteChunkCount = 0;
	let chunks = [];
	/** @type {ArrayBuffer | null} */
	let วเลสHeader = วเลสResponseHeader;
	let hasIncomingData = false; // check if remoteSocket has incoming data
	await remoteSocket.readable
		.pipeTo(
			new WritableStream({
				start() {
				},
				/**
				 * 
				 * @param {Uint8Array} chunk 
				 * @param {*} controller 
				 */
				async write(chunk, controller) {
					hasIncomingData = true;
					remoteChunkCount++;
					if (webSocket.readyState !== WS_READY_STATE_OPEN) {
						controller.error(
							'webSocket.readyState is not open, maybe close'
						);
					}
					if (วเลสHeader) {
						webSocket.send(await new Blob([วเลสHeader, chunk]).arrayBuffer());
						วเลสHeader = null;
					} else {
						// console.log(`remoteSocketToWS send chunk ${chunk.byteLength}`);
						// seems no need rate limit this, CF seems fix this??..
						// if (remoteChunkCount > 20000) {
						// 	// cf one package is 4096 byte(4kb),  4096 * 20000 = 80M
						// 	await delay(1);
						// }
						webSocket.send(chunk);
					}
				},
				close() {
					log(`remoteConnection!.readable is close with hasIncomingData is ${hasIncomingData}`);
					// safeCloseWebSocket(webSocket); // no need server close websocket frist for some case will casue HTTP ERR_CONTENT_LENGTH_MISMATCH issue, client will send close event anyway.
				},
				abort(reason) {
					console.error(`remoteConnection!.readable abort`, reason);
				},
			})
		)
		.catch((error) => {
			console.error(
				`remoteSocketToWS has exception `,
				error.stack || error
			);
			safeCloseWebSocket(webSocket);
		});

	// seems is cf connect socket have error,
	// 1. Socket.closed will have error
	// 2. Socket.readable will be close without any data coming
	if (hasIncomingData === false && retry) {
		log(`retry`)
		retry();
	}
}

/**
 * Decodes a base64 string into an ArrayBuffer.
 * @param {string} base64Str The base64 string to decode.
 * @returns {{earlyData: ArrayBuffer|null, error: Error|null}} An object containing the decoded ArrayBuffer or null if there was an error, and any error that occurred during decoding or null if there was no error.
 */
function base64ToArrayBuffer(base64Str) {
	if (!base64Str) {
		return { earlyData: null, error: null };
	}
	try {
		// go use modified Base64 for URL rfc4648 which js atob not support
		base64Str = base64Str.replace(/-/g, '+').replace(/_/g, '/');
		const decode = atob(base64Str);
		const arryBuffer = Uint8Array.from(decode, (c) => c.charCodeAt(0));
		return { earlyData: arryBuffer.buffer, error: null };
	} catch (error) {
		return { earlyData: null, error };
	}
}

/**
 * Checks if a given string is a valid UUID.
 * Note: This is not a real UUID validation.
 * @param {string} uuid The string to validate as a UUID.
 * @returns {boolean} True if the string is a valid UUID, false otherwise.
 */
function isValidUUID(uuid) {
	const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
	return uuidRegex.test(uuid);
}

const WS_READY_STATE_OPEN = 1;
const WS_READY_STATE_CLOSING = 2;
/**
 * Closes a WebSocket connection safely without throwing exceptions.
 * @param {import("@cloudflare/workers-types").WebSocket} socket The WebSocket connection to close.
 */
function safeCloseWebSocket(socket) {
	try {
		if (socket.readyState === WS_READY_STATE_OPEN || socket.readyState === WS_READY_STATE_CLOSING) {
			socket.close();
		}
	} catch (error) {
		console.error('safeCloseWebSocket error', error);
	}
}

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
	byteToHex.push((i + 256).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
	return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}

function stringify(arr, offset = 0) {
	const uuid = unsafeStringify(arr, offset);
	if (!isValidUUID(uuid)) {
		throw TypeError("Stringified UUID is invalid");
	}
	return uuid;
}


/**
 * Handles outbound UDP traffic by transforming the data into DNS queries and sending them over a WebSocket connection.
 * @param {import("@cloudflare/workers-types").WebSocket} webSocket The WebSocket connection to send the DNS queries over.
 * @param {ArrayBuffer} วเลสResponseHeader The วเลส response header.
 * @param {(string) => void} log The logging function.
 * @returns {{write: (chunk: Uint8Array) => void}} An object with a write method that accepts a Uint8Array chunk to write to the transform stream.
 */
async function handleUDPOutBound(webSocket, วเลสResponseHeader, log) {

	let isวเลสHeaderSent = false;
	const transformStream = new TransformStream({
		start(controller) {

		},
		transform(chunk, controller) {
			// udp message 2 byte is the the length of udp data
			// TODO: this should have bug, beacsue maybe udp chunk can be in two websocket message
			for (let index = 0; index < chunk.byteLength;) {
				const lengthBuffer = chunk.slice(index, index + 2);
				const udpPakcetLength = new DataView(lengthBuffer).getUint16(0);
				const udpData = new Uint8Array(
					chunk.slice(index + 2, index + 2 + udpPakcetLength)
				);
				index = index + 2 + udpPakcetLength;
				controller.enqueue(udpData);
			}
		},
		flush(controller) {
		}
	});

	// only handle dns udp for now
	transformStream.readable.pipeTo(new WritableStream({
		async write(chunk) {
			const resp = await fetch(dohURL, // dns server url
				{
					method: 'POST',
					headers: {
						'content-type': 'application/dns-message',
					},
					body: chunk,
				})
			const dnsQueryResult = await resp.arrayBuffer();
			const udpSize = dnsQueryResult.byteLength;
			// console.log([...new Uint8Array(dnsQueryResult)].map((x) => x.toString(16)));
			const udpSizeBuffer = new Uint8Array([(udpSize >> 8) & 0xff, udpSize & 0xff]);
			if (webSocket.readyState === WS_READY_STATE_OPEN) {
				log(`doh success and dns message length is ${udpSize}`);
				if (isวเลสHeaderSent) {
					webSocket.send(await new Blob([udpSizeBuffer, dnsQueryResult]).arrayBuffer());
				} else {
					webSocket.send(await new Blob([วเลสResponseHeader, udpSizeBuffer, dnsQueryResult]).arrayBuffer());
					isวเลสHeaderSent = true;
				}
			}
		}
	})).catch((error) => {
		log('dns udp has error' + error)
	});

	const writer = transformStream.writable.getWriter();

	return {
		/**
		 * 
		 * @param {Uint8Array} chunk 
		 */
		write(chunk) {
			writer.write(chunk);
		}
	};
}

const at = 'QA==';
const pt = 'dmxlc3M=';
const ed = 'RUR0dW5uZWw=';
/**
 *
 * @param {string} userID - single or comma separated userIDs
 * @param {string | null} hostName
 * @returns {string}
 */
function getวเลสConfig(userIDs, hostName) {
	const commonUrlPart = `:443?encryption=none&security=tls&sni=${hostName}&fp=randomized&type=ws&host=${hostName}&path=%22F%3Fed%3D2048#${hostName}`;
	const hashSeparator = "____________________________________________";

	// Split the userIDs into an array
	const userIDArray = userIDs.split(",");

	// Prepare output string for each userID
	const output = userIDArray.map((userID) => {
		const วเลสMain = atob(pt) + '://' + userID + atob(at) + hostName + commonUrlPart;
		const วเลสSec = atob(pt) + '://' + userID + atob(at) + พร็อกซีไอพี + commonUrlPart;
		return `<h2>UUID: ${userID}</h2>${hashSeparator}\nv2ray default ip
---------------------------------------------------------------
${วเลสMain}
<button onclick='copyToClipboard("${วเลสMain}")'><i class="fa fa-clipboard"></i> COPY</button>
---------------------------------------------------------------
v2ray with bestip
---------------------------------------------------------------
${วเลสSec}
<button onclick='copyToClipboard("${วเลสSec}")'><i class="fa fa-clipboard"></i> COPY</button>
---------------------------------------------------------------`;
	}).join('\n');
	const sublink = `https://${hostName}/sub/${userIDArray[0]}?format=clash`
	const subbestip = `https://${hostName}/bestip/${userIDArray[0]}`;
	const clash_link = `https://api.v1.mk/sub?target=clash&url=${encodeURIComponent(sublink)}&insert=false&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
	// Prepare header string
	const header = `
<b style='font-size: 15px;'>Welcome! This function generates configuration for vless protocol. If you found this useful, please check our GitHub project for more:</b>
<b style='font-size: 15px;'>BEDEBAH TUNNEL</b>
<a href='https://github.com/win877969/cf-ws' target='_blank'>BEDEBAH - https://github.com/win877969/cf-ws</a>

<a href='//${hostName}/sub/${userIDArray[0]}' target='_blank'>vless sub</a>
<a href='clash://install-config?url=${encodeURIComponent(`https://${hostName}/sub/${userIDArray[0]}?format=clash`)}}' target='_blank'>Clash for Windows Sub</a>
<a href='${clash_link}' target='_blank'>Clash Sub</a>
<a href='${subbestip}' target='_blank'>BEST IP</a>
<a href='clash://install-config?url=${encodeURIComponent(subbestip)}' target='_blank'>CLASH BEST IP</a>
<a href='sing-box://import-remote-profile?url=${encodeURIComponent(subbestip)}' target='_blank'>SingBox BEST IP</a>
<a href='sn://subscription?url=${encodeURIComponent(subbestip)}' target='_blank'>NekoBox BEST IP</a>
<a href='v2rayng://install-config?url=${encodeURIComponent(subbestip)}' target='_blank'>V2RaynG BEST IP</a></p>`;

	// HTML Head with CSS and FontAwesome library
	const htmlHead = `
<head>
	<title>BEDEBAH: VLESS Configuration</title>
	<meta name='description' content='This is a tool for generating VLESS protocol configurations. Give us a star on GitHub https://github.com/win877969/cf-ws if you found it useful!'>
	<meta name='keywords' content='BEDEBAH, Cloudflare Pages, Cloudflare Worker, Severless'>
	<meta name='viewport' content='width=device-width, initial-scale=1'>
	<meta property='og:site_name' content='BEDEBAH: VLESS Configuration' />
	<meta property='og:type' content='website' />
	<meta property='og:title' content='BEDEBAH - VLESS Configuration and Subscribe Output' />
	<meta property='og:description' content='Use Cloudflare Pages and Worker Severless to implement VLESS protocol' />
	<meta property='og:url' content='https://${hostName}/' />
	<meta property='og:image' content='https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${encodeURIComponent(`วเลส://${userIDs.split(",")[0]}@${hostName}${commonUrlPart}`)}' />
	<meta name='twitter:card' content='summary_large_image' />
	<meta name='twitter:title' content='BEDEBAH - VLESS Configuration and Subscribe Output' />
	<meta name='twitter:description' content='Use Cloudflare Pages and Worker Severless to implement VLESS protocol' />
	<meta name='twitter:url' content='https://${hostName}/' />
	<meta name='twitter:image' content='https://cloudflare-ipfs.com/ipfs/bafybeigd6i5aavwpr6wvnwuyayklq3omonggta4x2q7kpmgafj357nkcky' />
	<meta property='og:image:width' content='1500' />
	<meta property='og:image:height' content='1500' />
	<style>
		body {
			font-family: 'Roboto', sans-serif;
			background-color: var(--background-color, #f0f0f0);
			color: var(--text-color, #333);
			padding: 20px;
			margin: 0;
			transition: all 0.3s ease;
		}
		a {
			color: var(--link-color, #1a0dab);
			text-decoration: none;
			transition: color 0.3s;
		}
		a:hover {
			color: var(--link-hover-color, #1a0dab);
		}
		img {
			max-width: 100%;
			height: auto;
			border-radius: 8px;
			box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		}
		pre {
			white-space: pre-wrap;
			word-wrap: break-word;
			background-color: var(--pre-background-color, #fff);
			border: 1px solid var(--pre-border-color, #ddd);
			padding: 20px;
			margin: 20px 0;
			border-radius: 10px;
			box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
			color: var(--pre-text-color, #333);
			font-size: 1rem;
		}
		h1, h2, h3, h4, h5, h6 {
			color: var(--header-color, #1a0dab);
			text-shadow: var(--header-shadow, none);
			font-family: 'Orbitron', sans-serif;
		}
		button {
			background-color: var(--button-background-color, #1a0dab);
			color: var(--button-text-color, white);
			border: none;
			padding: 10px 20px;
			font-size: 1rem;
			cursor: pointer;
			transition: background-color 0.3s, transform 0.3s;
			border-radius: 5px;
		}
		button:hover {
			background-color: var(--button-hover-background-color, #1a0dab);
			transform: translateY(-2px);
		}
		.container {
			max-width: 1200px;
			margin: 0 auto;
			padding: 20px;
			background: rgba(255, 255, 255, 0.05);
			border-radius: 10px;
			box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
			backdrop-filter: blur(5px);
			-webkit-backdrop-filter: blur(5px);
			border: 1px solid rgba(255, 255, 255, 0.1);
		}
		.theme-button {
			margin: 10px;
			cursor: pointer;
		}
		.language-button {
			margin: 5px;
			cursor: pointer;
		}
		/* Dark mode */
		.dark {
			--background-color: #0a0f1c;
			--text-color: #e0e6f1;
			--link-color: #1abc9c;
			--link-hover-color: #16a085;
			--pre-background-color: #1b2735;
			--pre-border-color: #34495e;
			--pre-text-color: #c8d6e5;
			--header-color: #1abc9c;
			--header-shadow: 0 0 10px #1abc9c, 0 0 20px #1abc9c, 0 0 30px #1abc9c;
			--button-background-color: #1abc9c;
			--button-hover-background-color: #16a085;
			--button-text-color: #0a0f1c;
		}
		/* Gold mode */
		.gold {
			--background-color: #1f1f1f;
			--text-color: #d4af37;
			--link-color: #ffd700;
			--link-hover-color: #ffa500;
			--pre-background-color: #333;
			--pre-border-color: #555;
			--pre-text-color: #ffdd44;
			--header-color: #ffd700;
			--header-shadow: 0 0 10px #ffd700, 0 0 20px #ffd700, 0 0 30px #ffd700;
			--button-background-color: #ffd700;
			--button-hover-background-color: #ffdd44;
			--button-text-color: #333;
		}
		/* Purple mode */
		.purple {
			--background-color: #1a0033;
			--text-color: #d9b3ff;
			--link-color: #c71585;
			--link-hover-color: #d02090;
			--pre-background-color: #330066;
			--pre-border-color: #663399;
			--pre-text-color: #e6e6fa;
			--header-color: #ba55d3;
			--header-shadow: 0 0 10px #ba55d3, 0 0 20px #ba55d3, 0 0 30px #ba55d3;
			--button-background-color: #ba55d3;
			--button-hover-background-color: #dda0dd;
			--button-text-color: #fff;
		}
		/* Modal styles */
		.modal {
			display: none;
			position: fixed;
			z-index: 1;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			overflow: auto;
			background-color: rgba(0, 0, 0, 0.7);
			padding-top: 60px;
		}
		.modal-content {
			background-color: #fefefe;
			margin: 5% auto;
			padding: 20px;
			border: 1px solid #888;
			width: 80%;
			max-width: 600px;
			border-radius: 10px;
			box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
		}
		.close {
			color: #aaa;
			float: right;
			font-size: 28px;
			font-weight: bold;
		}
		.close:hover,
		.close:focus {
			color: black;
			text-decoration: none;
			cursor: pointer;
		}
		.modal-button {
			display: block;
			width: 100%;
			background-color: #1abc9c;
			color: white;
			border: none;
			padding: 15px;
			font-size: 1.1rem;
			cursor: pointer;
			margin-top: 20px;
			border-radius: 5px;
			transition: background-color 0.3s;
		}
		.modal-button:hover {
			background-color: #16a085;
		}
	</style>
	<!-- Add Google Fonts -->
	<link href='https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Roboto:wght@400;700&display=swap' rel='stylesheet'>
	<!-- Add FontAwesome library -->
	<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'>
	<script>
		// Language and Theme handling
		let currentTheme = localStorage.getItem('theme') || 'light';
		let currentLanguage = navigator.language || 'en';
		const themeButtonMapping = {
			light: "default",
			dark: "dark",
			gold: "gold",
			purple: "purple"
		};
		document.addEventListener('DOMContentLoaded', function() {
			document.body.classList.add(currentTheme);

			const languageButtons = document.querySelectorAll('.language-button');
			languageButtons.forEach(button => {
				button.addEventListener('click', function() {
					const language = this.dataset.language;
					currentLanguage = language;
					updateLanguage(language);
				});
			});

			const themeButtons = document.querySelectorAll('.theme-button');
			themeButtons.forEach(button => {
				button.addEventListener('click', function() {
					const theme = this.dataset.theme;
					changeTheme(theme);
				});
			});

			const modal = document.getElementById('myModal');
			const closeBtn = document.getElementsByClassName('close')[0];
			const agreeButton = document.getElementById('agreeButton');
			const agreementCheckbox = document.getElementById('agreementCheckbox');

			modal.style.display = 'block';
			agreementCheckbox.addEventListener('change', function() {
				agreeButton.disabled = !this.checked;
			});
			agreeButton.addEventListener('click', function() {
				modal.style.display = 'none';
			});
			closeBtn.addEventListener('click', function() {
				modal.style.display = 'none';
			});
			window.onclick = function(event) {
				if (event.target == modal) {
					modal.style.display = 'none';
				}
			};
		});

		function changeTheme(theme) {
			document.body.className = theme;
			localStorage.setItem('theme', theme);
		}

		function updateLanguage(language) {
			// Language data
			const languages = {
				en: {
					title: "User Agreement",
					terms: "Before using this tool, please read and agree to the following terms...",
					agree: "I agree to the terms and conditions"
				},
				zh: {
					title: "用户协议",
					terms: "在使用此工具之前，请阅读并同意以下条款...",
					agree: "我同意条款和条件"
				},
				fr: {
					title: "Accord de l'utilisateur",
					terms: "Avant d'utiliser cet outil, veuillez lire et accepter les conditions suivantes...",
					agree: "J'accepte les termes et conditions"
				},
				ja: {
					title: "ユーザー同意書",
					terms: "このツールを使用する前に、次の条件を読んで同意してください...",
					agree: "利用規約に同意します"
				},
				ko: {
					title: "사용자 동의서",
					terms: "이 도구를 사용하기 전에 다음 이용 약관을 읽고 동의하십시오...",
					agree: "이용 약관에 동의합니다"
				}
			};
			const selectedLanguage = languages[language] || languages.en;
			document.querySelector('.modal-content h2').textContent = selectedLanguage.title;
			document.querySelector('.modal-content p').textContent = selectedLanguage.terms;
			document.querySelector('#agreeButton').textContent = selectedLanguage.agree;
		}
	</script>
</head>

  `;

	// Join output with newlines, wrap inside <html> and <body>
	return `
  <html>
  ${htmlHead}
  <body>
<body>
	<!-- Modal -->
	<div id="myModal" class="modal">
		<div class="modal-content">
			<span class="close">&times;</span>
			<h2>User Agreement</h2>
			<p>Before using this tool, please read and agree to the following terms...</p>
			<ol>
				<li><strong>Compliance with Laws:</strong> You agree to use this tool in full compliance with all local, national, and international laws and regulations.</li>
				<li><strong>No Misuse:</strong> You agree not to misuse this tool for any illegal, unethical, or immoral activities. This includes, but is not limited to, using it to transmit or facilitate the transmission of unwholesome, harmful, or offensive content.</li>
				<li><strong>Responsibility Disclaimer:</strong> All actions taken using this tool are your own responsibility. The creators and contributors of this project, including the GitHub account <a href="https://github.com/BEDEBAH" target="_blank">BEDEBAH</a>, are not aware of or responsible for how you choose to use this tool.</li>
				<li><strong>No Liability:</strong> The creators and contributors of this project are not liable for any consequences resulting from your use of this tool, including but not limited to legal, financial, or reputational damages.</li>
				<li><strong>Non-affiliation:</strong> This tool is provided independently and is not affiliated with or endorsed by any organization, government, or corporate entity.</li>
				<li><strong>Open Source Contributions:</strong> This project is contributed by the GitHub account <a href="https://github.com/win877969" target="_blank">BEDEBAH</a>. The actual controller of this account is Satdog, whose official website is <a href="https://cf-ws.bmkg.xyz" target="_blank">https://cf-ws.bmkg.xyz</a>. Satdog's GitHub official account is <a href="https://github.com/win877969" target="_blank">GITHUB</a>, with the official page at <a href="https://t.me/seaker877" target="_blank">TELEGRAM</a>.</li>
				<li><strong>Independence of the Author:</strong> The author of this project is not aware of and is not responsible for how this tool is used. The author does not endorse or condone any particular use case for this tool.</li>
				<li><strong>Amendments:</strong> The terms of this agreement may be updated or changed at any time, and it is your responsibility to stay informed of such changes by reviewing the agreement periodically.</li>
			</ol>
			<p>Please confirm your agreement to these terms by checking the box below and clicking "Agree".</p>
			<label><input type="checkbox" id="agreementCheckbox"> I agree to the terms and conditions</label>
			<button id="agreeButton" class="modal-button" disabled>Agree</button>
		</div>
	</div>

	<div class="container">
		<h1>Welcome to BEDEBAH: VLESS Configuration</h1>
		<p>Generate your VLESS protocol configuration with ease and efficiency. This tool is powered by Cloudflare Pages and Worker Severless technology to deliver seamless performance.</p>
		
		<!-- Theme and Language Switcher -->
		<div class="theme-switcher">
			<button class="theme-button" data-theme="light">Light</button>
			<button class="theme-button" data-theme="dark">Dark</button>
			<button class="theme-button" data-theme="gold">Gold</button>
			<button class="theme-button" data-theme="purple">Purple</button>
		</div>
  <pre style='background-color: transparent; border: none;'>${header}</pre>
  <pre>${output}</pre>
  </body>
  <script>
	function copyToClipboard(text) {
	  navigator.clipboard.writeText(text)
		.then(() => {
		  alert("Copied to clipboard");
		})
		.catch((err) => {
		  console.error("Failed to copy to clipboard:", err);
		});
	}
  </script>
  </html>`;
}

const เซ็ตพอร์ตHttp = new Set([80, 8080, 8880, 2052, 2086, 2095, 2082]);
const เซ็ตพอร์ตHttps = new Set([443, 8443, 2053, 2096, 2087, 2083]);

function สร้างวเลสSub(ไอดีผู้ใช้_เส้นทาง, ชื่อโฮสต์) {
	const อาร์เรย์ไอดีผู้ใช้ = ไอดีผู้ใช้_เส้นทาง.includes(',') ? ไอดีผู้ใช้_เส้นทาง.split(',') : [ไอดีผู้ใช้_เส้นทาง];
	const ส่วนUrlทั่วไปHttp = `?encryption=none&security=none&fp=random&type=ws&host=${ชื่อโฮสต์}&path=%2F%3Fed%3D2048#`;
	const ส่วนUrlทั่วไปHttps = `?encryption=none&security=tls&sni=${ชื่อโฮสต์}&fp=random&type=ws&host=${ชื่อโฮสต์}&path=%2F%3Fed%3D2048#`;

	const ผลลัพธ์ = อาร์เรย์ไอดีผู้ใช้.flatMap((ไอดีผู้ใช้) => {
		const การกำหนดค่าHttp = Array.from(เซ็ตพอร์ตHttp).flatMap((พอร์ต) => {
			if (!ชื่อโฮสต์.includes('pages.dev')) {
				const ส่วนUrl = `${ชื่อโฮสต์}-HTTP-${พอร์ต}`;
				const วเลสหลักHttp = atob(pt) + '://' + ไอดีผู้ใช้ + atob(at) + ชื่อโฮสต์ + ':' + พอร์ต + ส่วนUrlทั่วไปHttp + ส่วนUrl;
				return พร็อกซีไอพีs.flatMap((พร็อกซีไอพี) => {
					const วเลสรองHttp = atob(pt) + '://' + ไอดีผู้ใช้ + atob(at) + พร็อกซีไอพี + ':' + พอร์ต + ส่วนUrlทั่วไปHttp + ส่วนUrl + '-' + พร็อกซีไอพี + '-' + atob(ed);
					return [วเลสหลักHttp, วเลสรองHttp];
				});
			}
			return [];
		});

		const การกำหนดค่าHttps = Array.from(เซ็ตพอร์ตHttps).flatMap((พอร์ต) => {
			const ส่วนUrl = `${ชื่อโฮสต์}-HTTPS-${พอร์ต}`;
			const วเลสหลักHttps = atob(pt) + '://' + ไอดีผู้ใช้ + atob(at) + ชื่อโฮสต์ + ':' + พอร์ต + ส่วนUrlทั่วไปHttps + ส่วนUrl;
			return พร็อกซีไอพีs.flatMap((พร็อกซีไอพี) => {
				const วเลสรองHttps = atob(pt) + '://' + ไอดีผู้ใช้ + atob(at) + พร็อกซีไอพี + ':' + พอร์ต + ส่วนUrlทั่วไปHttps + ส่วนUrl + '-' + พร็อกซีไอพี + '-' + atob(ed);
				return [วเลสหลักHttps, วเลสรองHttps];
			});
		});

		return [...การกำหนดค่าHttp, ...การกำหนดค่าHttps];
	});

	return ผลลัพธ์.join('\n');
}

const cn_hostnames = [
	'cf-prem.bmkg.xyz',              
	];
