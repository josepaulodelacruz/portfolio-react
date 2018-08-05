import React, { Component } from 'react';
import { List, ListItem, ListItemContent} from 'react-mdl';
import DialogModal from './DialogModal';
class Contact extends Component {
	render(){
		return (
			<div className="contact-body">
				<section className="contact-grid">
					<div className="contact-grid-1">
						<h2>Jose Paulo</h2>
						<div className="avatar"/>
						<p className="about-purpose">The sole purpose of this Web Application is for finding an intership or OJT. If you want to contact me, I do some freelance stuff like systems, projects, or Web Application. Feel free to send me a message.</p>
						<br/>
						<DialogModal/>
					</div>	
					<div className="contact-grid-2">
						<h2>Contact Me</h2>
						<hr/>
						<List>
						  <ListItem>
						    <ListItemContent style={{fontSize: '25px', fontFamily: 'anton',}}>
							<i className="fa fa-phone-square" aria-hidden="true"/>
						   {123} 456-78910
						   </ListItemContent>
						  </ListItem>

						  <ListItem>
						    <ListItemContent style={{fontSize: '25px', fontFamily: 'anton',}}>
							<i className="fa fa-fax" aria-hidden="true"/>
						   {123} 456-78910
						   </ListItemContent>
						  </ListItem>

						  <ListItem>
						    <ListItemContent style={{fontSize: '25px', fontFamily: 'anton',}}>
							<i className="fa fa-envelope" aria-hidden="true"/>
						  	 delacruz_jp@gmail.com
						   </ListItemContent>
						  </ListItem>
						</List>
					</div>
				</section>

			</div>
		);
	}
}

export default Contact;