import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:1001',
});

export default api;