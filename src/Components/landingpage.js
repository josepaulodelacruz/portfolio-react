import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { CSSTransitionGroup } from 'react-transition-group';
class LandingPage extends Component {
		render(){
		return (
			<div style={{width: '100%', margin: 'auto'}}>
				<Grid className="landing-grid">
					<Cell col={12}>
					<CSSTransitionGroup
					component="div"
					transitionName="landing"
					transitionEnterTimeout={500}
			          transitionAppearTimeout={500}
			          transitionLeaveTimeout={300}
			          transitionAppear={true}>
						<div className="front-img"/>
					<div className="banner-text" style={{opacity: '0.8'}}>
						<h1>Front-end Web Developer</h1>
						<hr/>
						<p>HTML/CSS | Javascript | JQuery | Bootstrap | React | NodeJS | Express</p>
						<div className="social-links">
							<a href="https://www.facebook.com/jjeypi" target="_blank" rel="noopener noreferrer">
								<i className="fa fa-facebook-square" />
							</a>
							<a href="http://google.com" target="_blank" rel="noopener noreferrer">
								<i className="fa fa-github-square" />
							</a>
							<a href="http://google.com" target="_blank" rel="noopener noreferrer">
								<i className="fa fa-globe"/>
							</a>
							<a href="http://google.com" target="_blank" rel="noopener noreferrer">
								<i className="fa fa-laptop"></i>
							</a>
						</div>
					</div>
					</CSSTransitionGroup>
					</Cell>
				</Grid>
			</div>
		);
	}
}
	

export default LandingPage;