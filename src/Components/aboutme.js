import React, { Component } from 'react';
import AboutMeText from './AboutMeText';
import Gallery from './Gallery';
class AboutMe extends Component {
	render(){
		return (
			<div className="about-me">
				<header className="about-header">
					<section className="me-header"/>
					<div className="info-text">
						<h3>About Me</h3>
							<div className="about-text">
							<AboutMeText/>
						</div>	
					</div>
				</header>
				<section className="positive-points">
					<div className="self-photo"/>
					<div className="txt-ablities">
						<h3>-I am Eager to learn new technologies/framework that will add up to my skills arsenal.</h3>
						<h3>-I'm self-reliant that only need minimal supervision.</h3>
						<h3>-I take feedback very well.</h3>
						<h3>-I'm easy to get hang-out with.</h3>
						<h3>-My positive outlook in life can help to my future projects.</h3>
						<h3>-Very passionate about Programming.</h3>
					</div>
				</section>
				<section className="credentials">
				<div className="achievements">
					<h3>Achievements
					<hr/>
					</h3>
					<h3>Dean's Lister Certification <p>2015-2016</p></h3>
					<h3>Portfolio Website <p>Using HTML/CSS</p></h3>
					<h3>C++ Quiz Game with Multithreading and AI Calibrating questions<p>2016 - 2017</p></h3>
					<h3>Point Of Sales System with Barcode Scanner Technology<p>Using VB.net 2016 - 2017</p></h3>
					<h3>Automated Inventory System<p>Using VB.net 2016 - 2017</p></h3>
					<h3>Ecommerce Website<p>Using HTML/CSS/JAVASCRIPT </p></h3>
					<h3>Portfolio Web Application<p>Using ReactJS/React-mdl</p></h3>
					<h3>Trubercycle Android/IOS Application<p>Using Cordova & Ionic</p></h3>
				</div>
				<Gallery/>
				</section>
				<footer>
					<p>Jose Paulo Dela Cruz &copy; 2018</p>
				</footer>
			</div>
		);
	}
}

export default AboutMe;