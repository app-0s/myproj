import React from 'react'
import TAPI from './TAPI'
import TwitchCard from './TwitchCard'

export default class TwitchInfo extends React.Component {
	constructor(props){
		super(props);

		this.state={
			login: '',
			infoProfile: [],
		}
	}

	componentDidMount(){
		TAPI.get(`https://api.twitch.tv/helix/users?login=${this.props.login}`).then( result => {	// login will eventually be a prop

				// const userProfile = result.data.data.map(profile => <TwitchCard key={profile.id} upi={profile} /> )
				const userProfile = result.data.data.map((profile, key) => {

					console.log("Mapped Profile:", profile);
					//onsole.log("Mapped Profile:", profile.profile_image_url);
					return (
						<TwitchCard key={profile.id} upi={profile} />
						// <div key={profile.id}> 
						//  	<img src={profile.profile_image_url} style={{width:'100px'}} />
						//  	<h4>{profile.display_name}</h4>
						//  	<p>Views: {profile.view_count} </p>
						// </div>
					)
				})
				this.setState( () => ({
						infoProfile: userProfile
					})
				);

		})
		.catch(function (error) {
			console.log(error);
		});

		
	}
	render() {
		return(
			<div> {this.state.infoProfile} </div>
		)
	}
	// render() {
	// 	//console.log(this.state.infoProfile)
	// 	 return (
	// 	 	<div>
	// 	 		{this.state.infoProfile}
	// 	 	</div>
	// 		 	// <img src={this.state.infoProfile.profile_image_url} style={{width:'100px'}} />
	// 		 	// <h4>{this.state.infoProfile.display_name}</h4>
	// 		 	// <p>Views: {this.state.infoProfile.view_count} </p>
	// 		// </div>
	// 	)
	// }
		  //    <img src={props.imgUrl} style={{width:'100px'}}/>
  		//    <h4>{props.displayName}</h4>
      // <p>Views: {props.viewCount}</p>
	
}