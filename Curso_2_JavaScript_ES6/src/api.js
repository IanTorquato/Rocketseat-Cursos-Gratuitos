import axios from 'axios'

// Deste jeito pode-se configurar a 'baseUrl':
const api = axios.create(
{
	// baseUrl: Todas as requisições da api vão partir desta url
	baseURL: 'https://api.github.com'
})

export default api