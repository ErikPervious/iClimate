import axios from 'axios';

// https://api.hgbrasil.com/weather?key=d372d605&lat=-23.682&lon=-46.875

export const key = 'd372d605';

const api = axios.create({
    baseURL: 'https://api.hgbrasil.com'
})

export default api;