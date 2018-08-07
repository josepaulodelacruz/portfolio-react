import React, { Component } from 'react';

class Education extends Component {
	render(){
		const eduGrid = {
			display: 'grid',
			gridGap: '20px',
			gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr)',
			padding: '10px',
			margin: 'auto',
			minHeight: '150px'
		}

		const headStyle = {
			fontFamily: 'arial helvetica san-serif',
			fontSize: '2rem',
			marginLeft: '20px'
		}
		const fontStyle = {
			fontFamily: 'arial helvetica san-serif',
			fontSize: '1.4rem'
		}
		return(
			<section className="edu-grid">
				<div>
					<h3 style={{fontFamily: 'arial helvetica san-serif', marginLeft: '20px'}}>Education</h3>
					<hr style={{width: '50%', marginLeft: '20px'}}/>
					<div style={eduGrid}>
						<section>
							<p style={headStyle}>Citi Global College</p>
							<p style={{fontSize: '1rem', marginLeft: '20px'}}>Bachelor of Science in Computer Science<br/>Cabuyao Laguna</p>
						</section>
						<section style={{marginLeft: '20px'}}>
							<p style={fontStyle}>2015-PRESENT</p>
						</section>
					</div>
					<div style={eduGrid}>
						<section>
							<p style={headStyle}>Rizal Technological University</p>
							<p style={{fontSize: '1rem', marginLeft: '20px'}}>Bachelor of Science in Industrial Engineering<br/>Pasig City</p>
						</section>
						<section style={{marginLeft: '20px'}}>
							<p style={fontStyle}>2012-2013<br/>(under-grad)</p>
						</section>
					</div>
					<div style={eduGrid}>
						<section>
							<p style={headStyle}>Hosanna Christian Academy</p>
							<p style={{fontSize: '1rem', marginLeft: '20px'}}>High School<br/>Cabuyao Laguna</p>
						</section>
						<section style={{marginLeft: '20px'}}>
							<p style={fontStyle}>2008-2012</p>
						</section>
					</div>
					<h3 style={{fontFamily: 'arial helvetica san-serif', marginLeft: '20px'}}>Work Experience</h3>
					<hr style={{width: '50%', marginLeft: '20px'}}/>
					<div style={eduGrid}>
						<section>
							<p style={headStyle}>Samsung Semphil</p>
							<p style={{fontSize: '1rem', marginLeft: '20px'}}>Machine Operator<br/>Batino, Calamba Laguna</p>
						</section>
						<section style={{marginLeft: '20px'}}>
							<p style={fontStyle}>2014</p>
						</section>
					</div>
					<div style={eduGrid}>
						<section>
						<h3 style={{fontFamily: 'arial helvetica san-serif', marginLeft: '20px'}}>Certificate</h3>
						<hr style={{width: '50%', marginLeft: '20px'}}/>
							<p style={headStyle}>SAP online Business</p>
						</section>
						<section style={{marginLeft: '20px'}}>
							<p style={fontStyle}>2017</p>
						</section>
					</div>
				</div>
			</section>
		);
	}
}

export default Education;