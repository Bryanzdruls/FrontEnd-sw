import axios from 'axios';
const variablesDeEntorno = import.meta.env.VITE_API_URL

const VITE_API_URL = variablesDeEntorno;

const nodeApi = axios.create({
    baseURL: VITE_API_URL
})

//todo configurar interceptores
nodeApi.interceptors.request.use( config => {
    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token'),
    }
    
    return config;
})

export default nodeApi;