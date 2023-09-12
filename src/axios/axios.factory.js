import axios from 'axios';

function Factory(baseURL) {
	if (!baseURL || typeof baseURL !== 'string') {
		throw new Error('base url must be set when getting a custom axios instance');
	}

	const instance = axios.create({
		baseURL,
		withCredentials: false,
	});

	return instance;
}

export default Factory;
