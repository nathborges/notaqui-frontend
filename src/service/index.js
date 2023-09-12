import axios from '../axios/axios';

export default {
	list() {
		return axios.get('/compras/buscar');
	},
	create() {
		console.log('oi');
	}
};
