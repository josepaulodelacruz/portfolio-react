import React, { Component } from 'react';
import { Tabs, Tab } from 'react-mdl';
import FirstYearLeft  from './Credentials/FirstYearLeft';
import SecondYearRight from './Credentials/SecondYearRight';
import SecondYearLeft from './Credentials/SecondYearLeft';
import ThirdYearRight from './Credentials/ThirdYearRight';
import ThirdYearLeft from './Credentials/ThirdYearLeft';
import FourthYearRight from './Credentials/FourthYearRight'
import FourthYearLeft from './Credentials/FourthYearLeft'
class project extends Component {
	constructor(props){
		super(props);
		this.state = {
			activeTab: 0,
			appear: false
		};
	}
	componentDidUpdate(){
		this.state ={currentState: 0};
	}

	toggleCategories(){
		if(this.state.activeTab === 0){
			if(this.state.activeTab > this.state.currentState){
				console.log('greater');
				return (
					<div>Hello Worldl</div>
				);
			}else{
				console.log('less');
				return( 
					<div><FirstYearLeft/></div>
				)
			}
			
		}else if(this.state.activeTab === 1){
			if(this.state.activeTab >= this.state.currentState){
				console.log('greater');
				return (
					<div><SecondYearRight/></div>
				);
			}else{
				console.log('less');
				return (
					<div><SecondYearLeft/></div>
				);
			}
		}else if(this.state.activeTab === 2){
			if(this.state.activeTab >= this.state.currentState){
				console.log('greater');
				return(
				<div><ThirdYearRight/></div>
				);
				
			}else {
				console.log('less');
				return (
				<div><ThirdYearLeft/></div>
				);
			}
		}else if (this.state.activeTab === 3){
			if(this.state.activeTab >= this.state.currentState){
				console.log('greater');
				return(
					<div><FourthYearRight/></div>
				);
			}else {
				console.log('less');
				return(
					<div><FourthYearLeft/></div>
				);
			}
		}

	}

	handlePrevState(){
		this.setState({currentState: this.state.activeTab});

	}


	render(){
		return (
			<div className="category-tabs">
				<Tabs activeTab={this.state.activeTab} onClick={this.handlePrevState.bind(this)} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
					<Tab>1st Year Semester</Tab>
					<Tab>2nd Year Semester</Tab>
					<Tab>3rd Year Semeter</Tab>
					<Tab>4th Year Semester</Tab>
				</Tabs>
				<div className="sourceCodeText">
					{this.toggleCategories()}
				</div>
			</div>	
		);
	}
}


export default project;