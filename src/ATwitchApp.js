import React from "react";
import TwitchInfo from './TwitchStuff/TwitchUserInfo'
import './TwitchApp.css';

export default class UTA extends React.Component {
	constructor(props){
		super(props);

		this.state={
			profile: []
		};
	}

	newProfile = async(userProfile) => {
		await this.setState( prevState => ({
			profile: <TwitchInfo login={userProfile}/>,
		}));
	}

	render(){
		return (
			<div>
				<EntryForm onSubmit={this.newProfile} />
				{this.state.profile}
			</div>
		);
	};
	
}


class EntryForm extends React.Component{
		constructor(props){
		super(props)
			this.state = {
				loginName: '',
			};
		}

	// handleSubmit (async) event method within class 
	handleSubmit = async(event) => {
		event.preventDefault();
		console.log(`Entryform.LoginName: ${this.state.loginName}`);
		 this.props.onSubmit(
			this.state.loginName
		);

		this.setState({ loginName: '' });
	};

	render() {
		return(
			<form onSubmit={this.handleSubmit} className="SubmitForm">
				<input type="text"
						placeholder="Twitch User Name"
						value={this.state.loginName}
						onChange={event => this.setState({ loginName:event.target.value})}
						required
				/>
				<button className="AddButton">Add User</button>
			</form>
		);	
	};
}