import React from 'react'
import TwitchInfo from './TwitchUserInfo'

// export default function DisplayTwitchCard() {
//   //



//   // Note: This will eventually be an api call
//   return(
//     <TwitchInfo />  
//   )

//    // <div><TwitchCard 
//    //    imgUrl='https://static-cdn.jtvnw.net/jtv_user_pictures/appebello-profile_image-b4642da3d7293213-300x300.png'
//    //    displayName='appebello'
//    //    viewCount='15683'
//    //    />
//    //  </div>
// }

export default function TwitchCard(props){
  const CardStyle ={
      display: 'inline-block',
      borderStyle:'solid',
      padding: '15px',
      marginLeft: '15px',
      textAlight: 'center'
    }

  let userProfile = props.upi;

  // Background color should be based on if stream is live (seen by title existance?)

  return (
    <div style={CardStyle}>
          <img src={userProfile.profile_image_url} style={{width:'100px'}} />
          <h4>{userProfile.display_name}</h4>
          <p>Views: {userProfile.view_count} </p>
    </div>
  //  <TwitchInfo style={CardStyle} />
  //  <div className='twitch-card' style={CardStyle}>
  //    <img src={props.imgUrl} style={{width:'100px'}}/>
  //    <h4>{props.displayName}</h4>
      // <p>Views: {props.viewCount}</p>
    // </div>
  )
}