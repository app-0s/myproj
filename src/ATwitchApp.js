import React from "react";
import TwitchInfo from './TwitchStuff/TwitchUserInfo'

export default class UTA extends React.Component {
	constructor(props){
		super(props);

		this.state={
			profile: ''
		};
	}

	newProfile = (userProfile) => {
		this.setState(prevState => ({
			profile: userProfile,
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
		state = {
			loginName: '',
		};


	// handleSubmit (async) event method within class 
	handleSubmit = async(event) => {
		event.preventDefault();
		// TwitchInfo.setState( () => {
		// 	login = loginName;
		// });
		//const resp = await TwitchInfo(login="appebello");	// Contains an await
		console.log(`Submitting ${this.state.loginName}`);
		this.props.onSubmit(
				<TwitchInfo login={this.state.loginName}/>
		);
		

		this.setState({ loginName: '' });
	};

	render() {
		return(
			<form onSubmit={this.handleSubmit}>
				<input type="text"
						placeholder="Twitch User Name"
						value={this.state.loginName}
						onChange={event => this.setState({ loginName:event.target.value})}
						required
				/>
				<button>Add User</button>
			</form>
		);	
	};
}