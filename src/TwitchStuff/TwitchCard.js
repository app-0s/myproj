import React from 'react'
import TwitchInfo from './TwitchUserInfo'
import '../TwitchApp.css';

// export default function DisplayTwitchCard() {
//   //


export default function TwitchCard(props){

  let userProfile = props.upi;

  // Background color should be based on if stream is live (seen by title existance?)

  return (
    <div className="TCard">
          <img src={userProfile.profile_image_url} style={{width:'100px'}}/>
          <h4>{userProfile.display_name}</h4>
          <p>Views: {userProfile.view_count} </p>
    </div>
  )
}