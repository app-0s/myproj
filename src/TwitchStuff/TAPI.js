//v0.1.1 ToDo:
// - Add reading client-ID from the ../../data/client-data/clientD.json (MAKE SURE THIS FILE IS IGNORED THROUGH .gitignore)

import axios from 'axios'; 
import data from '../data/client-data/clientD.json';

export default axios.create({
	
	//baseurl: 'https://api.twitch.tv/helix/',
	//method: 'get',
	timeout: 1000,	
	headers: {'Client-ID': data[0].clientID} // A Twitch App Client-ID is needed to operate 
})