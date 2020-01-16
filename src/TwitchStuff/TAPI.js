import axios from 'axios';

export default axios.create({
	//baseurl: 'https://api.twitch.tv/helix/',
	//method: 'get',
	timeout: 1000,	
	headers: {'Client-ID': ''} // A Twitch App Client-ID is needed to operate 
})