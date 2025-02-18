import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;

const instance = axios.create({
	baseURL: 'https://developer-lostark.game.onstove.com',
	headers: {
		'Content-Type': 'application/json;sharset-UTF-8',
		'Accept': 'application/json',
		'Authorization': `Bearer ${apiKey}`,
	},
});

export default instance;
