import React from 'react'
import TAPI from './TAPI'
import TwitchCard from './TwitchCard'

export default class TwitchInfo extends React.Component {
	constructor(props){
		super(props);

		this.state={
			login: '',
			infoProfile: '',
			loading: '',
		};

		
	}

	async getData() {
		//console.log('Mapping profile...')
		const result = await TAPI.get(`https://api.twitch.tv/helix/users?login=${this.props.login}`)//.then( result => {	// login will eventually be a prop
				
		console.log(result.data.data)
				
		const userProfile = await result.data.data.map((profile, key) => {

			console.log("Mapped Profile:", profile);
			//onsole.log("Mapped Profile:", profile.profile_image_url);
			
			this.setState( () => ({
				infoProfile: profile,
				loading: false
				})
			);
		})
	}

	 async componentDidMount(){
	 	this.setState( () => ({
				loading: true
			})
		);
		this.getData();		
    }

    async componentDidUpdate(prevProps, prevState){

    	if(this.props.login !== prevProps.login){
    		this.setState( () => ({
					loading: true
				})
			);
			this.getData();
    	}
    }



	render() {
		let tItem =  <TwitchCard key={this.state.infoProfile.id} upi={this.state.infoProfile} />;
		return(
			<div> {this.state.loading ? 'Loading' : tItem} </div>
		)
	}
}