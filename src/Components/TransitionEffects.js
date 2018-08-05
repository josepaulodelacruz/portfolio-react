import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class FadeIn extends Component {
	componentDidMount(){
		console.log("componentDidMount", this.displayName);
		var that = this;
		var elem = ReactDOM.findDOMNode(that);
		elem.style.opacity = 0;
		window.requestAnimationFrame(function(){
			elem.style.transitiion = that.props.transition || "opacity 5000ms";
			elem.style.opacity = 1;
		});
	}
	render(){
		return(
			<div>
				{this.props.children}
			</div>
		)
	}
}

export default FadeIn;