import React, { Component } from 'react';
import Education from './Education';
import { CSSTransitionGroup } from 'react-transition-group';
class Resume extends Component {
	render(){
		return (
			<CSSTransitionGroup
					component="div"
					transitionName="route"
					transitionEnterTimeout={500}
			          transitionAppearTimeout={500}
			          transitionLeaveTimeout={300}
			          transitionAppear={true}>
			<div className="resume-body">
				<section className="left-style">
					<div className="photo-resume"/>
					<h2 style={{margin: '10px 0 10px 0' ,lineHeight: '0px', color: 'grey'}}>Programmer<hr style={{width: '50%', color: 'blue'}}/></h2>
					<p>A creative and detailed individual with ability to develop effective and efficient solutions with zero tolerance for errors. Looking to join a progressive tech company where my technical skills will be fully harnessed.</p>
					<h2 style={{margin: '10px 0 10px 0' ,lineHeight: '0px'}}>Address<hr style={{width: '50%', color: 'blue'}}/></h2>
					<p>Blk 24 Lot 18 Miami street ph2 Saint Joseph 6 Brgy. Butong Cabuyao Laguna.</p>
					<h2 style={{margin: '10px 0 10px 0' ,lineHeight: '0px'}}>Phone<hr style={{width: '50%', color: 'blue'}}/></h2>
					<p style={{fontSize: '2rem'}}>+{63} 905 653 5707</p>
					<h2 style={{margin: '10px 0 10px 0' ,lineHeight: '0px'}}>Email<hr style={{width: '50%', color: 'blue'}}/></h2>
					<p style={{fontSize: '1.5rem'}}>delacruzjosepaulo@gmail.com</p>
					<h2 style={{margin: '10px 0 10px 0' ,lineHeight: '0px'}}>Web Site<hr style={{width: '50%', color: 'blue'}}/></h2>
					<p style={{fontSize: '1.5rem'}}>www.facebook.com/jjeypi</p>
				</section>
				<section className="right-style">
					<Education/>
				</section>
			</div>
			</CSSTransitionGroup>
		);
	}

}


export default Resume;