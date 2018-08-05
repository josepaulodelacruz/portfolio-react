import React from 'react';
import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Contact from './contact';
import Project from './project';
import Resume from './resume';
import { HashRouter, Switch, Route } from 'react-router-dom';


const Main = () => {
	
	return (
	<HashRouter>
		<Switch>
			<Route exact path="/" component={LandingPage}/>
			<Route path="/aboutme" component={AboutMe} />
			<Route path="/contact" component={Contact}/>
			<Route path="/project" component={Project}/>
			<Route path="/resume"  component={Resume}></Route>
		</Switch>
	</HashRouter>
	);
}

export default Main;